import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trainer from '../requests/trainer';

const Profile = props => {

  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;  
