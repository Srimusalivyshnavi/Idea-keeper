import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChZQ8mUMcdHtj1HZnuAalcDBrQGu2DymM",
  authDomain: "idea-bank-fdb98.firebaseapp.com",
  projectId: "idea-bank-fdb98",
  storageBucket: "idea-bank-fdb98.appspot.com",
  messagingSenderId: "476090532682",
  appId: "1:476090532682:web:82d9753557358f59f7f7b3"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
export { projectFirestore};