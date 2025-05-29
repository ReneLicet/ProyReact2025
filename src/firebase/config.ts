// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtx-djSlKWjRAy5iBN7JFzk48CpQz24yw",
  authDomain: "proyecto-elearning-47fc2.firebaseapp.com",
  projectId: "proyecto-elearning-47fc2",
  storageBucket: "proyecto-elearning-47fc2.firebasestorage.app",
  messagingSenderId: "735568588239",
  appId: "1:735568588239:web:cb515032363659506176ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);