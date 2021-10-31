import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({ children }) {
  return <TouchableOpacity style={styles.btn}>{children}</TouchableOpacity>;
}

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
});
