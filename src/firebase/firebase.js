import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './config.json';
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const FBprovider = new FacebookAuthProvider();
FBprovider.addScope('email');
FBprovider.addScope('public_profile');

const app = initializeApp(FIREBASE_CONFIG);
const analytics = getAnalytics();
const auth = getAuth(app);
export { FBprovider, auth, analytics };
export default app;