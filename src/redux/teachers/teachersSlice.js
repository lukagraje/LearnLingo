import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTeachers,
} from "./teachersOperations";

const initialState = {
  teachers: [],
  favorites: [],
  filters: {
    language: null,
    level: null,
    price: null,
  },
  filterOptions: {
    languages: [],
    levels: [],
    prices: [],
  },
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters[filterType] = value;
    },
    resetFilters: (state) => {
      state.filters = { language: null, level: null, price: null };
    },
    setFiltersOptions: (state, action) => {
      state.filterOptions.languages = action.payload.languages || [];
      state.filterOptions.levels = action.payload.levels || [];
      state.filterOptions.prices = action.payload.prices || [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
        state.error = null;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })      
  },
});

export const { 
  setFilter,
  resetFilters,
  setFiltersOptions,
} = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
