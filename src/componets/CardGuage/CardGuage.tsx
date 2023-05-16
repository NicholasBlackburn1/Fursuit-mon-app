import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Gauge } from 'react-native-svg-charts';

const CardGuage= ({sensors}) => {
  const renderGauge = (sensor) => {
    // Determine the value for the gauge based on the sensor
    let value = 0;
    if (sensor === 'temp') {
      value = 0.8; // Example value for temperature
    } else if (sensor === 'heartRate') {
      value = 0.6; // Example value for heart rate
    } else if (sensor === 'Humidity') {
      value = 0.4; // Example value for humidity
    }

    return (
      <View style={styles.gaugeContainer}>
        <Gauge
          value={value}
          minValue={0}
          maxValue={1}
          size={150}
          outerRadius={0.8}
          innerRadius={0.65}
          startAngle={-Math.PI / 2}
          endAngle={Math.PI / 2}
        />
      </View>
    );
  };

  return (
    <View style={styles.cardContainer}>

        <View key={index}>
          {renderGauge(sensors)}
          <Text style={styles.sensorName}>{sensor}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  gaugeContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sensorName: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default CardGuage;
