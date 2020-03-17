import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-xOn4yxKwrdryNnpkyyhKVkFk2tRAwig",
    authDomain: "crwn-db-24bbb.firebaseapp.com",
    databaseURL: "https://crwn-db-24bbb.firebaseio.com",
    projectId: "crwn-db-24bbb",
    storageBucket: "crwn-db-24bbb.appspot.com",
    messagingSenderId: "294352614224",
    appId: "1:294352614224:web:6c3944d2f34c580740b255"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;