// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    EmailAuthProvider,
    updatePassword,
    reauthenticateWithCredential,
    createUserWithEmailAndPassword,
    deleteUser,
    sendPasswordResetEmail,
    sendEmailVerification
  } from "firebase/auth";
  import { initializeAuth } from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyAbSBXwDRacEhQSkB7W611Xeb4D0htnWs8",
    authDomain: "leetcodeclone-806ce.firebaseapp.com",
    projectId: "leetcodeclone-806ce",
    storageBucket: "leetcodeclone-806ce.appspot.com",
    messagingSenderId: "510741832150",
    appId: "1:510741832150:web:4b449ce61f4b96092cc477"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        console.log(email + " " + password)
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
        throw err;
    }
  };
  const createWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      verifyEmail();
      return userCredential.user;
    } catch (err) {
      throw err;
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch(err){
        throw err;
    }
  }

  const changePassword = async (currentPassword, newPassword) => {
    try{
      const user = auth.currentUser;
      var credentials = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
        await reauthenticateWithCredential(user, credentials)
        await updatePassword(user, newPassword);
    } catch(err){
        throw err;
    }
  }
  const delUser = async (currentPassword) => {
    try{ 
      const user = auth.currentUser;
      var credentials = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
        await reauthenticateWithCredential(user, credentials)
      await deleteUser(user)
    } catch(err){
        throw err;
    }
  }
  const resetPassword = async (email) => {
    try{
      await sendPasswordResetEmail(auth, email);
    } catch(err){
        throw err;
    }
  }

  const checkUserStatus = () => {
    try{
      return auth.currentUser != null;
    } catch(err){
        throw err;
    }
  }
  
  const verifyEmail = async () => {
    try{
      await sendEmailVerification(auth.currentUser);
    } catch(err){
        throw err;
    }
  }
  const isEmailVerified = () => {
    try{
      return auth.currentUser.emailVerified;
    } catch(err){
        throw err;
    }
  }
  export {
    logInWithEmailAndPassword,
    createWithEmailAndPassword,
    app,
    auth,
    signOutUser,
    changePassword,
    delUser,
    checkUserStatus,
    isEmailVerified,
    resetPassword,
    verifyEmail
  }