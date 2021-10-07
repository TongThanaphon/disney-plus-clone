import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgtPJtzzGco0Oiw50FJ09tzKHehHIcpwg",
  authDomain: "disney-plus-clone-56445.firebaseapp.com",
  projectId: "disney-plus-clone-56445",
  storageBucket: "disney-plus-clone-56445.appspot.com",
  messagingSenderId: "899412706215",
  appId: "1:899412706215:web:9c8c304f925fe74c01ec82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
