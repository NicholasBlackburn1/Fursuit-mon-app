import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import WifiManager from 'react-native-wifi-reborn';

const WhereFurryScreen = ({route}) => {
    const {Wifiname} = route.params;

    const [signal, setsig] = useState(Number);

    useEffect(() => {
    const getSignalStrength = async () => {
      try {
        const signalStrength = await WifiManager.getCurrentSignalStrength();
        console.log(
          'Current Signal Strength:'+signalStrength
        );
        setsig(10 ^ (((47 - signalStrength) / 10) * 0.9));
        // Do something with the signal strength value
      } catch (error) {
        console.log('Error fetching current signal strength:', error);
      }
    };
    getSignalStrength();
    const intervalId = setInterval(getSignalStrength, 1000);

    // Clean up interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Distance from {Wifiname}</Text>
      <Text style={styles.title}>Distance from {signal}</Text>
      <View style={styles.gaugeContainer}>
        <Svg width={200} height={200}>
          <Circle
            cx={100}
            cy={100}
            r={80}
            fill="transparent"
            stroke="#e0e0e0"
            strokeWidth={12}
          />
          <Circle
            cx={100}
            cy={100}
            r={80}
            fill="transparent"
            stroke="#007aff"
            strokeWidth={12}
            strokeDasharray={`${Math.PI * 2 * 80 * (signal / 100)}, ${Math.PI * 2 * 80}`}
          />
          <SvgText
            x={100}
            y={110}
            textAnchor="middle"
            fontSize={24}
            fontWeight="bold"
            fill="#007aff"
          >
            {`${signal}m`}
          </SvgText>
        </Svg>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WhereFurryScreen;
