import * as Google from 'expo-google-app-auth';

const login = async () =>
  await Google.logInAsync({
    androidClientId:
      '1006945168952-2bnvid7khru5ppftieegg9jocj3f4fnl.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

export { login };
