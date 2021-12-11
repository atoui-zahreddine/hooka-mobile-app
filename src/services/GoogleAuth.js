import * as Google from "expo-google-app-auth";

const login = async () =>
  await Google.logInAsync({
    androidClientId:
      "626479532040-3rkomc4lo2lobpmnbppo8b7171s4a4kf.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

export { login };
