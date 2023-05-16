import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, { useState } from 'react'

// custom inputs
import LoginInput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';
import SocialSignButtons from '../../componets/SocialSignInButtons/SocialSignin';
import { useNavigation } from '@react-navigation/native';
import wifi from 'react-native-android-wifi';
const networkconenct = () => {



  const navagation = useNavigation();



  //sets up use sates
  const [wifinamme, setwifiname] = useState('');
  const [password, setPassword] = useState('');

  const onregisterPress = async () => {
    console.warn("connecting wifi...");

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Wifi networks',
          'message': 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! :)");
      } else {
        console.log("You will not able to retrieve wifi available networks list");
      }
    } catch (err) {
      console.warn(err)
    }
  };

  // for legal stuff press
  const onTermsPress = () => {
    console.warn("show  terms of use.");
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

        <LoginButton buttontext="Connect to the Suite" onPress={onregisterPress} />

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
  )
}
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
