import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from './config.json';
import { getAuth } from "firebase/auth";

const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export default app;
