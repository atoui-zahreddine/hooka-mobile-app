import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const UserProfile = ({ photoUrl, name }) => {
  return (
    <View>
      <Image source={{ uri: photoUrl }} style={styles.img} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccc',
    width: 80,
    height: 80,
  },
});

export default UserProfile;
