import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: "AIzaSyAkoe6IAhbiMU2CkNGno5xMkbRc3l98BBU",
    authDomain: "the-wallet-manager.firebaseapp.com",
    projectId: "the-wallet-manager",
    storageBucket: "the-wallet-manager.appspot.com",
    messagingSenderId: "64861040671",
    appId: "1:64861040671:web:b8f6c9d80cb15f6bf0e52a",
    measurementId: "G-LQQ1GL6ZN1"
  });


  export default app;