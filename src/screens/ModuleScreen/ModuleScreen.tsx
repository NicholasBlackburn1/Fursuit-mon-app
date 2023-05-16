import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Cards from '../../componets/Cards';

const ModuleScreen = ({ route }) => {
  const { module, sensors } = route.params;
  console.log("data "+module);
    // Split the comma-separated string into an array
    const sensorArray = sensors.split(',').map((sensor) => sensor.trim());

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>{module} Data</Text>
        {sensorArray.map((sensor, index) => (
          <View key={index} style={styles.card}>
           <Cards moduleName={sensor} sensorsName="" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingIndicator: {
    marginVertical: 20,
  },
});

export default ModuleScreen;
