import firebase from 'firebase';
//import firebase from 'firebase/app';
//import 'firebase/database'; 

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC583rCiyS67ZtycwixlCf1T4Y_DR3PHSw",
    authDomain: "school-attendance-app-4265f.firebaseapp.com",
    databaseURL: "https://school-attendance-app-4265f.firebaseio.com",
    projectId: "school-attendance-app-4265f",
    storageBucket: "school-attendance-app-4265f.appspot.com",
    messagingSenderId: "588025408502",
    appId: "1:588025408502:web:97121790559f18df73f5d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();