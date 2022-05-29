const firebase = require('firebase');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAObtnjxWyN5Yie8b8iHd9Qkk1jPN7ffZ0",
  authDomain: "aviation-visualizer.firebaseapp.com",
  projectId: "aviation-visualizer",
  storageBucket: "aviation-visualizer.appspot.com",
  messagingSenderId: "526130176586",
  appId: "1:526130176586:web:0acdfcde178ee74b82fcb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);