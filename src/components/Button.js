import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({ children, style }) {
  return (
    <TouchableOpacity style={[style, styles.btn]}>{children}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151515',
    shadowColor: '#504343',
    elevation: 5,
  },
});
