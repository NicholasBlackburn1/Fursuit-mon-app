import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as reactNativePaper from 'react-native-paper';
import Cards from '../../componets/Cards/Cards';
import WifiManager from "react-native-wifi-reborn";
const MascotScreen = () => {


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


  return (
    <ScrollView style={styles.back}>
        <View style={styles.root}>
                <Text style={styles.title}>{currentWifiSSID} HeathData</Text>
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
  card: {
    width: '30%',
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressCircle: {
    marginBottom: 20,
  },
});

export default MascotScreen;
