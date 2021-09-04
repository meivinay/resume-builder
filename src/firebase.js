import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB2qy41oy_JrFMh9tnoYhdShcUMW_FoOE",
  authDomain: "resume-builder-3a99c.firebaseapp.com",
  projectId: "resume-builder-3a99c",
  storageBucket: "resume-builder-3a99c.appspot.com",
  messagingSenderId: "423119986188",
  appId: "1:423119986188:web:1b7e8a1a00f91a344bd829"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
