import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Welcome extends Component {
  // static navigationOptions = {
  //   header: 'none'
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
