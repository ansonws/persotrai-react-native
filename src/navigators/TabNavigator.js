import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TrainerIndex from '../screens/TrainerIndex';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  ScreenOne: {
    screen: TrainerIndex,
    navigationOptions: {
      tabBarLabel: 'Nearby',
      tabBarIcon: () => (
        <Ionicons name="md-compass" size={24} />
      )
    }
  },
  ScreenTwo: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: () => (
        <Ionicons name="md-compass" size={24} />
      )
    }
  },
})

export default TabNavigator;
