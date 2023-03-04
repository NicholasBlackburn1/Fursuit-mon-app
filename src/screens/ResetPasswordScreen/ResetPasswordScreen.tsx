import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react'

// custom inputs 
import LoginInput from '../../componets/Textinput';
import LoginButton from '../../componets/Button';
import SocialSignButtons from '../../componets/SocialSignInButtons/SocialSignin';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {

  const [password, setPassword] = useState('');
  const [passwordrepeat, setPasswordrepeat] = useState('');
  
  const navagation = useNavigation();

  
  const onregisterPress = () => {
    console.warn("registering user...");
  };

  // for legal stuff press
  const onbacktosignin = () => {
    console.warn("takes u back to the sign in");
    navagation.navigate('login');
  };


  return (
    <ScrollView>
      <View style={styles.root}> 
      <Text style={styles.title}>Reset your password</Text>

        <LoginInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          issecure={true}
        />
        <LoginInput
          placeholder="Password Repeat"
          value={passwordrepeat}
          setValue={setPasswordrepeat}
          issecure={true}
        />

        <LoginButton buttontext="Reset your password" onPress={onregisterPress} />

  

    
      <LoginButton buttontext="Back to Sign in." onPress={onbacktosignin} type = "teriary"/>
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
  text:{
    color: 'gray',
    marginVertical:10,

  },


  link:{
    color: '#FDB075'
  },
  furry:{
    fontStyle: 'italic',
  },
});

export default ResetPasswordScreen