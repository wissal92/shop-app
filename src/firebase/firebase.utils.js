import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKun2odRbb1eTy6okGirl0qnFmggZ0nTY",
    authDomain: "store-db-f1a72.firebaseapp.com",
    databaseURL: "https://store-db-f1a72.firebaseio.com",
    projectId: "store-db-f1a72",
    storageBucket: "",
    messagingSenderId: "848613937273",
    appId: "1:848613937273:web:b7c6cd5c18ef4069"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;