import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';

import BurgerMenu from '../components/BurgerMenu';
import Button from '../components/Button';

const Header = () => {
  return (
    <View style={styles.header}>
      <Button style={styles.btn}>
        <Icon name='shopping-outline' size={30} color='#DAB992' />
      </Button>
      <Image source={Logo} style={styles.img} />
      <Button style={styles.btn}>
        <BurgerMenu />
      </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  img: {
    width: 80,
    height: 100,
  },
});
