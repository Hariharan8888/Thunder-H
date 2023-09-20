import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyBZOFlVcXCyCw_mGUh-CP3XBTJYkD3xL0o",
    authDomain: "thunder-h.firebaseapp.com",
    projectId: "thunder-h",
    storageBucket: "thunder-h.appspot.com",
    messagingSenderId: "585199297040",
    appId: "1:585199297040:web:abda9302f2880c14b4e095"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
