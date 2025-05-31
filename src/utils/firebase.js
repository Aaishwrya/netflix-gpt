// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAOkhXWRk7zuZy5tx0zpK-AfU8-cyAtPg",
  authDomain: "netflix-gpt-837d5.firebaseapp.com",
  projectId: "netflix-gpt-837d5",
  storageBucket: "netflix-gpt-837d5.firebasestorage.app",
  messagingSenderId: "728859716843",
  appId: "1:728859716843:web:2d9a370f82fcc94c5ae2ae",
  measurementId: "G-7XPM4E9CZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
