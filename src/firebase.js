// https://stackoverflow.com/questions/72369451/cannot-read-properties-of-undefined-reading-firestore
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3DWb8v1CRErie9Bcyit_rttHTr6ZLWWk",
  authDomain: "clone-53496.firebaseapp.com",
  projectId: "clone-53496",
  storageBucket: "clone-53496.appspot.com",
  messagingSenderId: "136063337721",
  appId: "1:136063337721:web:05b829c2c71ba821cd8e28",
  measurementId: "G-K4FHBMYRTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);

export { db, auth };