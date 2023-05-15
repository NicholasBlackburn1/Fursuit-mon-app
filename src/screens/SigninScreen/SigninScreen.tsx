/***
 *
 * this is the sign in screen
 * it displays logo and login buttons  email and username
 */

import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react'

import Logo from '../../../assets/images/logo.png';

// custom inputs
import Logininput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';

import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {

  // Allows me to get username and pass
  const [username, setUsername] = useState('');
  const [password, setPassword]  = useState('');

  const {height} = useWindowDimensions();

  const navagation = useNavigation();

  // allows users to reset passwords and login
  const onSignInpressed = () => {
    // vladate user
    console.warn("sending login to server");
    //navagation.navigate("home")
  };

  const onForgotPassword = () =>{
    console.warn("time to reset password in db..");
    navagation.navigate("Reset password");
  };

  const onSignUp = () => {

    console.warn(" new user .. need to create user account..");
    navagation.navigate("network");
  };



  return (
    <ScrollView>
    <View style={styles.root}>
    <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}  resizeMode='contain'></Image>

    <Logininput placeholder="Email" value ={username} setValue={setUsername}/>
    <Logininput placeholder="Password" value ={password} setValue={setPassword} issecure= {true}/>


    <LoginButton buttontext="Sign in" onPress={onSignInpressed}/>
    <LoginButton buttontext="Forgot password" onPress={onForgotPassword} type = "teriary"/>

    <LoginButton buttontext="Don't Have an Account?" onPress={onSignUp} type = "teriary"/>

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
});
export default SigninScreen
