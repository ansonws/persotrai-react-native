import React, {Component} from 'react';
import TabNavigator from '../navigators/TabNavigator';
import { createAppContainer } from 'react-navigation';

class Home extends Component {
  render() {
    return (
      <TabNavigator />
    )
  }
}

export default createAppContainer(TabNavigator);
