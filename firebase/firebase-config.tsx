// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,browserLocalPersistence } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI7u9LrHEyvwf1ZsbzY4EMjMDluW-3rTU",
  authDomain: "newton-sch.firebaseapp.com",
  projectId: "newton-sch",
  storageBucket: "newton-sch.appspot.com",
  messagingSenderId: "633312336525",
  appId: "1:633312336525:web:7398401c5973380203e0c4",
  measurementId: "G-E8T47WQP29"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{ persistence: browserLocalPersistence});
const db = getFirestore(app)
const storage = getStorage(app);

export {db , storage}
export default app 