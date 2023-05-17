import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';

// custom inputs
import LoginInput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';
import SocialSignButtons from '../../componets/SocialSignInButtons/SocialSignin';
import {useNavigation} from '@react-navigation/native';
import WifiManager from "react-native-wifi-reborn";

const networkconenct = () => {


  const sendPostRequest = async () => {
    const currentDate = new Date();
    const sec = currentDate.getSeconds();
    const min = currentDate.getMinutes();
    const hour = currentDate.getHours();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Month starts from 0
    const year = currentDate.getFullYear();

    const data = {
      sec,
      min,
      hour,
      day,
      month,
      year,
    };

    try {
      const response = await fetch(
        'http://192.168.4.1/fursuit/api/v1.0/setrtctime',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        console.log('POST request successful');
        console.log(data);
      } else {
        console.log('POST request failed');
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  const navagation = useNavigation();

  //sets up use sates
  const [wifinamme, setwifiname] = useState('');
  const [password, setPassword] = useState('');

  const onregisterPress = async () => {
    console.warn('connecting wifi...');

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission is required for WiFi connections',
          message:
            'This app needs location permission as this is required  ' +
            'to scan for wifi networks.',
          buttonNegative: 'DENY',
          buttonPositive: 'ALLOW',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        // checks if wifi name is connected




        WifiManager.connectToProtectedSSID(wifinamme, password, false).then(
          () => {
            console.log("Connected successfully!");
            sendPostRequest();
            navagation.navigate("home");
          },
          () => {
            console.log("Connection failed!");
          }
        );

      } else {
      // Permission denied
      }
        };

  // for legal stuff press
  const onTermsPress = () => {
    console.warn('show  terms of use.');
  };

  const onPrivacyPress = () => {
    console.warn('show privacy polocy.');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Connect to Mascot Controller </Text>

        <LoginInput
          placeholder="Suite AP"
          value={wifinamme}
          setValue={setwifiname}
        />

        <LoginInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          issecure={true}
        />

        <LoginButton
          buttontext="Connect to the Suite"
          onPress={onregisterPress}
        />

        <Text styles={styles}>
          By Connecting, you accept all our
          <Text style={styles.link} onPress={onTermsPress}>
            Terms of Use{' '}
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPrivacyPress}>
            Privacy Policy
          </Text>
          <Text style={styles.furry}>*happy furry Noises*</Text>
        </Text>
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

export default networkconenct;
