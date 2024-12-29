import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, set, getDatabase } from "firebase/database";
import {auth, db} from "../../assets/FirebaseConfig/FirebaseConfig";



// Rejestracja użytkownika
const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Ustawianie danych użytkownika w bazie danych
      await set(ref(db, `users/${user.uid}`), {
        username: username,
        email: user.email,
        created_at: new Date().toISOString(),
      });

      return {
        uid: user.uid,
        email: user.email,
        username,
      };
    } catch (e) {
      return rejectWithValue(e.message); // Zwracanie błędu
    }
  }
);

// Logowanie użytkownika
const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        name: user.displayName || "User",
      };
    } catch (e) {
      return rejectWithValue(e.message); // Zwracanie błędu
    }
  }
);

// Wylogowanie użytkownika
const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return null; // Po wylogowaniu zwracamy null
    } catch (e) {
      return rejectWithValue(e.message); // Zwracanie błędu
    }
  }
);

// Pobieranie aktualnego użytkownika
const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const user = await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            unsubscribe();
            if (user) {
              resolve({
                uid: user.uid,
                email: user.email,
                name: user.displayName || "User",
              });
            } else {
              reject("No authenticated user found!"); // Brak zalogowanego użytkownika
            }
          },
          (error) => reject(error.message)
        );
      });
      return user;
    } catch (e) {
      return rejectWithValue(e.message); // Zwracanie błędu
    }
  }
);

export { registerUser, loginUser, logoutUser, fetchCurrentUser };
