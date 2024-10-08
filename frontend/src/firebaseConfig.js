// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrKrsgO4_IiZpSMPFb7dzYmcm_8_n6WGs",
  authDomain: "legalease-49515.firebaseapp.com",
  projectId: "legalease-49515",
  storageBucket: "legalease-49515.appspot.com",
  messagingSenderId: "61725537844",
  appId: "1:61725537844:web:e886623182941fcb693c61",
  measurementId: "G-WJF2PMEYGM",
};

// Initialize Firebase Authentication and get a reference to the service

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
