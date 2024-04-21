import firebase from 'firebase/compat/app';    
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAU7PBSUcGTFd8bw2kxZU_XHVSl4U75TMM",
    authDomain: "ieee-site-70ce1.firebaseapp.com",
    projectId: "ieee-site-70ce1",
    storageBucket: "ieee-site-70ce1.appspot.com",
    messagingSenderId: "463378110371",
    appId: "1:463378110371:web:bda8e5925406a8a70d6c16",
    measurementId: "G-R2CEQFPJ98"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, firebaseApp };
export default db;