import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// custom inputs

import {useNavigation} from '@react-navigation/native';
import WifiManager from "react-native-wifi-reborn";
import Cards from '../../componets/Cards';

const HomeScreen = () => {
  const [currentWifiSSID, setCurrentWifiSSID] = useState('');

  useEffect(() => {
    const fetchCurrentWifiSSID = async () => {
      try {
        const wifiSSID = await WifiManager.getCurrentWifiSSID();
        setCurrentWifiSSID(wifiSSID);
      } catch (error) {
        console.log('Error fetching current Wi-Fi SSID:', error);
      }
    };

    fetchCurrentWifiSSID();
  }, []);

  const [cardDataList, setCardDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://192.168.4.1/fursuit/api/v1.0/devicelist',
      );

      const jsonData = await response.json();
      console.warn("data from hardware"+jsonData)
      setCardDataList(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>
          {currentWifiSSID}
        </Text>

        <View style={styles.container}>
      {jsonData.map((item, index) => (
        <Cards
          key={index}
          devicenum={item.devicenum}
          module={item.module}
          sensors={item.sensors}
        />
      ))}
    </View>
      </View>
    </ScrollView>
  );
};
// allows me to set the style of the componet
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    maxWidth: 500,
    width: '70%',
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60', container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },

  link: {
    color: '#FDB075',
  },
  furry: {
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
