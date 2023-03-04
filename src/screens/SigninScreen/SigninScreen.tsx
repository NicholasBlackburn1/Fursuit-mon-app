/***
 * 
 * this is the sign in screen 
 * it displays logo and login buttons  email and username
 */

import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react'

import Logo from '../../../assets/images/logo.png'


const SigninScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}> 
    <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}  resizeMode='contain'></Image>
      <Text> help </Text>

    </View>
  )
}

// allows me to set the style of the componet 
const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo:{
    maxWidth: 500,
    width : '70%',
    maxHeight: 200,
  },
});
export default SigninScreen