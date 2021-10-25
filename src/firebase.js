import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './config.json';
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const FBprovider = new FacebookAuthProvider();
FBprovider.addScope('email');
FBprovider.addScope('public_profile');

const app = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
export { FBprovider, auth };
export default app;
