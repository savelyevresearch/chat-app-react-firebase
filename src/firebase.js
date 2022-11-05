import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc_mL6LxvQvwgGWa4Qdl9bz-Dqs71HrKc",
  authDomain: "chat-app-dddf0.firebaseapp.com",
  projectId: "chat-app-dddf0",
  storageBucket: "chat-app-dddf0.appspot.com",
  messagingSenderId: "910245364303",
  appId: "1:910245364303:web:5e9125319930db3a07203a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();