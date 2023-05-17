import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const LoginButton = ({buttontext,onPress, type ="primary",bgcolor,fgcolor}) => {


  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? {backgroundColor: bgcolor} : {},
      ]}>
      <Text style={
        [styles.text,
      styles[`text_${type}`],
        fgcolor ? {color: fgcolor} : {},
        ]}>
        {buttontext}
      </Text>
    </Pressable>
  )
}
// allows me to set the style of the componet
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#232323',
  },

  container_teriary: {},

  text: {
    fontWeight: 'bold',
    color: '#969696',
  },
  text_teriary: {
    color: "gray",
  },
});
export default LoginButton
