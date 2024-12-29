import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  // Jeśli użytkownik nie jest zalogowany i nie trwa odświeżanie sesji, przekieruj
  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to={redirectTo} />;
  }

  // Jeśli użytkownik jest zalogowany, renderuj przekazany element
  return element;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
