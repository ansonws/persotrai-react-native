import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TrainerIndex from './src/screens/TrainerIndex';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
// import TabNavigator from './src/navigators/TabNavigator';

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
  Home: {
    screen: Home,
  },
  // TabNavigator: {
  //   screen: TabNavigator,
  // }
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
