// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxZkOIxcMMw3Ujwi_EAEmbvweY3cHZNOU",
  authDomain: "firechat-a0fd4.firebaseapp.com",
  projectId: "firechat-a0fd4",
  storageBucket: "firechat-a0fd4.appspot.com",
  messagingSenderId: "462630952135",
  appId: "1:462630952135:web:62305a8f8ecfb8542c32e2",
  measurementId: "G-W571F0RLHY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
