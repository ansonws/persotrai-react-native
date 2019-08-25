import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Welcome extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image 
            source={require('../../assets/test.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.title}>Persotrai</Text>
        <View>
          <TextInput 
            placeholder="Username or Email"
            style={styles.input} 
          />
          <TextInput 
            placeholder="Password"
            style={styles.input} 
          />
        </View>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate('Home')} 
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Button 
          title="Don't have an account? Sign Up" 
          onPress={() => this.props.navigation.navigate("SignUp")} 
        />
        <Button 
          title="Continue as Guest" 
          onPress={() => this.props.navigation.navigate("Home")} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    margin: 40,
  },
  input: {
    height: 55,
    width: 320,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  loginButton: {
    height: 40,
    width: 150,
    backgroundColor: '#4287f5',
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default Welcome;
