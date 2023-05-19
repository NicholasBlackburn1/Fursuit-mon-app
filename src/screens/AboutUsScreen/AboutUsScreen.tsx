import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import Cards from '../../componets/Cards';
import { useNavigation } from '@react-navigation/native';
import Navagation from '../../navagation';

  const AboutUsScreen = () => {

    const navagation = useNavigation();

    const [currentWifiSSID, setCurrentWifiSSID] = useState('');
    const [jsonData, setJsonData] = useState([]);
    const [loading, setLoading] = useState(true);



    return (
      <ScrollView style={styles.back}>
        <View style={styles.root}>

        <Image source={require('./Nicky.jpg')} style={styles.mascotImage} />
        <Text style={styles.title}>About Us</Text>

          <View style={styles.container}>

            <Text style={styles.description}>
            Welcome to Starblazer Studio, an innovative tech company on a mission to create extraordinary experiences through the fusion of creativity and technology. Led by the charismatic and caring Nicky Blackburn, we pride ourselves on pushing boundaries and achieving remarkable feats in the industry.


        </Text>


          </View>


        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    back: {
      flex: 1,
      backgroundColor: 'black',
    },

    root: {
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#9f9f9f',
      marginVertical: 10,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      marginVertical: 20,
    },
      mascotImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a7a7a7',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },


  });

export default AboutUsScreen;
