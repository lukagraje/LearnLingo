import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../assets/FirebaseConfig/FirebaseConfig";
import { setFiltersOptions } from "./teachersSlice";
import { ref, set, get, remove } from "firebase/database";
import { useAuth } from "../../hooks/useAuth";



export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { dispatch }) => {
    try {
      const teachersRef = ref(db, "teachers");
      const snapshot = await get(teachersRef);

      if (!snapshot.exists()) {
        throw new Error("Brak danych nauczycieli w Firebase");
      }

      const teachersData = [];
      const languages = new Set();
      const levels = new Set();
      const prices = new Set();

      snapshot.forEach((childSnapshot) => {
        const teacher = childSnapshot.val();
        const id = childSnapshot.key;
        teachersData.push({ ...teacher, id });

        if (teacher.languages) {
          teacher.languages.forEach((lang) => languages.add(lang));
        }
        if (teacher.levels) {
          teacher.levels.forEach((lvl) => levels.add(lvl));
        }
        if (teacher.price_per_hour) {
          prices.add(teacher.price_per_hour);
        }
      });

      const languageOptions = Array.from(languages);
      const levelOptions = Array.from(levels);
      const pricesOptions = Array.from(prices).sort((a, b) => a - b);

      dispatch(
        setFiltersOptions({
          languages: languageOptions,
          levels: levelOptions,
          prices: pricesOptions,
        })
      );

      return teachersData;
    } catch (error) {
      throw new Error(`Nie udało się pobrać nauczycieli: ${error.message}`);
    }
  }
);

