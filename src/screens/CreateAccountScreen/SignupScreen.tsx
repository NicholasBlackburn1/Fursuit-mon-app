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

const SignupScreen = () => {

  //sets up use sates
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrepeat, setPasswordrepeat] = useState('');
  
  
  const onregisterPress = () => {
    console.warn("registering user...");
  };

  // for legal stuff press
  const onTermsPress = () => {
    console.warn("show  terms of use.");
  };

  const onPrivacyPress = () => {
    console.warn('show privacy polocy.');
  };


  const onSignInpressed = () => {

    console.warn("redirect to login page");
  };

  return (
    <ScrollView>
      <View style={styles.root}> 
      <Text style={styles.title}>Create Your Account</Text>

        <LoginInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <LoginInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          issecure={false}
        />

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

        <LoginButton buttontext="Register" onPress={onregisterPress} />

      <Text styles={styles}>
          By registering, you accept all our
          <Text style={styles.link} onPress={onTermsPress}>
            Terms of Use{' '}
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPrivacyPress}>
            Privacy Policy
          </Text>
          <Text style={styles.furry}>*happy furry Noises*</Text>
      </Text>

      <LoginButton buttontext="Have An Account? Sign in." onPress={onSignInpressed} type = "teriary"/>
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

export default SignupScreen