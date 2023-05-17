import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const MascotTempScreen = () => {
  const [jsonData, setJsonData] = useState({ temp: '', humidity: '', heartRate: '' });
  const [fursuitingTime, setFursuitingTime] = useState('');

  const handleInputChange = (field, value) => {
    setJsonData(prevData => ({ ...prevData, [field]: value }));
  };

  const calculateFursuitingTime = async () => {
    try {
      const response = await fetch('YOUR_ENDPOINT_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        // Parse the response data
        const responseData = await response.json();
        setFursuitingTime(responseData.fursuitingTime);
      } else {
        throw new Error('Error calculating fursuiting time');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temperature (°F)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={jsonData.temp}
        onChangeText={value => handleInputChange('temp', value)}
      />

      <Text style={styles.label}>Humidity (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={jsonData.humidity}
        onChangeText={value => handleInputChange('humidity', value)}
      />

      <Text style={styles.label}>Heart Rate (bpm)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={jsonData.heartRate}
        onChangeText={value => handleInputChange('heartRate', value)}
      />

      <Button title="Calculate Fursuiting Time" onPress={calculateFursuitingTime} />

      <Text style={styles.result}>Suitable Fursuiting Time: {fursuitingTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default MascotTempScreen;
