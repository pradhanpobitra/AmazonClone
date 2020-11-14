// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA3VqNw87csywVw8X_qYiRqdKOr9fGDeJU",
  authDomain: "clone-o101.firebaseapp.com",
  databaseURL: "https://clone-o101.firebaseio.com",
  projectId: "clone-o101",
  storageBucket: "clone-o101.appspot.com",
  messagingSenderId: "969001528316",
  appId: "1:969001528316:web:1f490adb47bd594f6ca079",
  measurementId: "G-8GMXKT7P7L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };