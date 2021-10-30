import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

const GoogleLoginButton = ({ onPress, loading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btn}
      disabled={loading}
      accessibilityLabel='sigin with google '>
      {loading && <ActivityIndicator color={'#fff'} style={styles.spiner} />}
      <Text style={styles.txt}>Sign in with google </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    padding: 10,
    width: 190,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#4385F4',
    color: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4385F4',
  },
  txt: {
    color: 'white',
  },
  spiner: {
    marginRight: 10,
  },
});

export default GoogleLoginButton;
