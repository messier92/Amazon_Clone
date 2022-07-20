import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };