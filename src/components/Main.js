import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Shicha from "../../assets/shicha.png";
import Button from "./Button";
import GoogleLoginButton from "./GoogleLoginButton";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTxt}>your virtual Dokken</Text>
      <Text style={styles.descriptionTxt}>
        We deliver your favourite products straight to your door
      </Text>
      <Image source={Shicha} style={styles.img} />
      <Button style={[styles.btn, styles.orderBtn]}>
        <Text style={styles.ctaTxt}>Order now</Text>
      </Button>
      <Button style={styles.btn}>
        <Text style={styles.ctaTxt}>Browse products</Text>
      </Button>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: "center",
  },
  titleTxt: {
    textTransform: "uppercase",
    color: "#DAB992",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  descriptionTxt: {
    textAlign: "center",
    color: "#D1D1D1",
    fontSize: 16,
    marginTop: 10,
  },
  img: { width: "80%", height: "40%", marginTop: 10 },
  btn: { width: "100%", padding: 10, marginTop: 10, borderRadius: 5 },
  orderBtn: {
    borderColor: "#DAB992",
    borderWidth: 1,
  },
  ctaTxt: { color: "#DAB992", fontWeight: "bold", fontSize: 26 },
});
