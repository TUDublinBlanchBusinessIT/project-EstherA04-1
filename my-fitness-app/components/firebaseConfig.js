import firebase from 'firebase'; // Import Firebase from the correct package

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBgPfpAN65GiYN36M7AKY-3KCOoifb2KLs",
  databaseURL: "https://myfitnessapp-6d681.firebaseio.com",  // Corrected key here
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
