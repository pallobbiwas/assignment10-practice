// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtc3y9aU56hwvM8r5RqCUIqwZKfy25IN4",
  authDomain: "practice-before-assignment.firebaseapp.com",
  projectId: "practice-before-assignment",
  storageBucket: "practice-before-assignment.appspot.com",
  messagingSenderId: "72360765340",
  appId: "1:72360765340:web:dd05f0e405dd83600eca59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;