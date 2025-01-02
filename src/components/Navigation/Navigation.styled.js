import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  gap: 6px;

  @media screen and (max-width: 768px) {
  width: 100%;
  justify-content: space-evenly;
  }

  @media screen and (min-width: 769px) {
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--main-text-color);
  line-height: 1.25;
  font-size: 16px;
  font-weight: 400;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--button-color);
  }

  &.active {
    color: #8a8a89;
  }
`;
