import Firebase from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDQy-qpQx6yPxKfrOKF0S4mjeycXtEywiw",
    authDomain: "mstream-9122e.firebaseapp.com",
    databaseURL: "https://mstream-9122e.firebaseio.com",
    projectId: "mstream-9122e",
    storageBucket: "mstream-9122e.appspot.com",
    messagingSenderId: "1054951972389",
    appId: "1:1054951972389:web:fcd4180c6159692b1d29cc",
    measurementId: "G-CG9H29XPS7"
  };


const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();