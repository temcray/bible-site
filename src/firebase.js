// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { getFunctions } from 'firebase/functions';




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC_9eOZtzfQrHap5NUqTPG1bZtThqe5Z0",
  authDomain: "peaceful-streams-bf052.firebaseapp.com",
  projectId: "peaceful-streams-bf052",
  storageBucket: "peaceful-streams-bf052.firebasestorage.app",
  messagingSenderId: "844086411302",
  appId: "1:844086411302:web:d55148320437307299a6e7",
  measurementId: "G-YS8YGZRB39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const database = getDatabase(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
