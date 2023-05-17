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

          console.log('Fetched JSON data:', parsedData);
          setJsonData(parsedData);
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

      // Where is the furry at
      function onFindmyfurry(event: GestureResponderEvent): void {
        navagation.navigate('wherefurry', {Wifiname: currentWifiSSID});
      }

    return (
      <ScrollView style={styles.back}>
        <View style={styles.root}>
          <Text style={styles.title}>{currentWifiSSID}</Text>

          <TouchableOpacity onPress={onFindmyfurry} style={styles.container}>
          <View style={styles.container}>
            <Cards moduleName="Where is the Furyy at?" sensorsName="click here to find" />
          </View>
          </TouchableOpacity>
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
    back: {
      flex: 1,
      backgroundColor: 'black',
    },

    root: {
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#9f9f9f',
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
