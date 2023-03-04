import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoginButton from '../../componets/Button';

const SocialSignin = () => {
    
  const onSignInWithGoogle = () => {

    console.warn("sending login to google");
  };

  const onSignInWithApple = () => {

    console.warn("sending login to apple");
  };
  return (
    <View style={styles.root}> 
      <LoginButton buttontext="Sign up with google Account" onPress={onSignInWithGoogle} bgcolor = "#FAE9EA" fgcolor="#DD4D44"/>
      <LoginButton buttontext="Sign up with apple Account" onPress={onSignInWithApple} bgcolor = "##e3e3e3" fgcolor="#363636"/>

    </View>
  )
}
const styles = StyleSheet.create({
    root:{
      alignItems: 'center',
      padding: 20,
    },});
export default SocialSignin