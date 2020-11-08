import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-iPycIFXo7PcAExOGSgI5NyFHDdiEs-Y",
  authDomain: "item7-5f169.firebaseapp.com",
  databaseURL: "https://item7-5f169.firebaseio.com",
  projectId: "item7-5f169",
  storageBucket: "item7-5f169.appspot.com",
  messagingSenderId: "353746122773",
  appId: "1:353746122773:web:3e0a024c4d487db4a4b61c",
  measurementId: "G-9WJ4M0WD1K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, phoneNumber, firstName, lastName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        phoneNumber,
        firstName,
        lastName,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
