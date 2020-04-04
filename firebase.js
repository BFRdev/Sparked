import * as firebase from 'firebase'

import '@firebase/firestore';


//firebacse key 
var firebaseConfig = {
  apiKey: "AIzaSyCN8ZmOhyI2upGCWpPzMZsqmEY_igIvrgc",
  authDomain: "sparked-bd638.firebaseapp.com",
  databaseURL: "https://sparked-bd638.firebaseio.com",
  projectId: "sparked-bd638",
  storageBucket: "sparked-bd638.appspot.com",
  messagingSenderId: "480536595337",
  appId: "1:480536595337:web:945f6e133d77bc19a66f58",
  measurementId: "G-YGGLN3DBXH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase; 
