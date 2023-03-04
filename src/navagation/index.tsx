import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens 
import SigninScreen from '../screens/SigninScreen/SigninScreen';
import SignUPScreen from '../screens/CreateAccountScreen/SignupScreen';
import RestPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';

const Stack = createNativeStackNavigator();
const Navagation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={SigninScreen} />
      <Stack.Screen name="Create Account" component={SignUPScreen} />
      <Stack.Screen name="resetProfile" component={RestPasswordScreen} />
     
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navagation