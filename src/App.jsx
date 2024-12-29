import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/Routes/PrivateRoute/PrivateRoute";


import { Container } from "./main";

import HomePage from "./pages/Home/Home";
import FavoritesPage from "./pages/Favorites/Favorites";
import TeachersPage from "./pages/Teachers/Teachers";
import Layout from "./components/SharedLayout/SharedLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() { 
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route
              path="/favorites"
              element={<PrivateRoute element={<FavoritesPage />} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
