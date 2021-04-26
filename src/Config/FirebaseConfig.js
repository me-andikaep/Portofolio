import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALR5nPkh20j9xzZbZ5rubMj3ZRkD2O7l0",
    authDomain: "fir-portofolio-ccfa8.firebaseapp.com",
    projectId: "fir-portofolio-ccfa8",
    storageBucket: "fir-portofolio-ccfa8.appspot.com",
    messagingSenderId: "20303570964",
    appId: "1:20303570964:web:ae600fc22b24016945df01",
    measurementId: "G-48HD88FB50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   firebase.analytics();

export const database = firebase.database();

export default firebase;
