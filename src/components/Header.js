import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/logo.png';

import BurgerMenu from '../components/BurgerMenu';
import Button from '../components/Button';

const Header = () => {
  return (
    <View style={styles.header}>
      <Button>
        <Icon name='shopping-outline' size={30} color='#DAB992' />
      </Button>
      <Image source={Logo} style={styles.img} />
      <Button>
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
  img: {
    width: 80,
    height: 100,
  },
});
