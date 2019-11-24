import * as firebase from "firebase";

var firebaseConfig = { 
    apiKey: "AIzaSyDplo1ssM51XACoSVCYDgRbrQDvRw3RMTA",
    authDomain: "my-project-c9430.firebaseapp.com", 
    databaseURL: "https://my-project-c9430.firebaseio.com",
    projectId: "my-project-c9430",
    storageBucket: "my-project-c9430.appspot.com",
    messagingSenderId: "55114717780",
    appId: "1:55114717780:web:2ae7f5f7dd6e5838c42bc1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export default firebase;