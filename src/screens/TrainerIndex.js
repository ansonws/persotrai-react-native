import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Trainer from '../api/trainer';

const TrainerIndex = props => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    Trainer.index().then(data => {
      setTrainers(data);
    });
  }, []);
  return (
    <View>
      <Text>Trainers</Text>
      {trainers.map(trainer => (
        <Text key={trainer.id}>{trainer.user.first_name} {trainer.user.last_name}</Text>  
      ))}
    </View> 
  )
}

export default TrainerIndex;  
