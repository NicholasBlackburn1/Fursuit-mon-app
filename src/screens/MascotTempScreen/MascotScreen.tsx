import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ProgressCircle } from 'react-native-paper';
import Cards from '../../componets/Cards/Cards';
import { useNavigation } from '@react-navigation/native';

const MascotScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fursuit Safety Info</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Cards moduleName="Heart Rate" sensorsName="" />

        </View>

        <View style={styles.card}>
        <Cards moduleName="Humitiy" sensorsName="" />
        </View>

        <View style={styles.card}>
        <Cards moduleName="Temp" sensorsName="" />
        </View>
      </View>

      <View style={styles.progressContainer}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={0.75} // Replace with actual countdown timer progress
          size={150}
          thickness={5}
          color="blue"
        />
        {/* Add countdown timer text here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    width: '30%',
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressCircle: {
    marginBottom: 20,
  },
});

export default MascotScreen;
