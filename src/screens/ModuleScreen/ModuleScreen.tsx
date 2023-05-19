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
import { useNavigation } from '@react-navigation/native';


const ModuleScreen = ({route}) => {
  const { name, sensors } = route.params;
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

  const navagation = useNavigation();
  const mascotheat = () => {
    navagation.navigate("mascot");
  };

  const configure = () => {
    navagation.navigate("settings",{module:name });
  };



  const renderCards = () => {
    if (module === 'Vitalzs') {
      return (
        <View style={styles.container}>

        <View style={styles.root}>
        <LoginButton buttontext="configure settings" onPress={configure} />
        </View>

        <View style={styles.root}>
          <Text style={styles.desc}>{module} Data</Text>
          <Cards moduleName="tempatrue" sensorsName={jsonData.temp} />
          <Cards moduleName="humitity" sensorsName={jsonData.humity} />
          <Cards moduleName="heart Rate" sensorsName={jsonData.rate} />

        </View>
          <View style={styles.root}>

          <LoginButton buttontext="View All Data" onPress={mascotheat} />


          </View>

        </View>

      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.root}>
        <Text style={styles.title}>{module} Information</Text>
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
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a7a7a7',
    marginVertical: 10,
  },
  desc: {
    fontSize: 22,

    color: '#a7a7a7',
    marginVertical: 10,
  },
  loadingIndicator: {
    marginVertical: 20,
  },
});

export default ModuleScreen;
