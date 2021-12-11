import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import UserProfile from "../components/UserProfile";
import GoogleLoginButton from "../components/GoogleLoginButton";

import * as GoogleAuth from "../services/GoogleAuth";

export default function Auth() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  async function loginWithGoogle() {
    try {
      setLoading(true);
      const result = await GoogleAuth.login();
      if (result.type === "success") {
        setUser(result.user);
      } else {
        console.log("google sign in cancelled");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {user ? (
        <UserProfile photoUrl={user.photoUrl} name={user.name} />
      ) : (
        <GoogleLoginButton onPress={loginWithGoogle} loading={loading} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
