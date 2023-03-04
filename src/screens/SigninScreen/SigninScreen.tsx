/***
 * 
 * this is the sign in screen 
 * it displays logo and login buttons  email and username
 */

import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react'

import Logo from '../../../assets/images/logo.png';

// custom inputs 
import Logininput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';


const SigninScreen = () => {

  // Allows me to get username and pass
  const [username, setUsername] = useState('');
  const [password, setPassword]  = useState('');

  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}> 
    <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}  resizeMode='contain'></Image>

    <Logininput placeholder="Email" value ={username} setValue={setUsername}/>
    <Logininput placeholder="Password" value ={password} setValue={setPassword} issecure= {true}/>
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