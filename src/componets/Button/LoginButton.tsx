import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const LoginButton = ({buttontext,onPress, type ="primary"}) => {


  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{buttontext}</Text>
    </Pressable>
  )
}
// allows me to set the style of the componet
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#3B71F3',
  },

  container_teriary: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_teriary: {
    color: "gray",
  },
});
export default LoginButton