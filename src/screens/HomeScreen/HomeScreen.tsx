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
import LoginInput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';
import SocialSignButtons from '../../componets/SocialSignInButtons/SocialSignin';
import {useNavigation} from '@react-navigation/native';
import WifiManager from "react-native-wifi-reborn";

const HomeScreen = () => {
  const navagation = useNavigation();

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
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>
          {currentWifiSSID}
        </Text>
      </View>
    </ScrollView>
  );
};
// allows me to set the styleWifiManager.getCurrentWifiSSID().then() of the componet
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
    color: '#051C60',
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
});

export default HomeScreen;
