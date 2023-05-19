
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as reactNativePaper from 'react-native-paper';
import Cards from '../../componets/Cards/Cards';
import WifiManager from "react-native-wifi-reborn";
const SettingsScreen = () => {

/**
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
          <Text style={styles.furry}>*happy furry Noises*</Text> */



return (
    <ScrollView style={styles.back}>
      <View style={styles.root}>
        <Text style={styles.title}>Connect to Mascot Controller </Text>

        </Text>
      </View>
    </ScrollView>
  );
};
// allows me to set the style of the componet
const styles = StyleSheet.create({

  back: {
    flex: 1,
    backgroundColor: 'black',
  },
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a7a7a7',
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

export default SettingsScreen;
