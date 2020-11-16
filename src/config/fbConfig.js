import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCAA7N6KGFXFjdiVqnEPXkmGLZTWIVkAB8",
    authDomain: "reactjs-537a6.firebaseapp.com",
    databaseURL: "https://reactjs-537a6.firebaseio.com",
    projectId: "reactjs-537a6",
    storageBucket: "reactjs-537a6.appspot.com",
    messagingSenderId: "278566418541",
    appId: "1:278566418541:web:0c80daa706adffb8226764",
    measurementId: "G-BMPYWTHNQ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  
  export default firebase; 
  