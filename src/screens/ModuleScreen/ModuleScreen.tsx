import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ModuleScreen = ({ route }) => {
  const { module, sensors } = route.params;
  console.log("data "+module + " " +sensors)

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>{module} Data</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
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
});

export default ModuleScreen;
