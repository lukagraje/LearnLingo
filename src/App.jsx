import { Suspense } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/Routes/PrivateRoute/PrivateRoute";

import HomePage from "./pages/Home/Home";
import FavoritesPage from "./pages/Favorites/Favorites";
import TeachersPage from "./pages/Teachers/Teachers";
import Layout from "./components/SharedLayout/SharedLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
