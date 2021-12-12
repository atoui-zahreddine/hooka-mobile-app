import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Main from "../components/Main";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "#151515",
  },
});
