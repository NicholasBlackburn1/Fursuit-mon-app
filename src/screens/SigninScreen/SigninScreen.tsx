/***
 * 
 * this is the sign in screen 
 * it displays logo and login buttons  email and username
 */

import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react'

import Logo from '../../../assets/images/logo.png'


const SigninScreen = () => {
  return (
    <View> 
    <Image source={Logo} style={styles.logo}></Image>
      <Text> help </Text>

    </View>
  )
}

export default SigninScreen