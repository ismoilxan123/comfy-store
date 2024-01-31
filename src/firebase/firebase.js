// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGC1H6E48o2Sz2EixmvQFuzjacji5sSp0",
  authDomain: "comfy-store-76b24.firebaseapp.com",
  projectId: "comfy-store-76b24",
  storageBucket: "comfy-store-76b24.appspot.com",
  messagingSenderId: "45893922769",
  appId: "1:45893922769:web:37d616b7a0677dbbb23af0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
