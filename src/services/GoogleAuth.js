import * as Google from "expo-google-app-auth";

const login = async () =>
  await Google.logInAsync({
    expoClientId:
      "438461731960-smqh2mpcojtok4burfvl169v6gkk3eg4.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

export { login };
