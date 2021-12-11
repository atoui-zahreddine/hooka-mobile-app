import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Welcome from "./src/screens/Welcome";
import Auth from "./src/screens/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#151515" />
      <Welcome />
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
