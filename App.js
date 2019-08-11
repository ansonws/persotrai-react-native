import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TrainerIndex from './src/screens/TrainerIndex';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';

class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  SignUp: {
    screen: SignUp,
  },
  TrainerIndex: {
    screen: TrainerIndex,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(AppStackNavigator);
