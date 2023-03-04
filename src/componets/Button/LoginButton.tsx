import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const LoginButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  )
}
// allows me to set the style of the componet 
const styles = StyleSheet.create({
    
    container:{
        backgroundColor: '#3B71F3',
        width: '100%',
        padding: 15,
    },
    text:{},

});
export default LoginButton