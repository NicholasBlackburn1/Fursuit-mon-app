import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import Cards from '../../componets/Cards';

  const HomeScreen = () => {
    const [currentWifiSSID, setCurrentWifiSSID] = useState('');
    const [jsonData, setJsonData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
      const fetchJsonData = async () => {
        try {
          const response = await fetch('http://192.168.4.1/fursuit/api/v1.0/devicelist');
          const text = await response.text();
          const data = JSON.parse(JSON.parse(text)[0]);
          console.log('Fetched JSON data:', data);
          setJsonData(data);
          setLoading(false);
        } catch (error) {
          console.log('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchJsonData();
    }, []);

    return (
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>{currentWifiSSID}</Text>

        {loading ? (
          <ActivityIndicator style={styles.loadingIndicator} />
        ) : (
          <View style={styles.container}>
            <Cards module={jsonData.module} sensors={jsonData.sensors} />
          </View>
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      marginVertical: 20,
    },
  });

export default HomeScreen;
