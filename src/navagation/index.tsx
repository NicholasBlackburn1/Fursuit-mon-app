import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SigninScreen from '../screens/SigninScreen/SigninScreen';
import SignUPScreen from '../screens/CreateAccountScreen/SignupScreen';
import RestPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import networkconnect from '../screens/networkconenct/networkconnect';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ModuleScreen from '../screens/ModuleScreen/ModuleScreen';
import WhereFurryScreen from '../screens/WhereFurryScreen/WhereFurryScreen';
import AboutUs from '../screens/AboutUsScreen/AboutUsScreen';

const Stack = createNativeStackNavigator();

const Navagation = () => {
  return (
     <NavigationContainer>


      <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name ="login" component={SigninScreen}/>
      <Stack.Screen name ="signup" component={SignUPScreen}/>
      <Stack.Screen name ="Reset password" component={RestPasswordScreen}/>
      <Stack.Screen name ="network" component={networkconnect}/>
      <Stack.Screen name ="home" component={HomeScreen}/>
      <Stack.Screen name="Module" component={ModuleScreen} />
      <Stack.Screen name="wherefurry" component={WhereFurryScreen} />
      <Stack.Screen name="aboutus" component={AboutUs} />
      </Stack.Navigator>

     </NavigationContainer>



  )
}

export default Navagation;
