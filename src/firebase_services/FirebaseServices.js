import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  query,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import {
  ref,
  getStorage,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";
import {
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMUlO5sVJ62VNFTwVEU4MXdpUxxZ8oG2g",
  authDomain: "tvlapp-versionstracker.firebaseapp.com",
  projectId: "tvlapp-versionstracker",
  storageBucket: "tvlapp-versionstracker.firebasestorage.app",
  messagingSenderId: "107303561745",
  appId: "1:107303561745:web:7d503ac8dac3d564c99fb0",
  measurementId: "G-2NB20KB4FQ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Analytics
const firebaseAnalytics = getAnalytics(firebaseApp);

// FireStore
const firestoreDB = getFirestore(firebaseApp);

// FireAuth
const firebaseAuth = getAuth();

// Storage
const firebaseStorage = getStorage(firebaseApp);

export {
  firebaseAuth,
  firebaseApp,
  firestoreDB,
  firebaseStorage,
  firebaseAnalytics,
  ref,
  doc,
  query,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  collection,
  uploadBytes,
  deleteObject,
  getDownloadURL,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
