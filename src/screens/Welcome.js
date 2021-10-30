import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContext from '../context/AppContext';

const Welcome = () => {
  const appContext = useContext(AppContext);
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>welcome page</Text>
      <Text>{JSON.stringify(appContext)}</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
