

import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react'

import Logo from '../../../assets/images/logo.png';

// custom inputs 
import Logininput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';
const SignupScreen = () => {
  return (
    <ScrollView>
      <View style={styles.root}> 
      <Text style={styles.title}>Create an Account</Text>
      </View>
    </ScrollView>
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
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,

  },
});

export default SignupScreen