import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const LoginInput = ({name,setValue, placeholder, issecure}) => {
  return (
    <View style={styles.container}>
      <TextInput value={name}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input} 
      secureTextEntry={issecure}/>
    </View>
  );
}


// allows me to set the style of the componet 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'White',
    width: '100%',

    borderColor:"#E8E8E8",
    borderWidth: 1,
    borderRadius:  5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },

  input: {},
});


export default LoginInput