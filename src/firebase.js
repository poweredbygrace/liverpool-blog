// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARpR3PIJHZackMUh2Dms9p2q378-y4vGU",
  authDomain: "liverpool-blog.firebaseapp.com",
  projectId: "liverpool-blog",
  storageBucket: "liverpool-blog.firebasestorage.app",
  messagingSenderId: "735097382442",
  appId: "1:735097382442:web:3da0bb08e392db94c60553",
//   measurementId: "G-MKQ437DN9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);