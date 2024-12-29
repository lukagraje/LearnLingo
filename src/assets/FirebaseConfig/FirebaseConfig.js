import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDJlITRAYnN1UttLvcM_LKIset8zHJzSk",
  authDomain: "learn-lingo-ed664.firebaseapp.com",
  databaseURL: "https://learn-lingo-ed664-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-ed664",
  storageBucket: "learn-lingo-ed664.firebasestorage.app",
  messagingSenderId: "112883847291",
  appId: "1:112883847291:web:e9976b4d7f178e3eaf92de",
  measurementId: "G-GLFXVVB7NZ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
