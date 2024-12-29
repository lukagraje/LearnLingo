// import { createSelector } from "@reduxjs/toolkit";

// const selectTeachers = (state) => state.teachers.teachers;

// const selectFavorites = (state) => state.teachers.favorites;

// const selectFilters = (state) => state.teachers.filters;

// const selectFilteredTeachers = createSelector(
//   [selectTeachers, selectFilters],
//   (teachers, filters) => {
//     const matchesLanguage =
//       !filters.language || teachers.languages.includes(filters.language);

//     const matchesLevel =
//       !filters.level || teachers.levels.includes(filters.level);

//     const matchesPrice =
//       !filters.price || teachers.price_per_hour <= filters.price;

//     return matchesLanguage && matchesLevel && matchesPrice;
//   }
// );

// const selectFavoriteTeachers = createSelector(
//   [selectTeachers, selectFavorites],
//   (teachers, favorites) => {
//     return teachers.filter((_teacher, index) =>
//       favorites.includes(index.toString())
//     );
//   }
// );

// export { selectTeachers, selectFavorites, selectFilters, selectFavoriteTeachers, selectFilteredTeachers };
import { createSelector } from "@reduxjs/toolkit";

const selectTeachers = (state) => state.teachers.teachers;

const selectFavorites = (state) => state.teachers.favorites;

const selectFilters = (state) => state.teachers.filters;

const selectFilterOptions = (state) => state.teachers.filterOptions;

const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    return teachers.filter((teacher) => {
      const matchesLanguage =
        !filters.language || teacher.languages.includes(filters.language);

      const matchesLevel =
        !filters.level || teacher.levels.includes(filters.level);

      const matchesPrice =
        !filters.price || teacher.price_per_hour <= filters.price;

      return matchesLanguage && matchesLevel && matchesPrice;
    });
  }
);

const selectFavoriteTeachers = createSelector(
  [selectTeachers, selectFavorites],
  (teachers, favorites) => {
    console.log("Teachers:", teachers); // Debug
    console.log("Favorites:", favorites); // Debug
    return teachers.filter((teacher) => favorites.includes(teacher.id));
  }
);

export {
  selectTeachers,
  selectFavorites,
  selectFilters,
  selectFilterOptions,
  selectFavoriteTeachers,
  selectFilteredTeachers,
};

