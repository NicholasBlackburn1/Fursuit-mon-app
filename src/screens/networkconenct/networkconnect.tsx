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

  const HomeScreen = () => {

    //sets up use sates
    const [suitname, setSuitName] = useState('');


    const navagation = useNavigation();




    return (
      <ScrollView>
        <View style={styles.root}>
        <Text style={styles.title}> Configure Mascot Connection</Text>

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

  export default HomeScreen;
