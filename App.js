/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { iOSUIKit } from 'react-native-typography';
import Form from './src/components/Form';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text style={iOSUIKit.largeTitleEmphasized}>Hello iOS UI Kit!</Text>
        <Form />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  }
});
