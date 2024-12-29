import { useAuth } from "../../hooks/useAuth";
import { NavContainer, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/teachers">Teachers</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/favorites">Favorites</StyledNavLink>}
    </NavContainer>
  );
};
