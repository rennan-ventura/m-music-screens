import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

import { Provider } from 'react-redux'
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#1f1f1f" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
    </Provider>
  );
}

