import React from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import firebase from 'react-native-firebase';

class GoogleLogin extends React.Component {
  state = { user: null };
  googleLogin = async () => {
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken
      );
      // login with credential
      const currentUser = await firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);

      console.info(JSON.stringify(currentUser.user.toJSON()));
    } catch (e) {
      console.error(e);
    }
  };
  _handleSignOut = () => {
    firebase.auth().signOut();
  };
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+91',
          confirmResult: null
        });
      }
    });
    this.unsubscribeLinks = firebase.links().onLink(url => {
      console.log(url);
    });
    firebase
      .links()
      .getInitialLink()
      .then(url => {
        console.log(url)
      });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.unsubscribeLinks) this.unsubscribeLinks();
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <GoogleSigninButton
          style={{ width: 230, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={this.googleLogin}
        />
        <Text>{JSON.stringify(this.state.user)}</Text>
        <Button title="email link" onPress={this._handleEmailLoginLink} />
        <Button title="sign out" onPress={this._handleSignOut} />
      </View>
    );
  }
}

export default GoogleLogin;
