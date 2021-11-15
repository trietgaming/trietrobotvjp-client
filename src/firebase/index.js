import { initializeApp } from "@firebase/app";
import { FIREBASE_CONFIG } from "./config.json";
import { getAuth as firebaseGetAuth, FacebookAuthProvider } from "@firebase/auth";

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
