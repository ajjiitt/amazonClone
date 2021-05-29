import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChiZcqGLiw9Ee0ijt05k-ujJ1CUyZqcqQ",
  authDomain: "clone-cp-ca58a.firebaseapp.com",
  databaseURL: "https://clone-cp-ca58a.firebaseio.com",
  projectId: "clone-cp-ca58a",
  storageBucket: "clone-cp-ca58a.appspot.com",
  messagingSenderId: "743568952134",
  appId: "1:743568952134:web:e05796c874950e34ce7347",
  measurementId: "G-XM80X8KW53"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};