import { initializeApp } from "@firebase/app";
import { getAuth as firebaseGetAuth, FacebookAuthProvider } from "@firebase/auth";

const FIREBASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID 
}

const initAppFirebase = () => {
  const FBProvider = new FacebookAuthProvider();
  FBProvider.addScope("email");
  FBProvider.addScope("public_profile");

  const app = initializeApp(FIREBASE_CONFIG);

  const getApp = () => app;
  const getAuth = () => firebaseGetAuth(app);
  const getFBProvider = () => FBProvider;

  return { getFBProvider, getAuth, getApp };
};

export default initAppFirebase;
