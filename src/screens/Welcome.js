import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: '#151515',
  },
});
