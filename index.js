import React from 'react';
import { AppRegistry, View, ActivityIndicator, Text } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/configureStore';
import { Provider } from 'react-redux';
const { store, persistor } = configureStore();
import FirebaseApp from './src/components/FirebaseApp';
import GoogleLogin from './src/components/GoogleLogin';

const Loading = props => (
  <View>
    <ActivityIndicator size="large" />
    <Text>Loading</Text>
  </View>
);

const Mount = props => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <FirebaseApp />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent('mobileapp', () => Mount);
