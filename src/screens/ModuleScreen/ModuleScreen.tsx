import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Cards from '../../componets/Cards';
import CardGuage from '../../componets/CardGuage/CardGuage';

const ModuleScreen = ({ route }) => {
  const { module, sensors } = route.params;
  console.log("data "+module);

  const [jsonData, setJsonData] = useState([]);


  useEffect(() => {
    const fetchvitals = async () => {
      try {
        const response = await fetch('http://192.168.4.1/fursuit/api/v1.0/app/getTempData');
        const data = await response.json();
        const parsedData = JSON.parse(data[0]);

        // parses all the sensor daya
        const temp = parsedData.temp;
        const hum = parsedData.humitity;
        const rate = parsedData.rate;

        const extractedData = {temp, hum, rate};
        console.log('Fetched JSON data:', extractedData);
        setJsonData(extractedData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchvitals();
  }, []);


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
