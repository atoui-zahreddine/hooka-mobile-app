import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Shicha from '../../assets/shicha.png';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textTransform: 'uppercase',
          color: '#DAB992',
          fontSize: 36,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        your virtual shisha master
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: '#D1D1D1',
          fontSize: 16,
          marginTop: 10,
        }}>
        We deliver custom shisha straight to your door
      </Text>
      <Image
        source={Shicha}
        style={{ width: '80%', height: '40%', marginTop: 10 }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'center',
  },
});
