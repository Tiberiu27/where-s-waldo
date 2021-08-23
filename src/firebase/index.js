import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD4FALvgYpL3k6ao883WylW2CuZ0SaREwg",
    authDomain: "wheres-waldo-27ba6.firebaseapp.com",
    projectId: "wheres-waldo-27ba6",
    storageBucket: "wheres-waldo-27ba6.appspot.com",
    messagingSenderId: "138183533515",
    appId: "1:138183533515:web:be92d28cfc57fa54f64c4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export {db, firebase};