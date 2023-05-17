import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Cards from '../../componets/Cards';
import LoginButton from '../../componets/Button/LoginButton';


const ModuleScreen = ({route}) => {
  const {module, sensors} = route.params;
  const [jsonData, setJsonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVitalsData = async () => {
      try {
        const response = await fetch(
          'http://192.168.4.1/fursuit/api/v1.0/app/getTempData',
        );
        const data = await response.text();
        console.log('Response:', data);

        // Parse the response data
        let parsedData;
        try {
          parsedData = JSON.parse(data);
        } catch (error) {
          console.log('Error parsing JSON data:', error);
          return;
        }

        console.log('Parsed JSON data:', parsedData);

        setJsonData(parsedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('Error fetching data:', error);
      }
    };

    if (module === 'Vitalzs') {
      fetchVitalsData();
    } else {
      setLoading(false);
    }
  });

  const renderCards = () => {
    if (module === 'Vitalzs') {
      return (
        <View style={styles.container}>
          <Cards moduleName="tempatrue" sensorsName={jsonData.temp} />
          <Cards moduleName="humitity" sensorsName={jsonData.humity} />
          <Cards moduleName="heart Rate" sensorsName={jsonData.rate} />

          <View style={styles.root}>
          <Text style={styles.title}>Safty Information</Text>
          <Cards moduleName="Suiting Timer" sensorsName="todo timerleft" />

          </View>

        </View>

      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>{module} Data</Text>
        {loading ? (
          <ActivityIndicator style={styles.loadingIndicator} />
        ) : (
          renderCards()
        )}
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
  loadingIndicator: {
    marginVertical: 20,
  },
});

export default ModuleScreen;
