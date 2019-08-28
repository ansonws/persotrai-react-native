import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';

const SignUp = props => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <TouchableOpacity>
          <SvgUri
            width="150"
            height="150"
            style={styles.addProfilePicture}
            uri="https://icon-library.net/images/96e3cd989c.svg.svg"
          />
        </TouchableOpacity>
        <TextInput 
          placeholder="Username"
          style={styles.input} 
        />
        <TextInput 
          placeholder="Email"
          style={styles.input} 
        />
        <TextInput 
          placeholder="Password"
          style={styles.input} 
        />
        <TextInput 
          placeholder="Confirm Password"
          style={styles.input} 
        />
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => this.props.navigation.navigate('Home')} 
        >
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
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
  addProfilePicture: {
    marginBottom: 50,
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

export default SignUp;
