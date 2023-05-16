import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cards = ({ moduleName, sensorsName }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Module: {moduleName}</Text>
      <Text style={styles.description}>Sensors: {sensorsName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#051C60',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
});

export default Cards;
