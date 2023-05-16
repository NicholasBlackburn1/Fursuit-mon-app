import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import Cards from '../../componets/Cards';
import { useNavigation } from '@react-navigation/native';
import Navagation from '../../navagation';

  const HomeScreen = () => {

    const navagation = useNavigation();

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
          const data = await response.json();
          const parsedData = JSON.parse(data[0]);
          const module = parsedData.module;
          const sensors = parsedData.sensors;
          const extractedData = { module, sensors };
          console.log('Fetched JSON data:', extractedData);
          setJsonData(extractedData);
          setLoading(false);
        } catch (error) {
          console.log('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchJsonData();
    }, []);

    // on click for each module
    function onPress(event: GestureResponderEvent): void {
      navagation.navigate('Module', { module: jsonData.module, sensors: jsonData.sensors });

    }

    return (
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>{currentWifiSSID}</Text>

        {loading ? (
          <ActivityIndicator style={styles.loadingIndicator} />
        ) : (
          <TouchableOpacity onPress={onPress} style={styles.container}>
          <View style={styles.container}>
            <Cards moduleName={jsonData.module} sensorsName={jsonData.sensors} />
          </View>
          </TouchableOpacity>
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
