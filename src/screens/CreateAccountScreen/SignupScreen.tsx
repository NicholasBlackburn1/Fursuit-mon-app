

import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react'

// custom inputs 
import LoginInput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';


const SignupScreen = () => {

  //sets up use sates
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrepeat, setPasswordrepeat] = useState('');
  
  
  const onregisterPress = () => {
    console.warn("registering user...")
  };
  

  return (
    <ScrollView>
      <View style={styles.root}> 
      <Text style={styles.title}>Create an Account</Text>


      <LoginInput placeholder="Username" value ={username} setValue={setUsername}/>
      <LoginInput placeholder="Email" value ={email} setValue={setEmail} issecure= {false}/>

      <LoginInput placeholder="Password" value ={password} setValue={setPassword} issecure= {true}/>
      <LoginInput placeholder="Password Repeat" value ={passwordrepeat} setValue={setPasswordrepeat} issecure= {true}/>

      <LoginButton buttontext="Register" onPress={onregisterPress}/>

      <Text styles={styles}>
        By registering, you accept all our <Text style={styles.link}>Terms of Use and Privacy Policy</Text> *happy furry Noises*</Text>
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
  link:{

  },
});

export default SignupScreen