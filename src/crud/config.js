import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import "firebase/compat/firestore";
// import 'firebase/compat/database';

const firebaseConfig = {
  // ...
  apiKey: "AIzaSyBJZ89wAE7o-RkyaKXm-ot_UDB9Y6IGwEc",
  authDomain: "crud-e90ff.firebaseapp.com",
  projectId: "crud-e90ff",
  storageBucket: "crud-e90ff.appspot.com",
  messagingSenderId: "55672668158",
  appId: "1:55672668158:web:7a67f1acfb932887da8aaf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
