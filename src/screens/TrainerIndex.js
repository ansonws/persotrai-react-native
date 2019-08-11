import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Trainer from '../requests/trainer';

const TrainerIndex = props => {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Trainer.index().then(data => {
      setTrainers(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Trainers</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {trainers.length ? (
            <>
            {trainers.map(trainer => (
              <Text key={trainer.id}>{trainer.user.first_name} {trainer.user.last_name}</Text>  
            ))}
            </>
          ) : (
          <Text>There are no Trainers</Text>
          )}
        </>
      )}
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

export default TrainerIndex;  
