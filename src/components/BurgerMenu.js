import React from 'react';
import { StyleSheet, View } from 'react-native';

const BurgerMenu = () => {
  return (
    <View
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flex: 1,
        padding: 10,
        width: '100%',
      }}>
      {[1, 2, 3].map((bar) => (
        <View
          key={bar}
          style={{
            width: bar !== 2 ? '85%' : '65%',
            height: 2,
            backgroundColor: '#DAB992',
            borderRadius: 2,
          }}
        />
      ))}
    </View>
  );
};

export default BurgerMenu;

const styles = StyleSheet.create({});
