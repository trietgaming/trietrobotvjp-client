import UserApp from '../Apps/UserApp';
import DefaultApp from '../Apps/DefaultApp';
import React, { useContext, useState, useEffect } from 'react';
import { auth, FBprovider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  OAuthProvider,
  linkWithPopup
} from "firebase/auth";
import '../components/entryLoad.css';
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [app, setApp] = useState(
    <div className="text-center" id="entry-load">
      <div className="box">
        <div className="plane"></div>
      </div>
    </div>
  );

  function verifyEmail() {
    return sendEmailVerification(auth.currentUser);
  }

  async function register(username, email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    return updateProfile(auth.currentUser, {
      displayName: username
    }).then(() => setApp(<UserApp/>))
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    return signOut(auth).then(() => window.location.replace('/'));
  }

  function updateUserProfile(information) {
    return updateProfile(auth.currentUser, information)
    .then(() => setTimeout(window.location.replace(window.location.href), 4500));
  }

  function loginWithFacebook() {
    return signInWithPopup(auth, FBprovider)
  }

  function getLoginMethodsForEmail(email) {
    return fetchSignInMethodsForEmail(auth, email);
  }

  function getCredentialFromResult (result) {
    return OAuthProvider.credentialFromResult(result);
  }

  function linkFacebookAccount() {
    return linkWithPopup(auth.currentUser, FBprovider).then(() => window.location.replace(window.location.href))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if (!user) setApp(
        <DefaultApp/>
      )
      //USER
      else setApp(
        <UserApp />
      )
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    register,
    login,
    logout,
    updateUserProfile,
    verifyEmail,
    loginWithFacebook,
    getLoginMethodsForEmail,
    getCredentialFromResult,
    linkFacebookAccount,
    app
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
