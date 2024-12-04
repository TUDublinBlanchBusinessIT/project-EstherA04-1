// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import for Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPfpAN65GiYN36M7AKY-3KCOoifb2KLs",
  authDomain: "myfitnessapp-6d681.firebaseapp.com",
  projectId: "myfitnessapp-6d681",
  storageBucket: "myfitnessapp-6d681.appspot.com", // Corrected storageBucket value
  messagingSenderId: "392644976370",
  appId: "1:392644976370:web:c7149dcd5dbf3ecd94ba6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore Database
const db = getFirestore(app);

// Export Firebase services
export { app, auth, db };
   






import firebase from 'firebase'; // Import Firebase from the correct package

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBgPfpAN65GiYN36M7AKY-3KCOoifb2KLs",
  authDomain: "myfitnessapp-6d681.firebaseapp.com",
  projectId: "myfitnessapp-6d681",
  storageBucket: "myfitnessapp-6d681.appspot.com",
  messagingSenderId: "392644976370",
  appId: "1:392644976370:web:c7149dcd5dbf3ecd94ba6b",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the already initialized instance
}

// Export Firebase Authentication and Firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
