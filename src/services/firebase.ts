import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import messaging from "@react-native-firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Ask permission for notifications (FCM)
export async function requestPushPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    const token = await messaging().getToken();
    return token;
  }
  return null;
}