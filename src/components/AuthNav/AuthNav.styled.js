import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 16px;

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  color: var(--main-text-color);
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration-color: transparent;
  transition: text-decoration var(--transition);

  & span {
    display: inherit;
    transition: color var(--transition);
  }

  &:hover,
  :focus {
    & span {
      color: var(--button-color);
    }
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: var(--button-color);
  }
`;

export const ButtonRegister = styled.button`
  cursor: pointer;
  padding: 12px 28px;
  max-width: 166px;
  border: none;
  border-radius: 12px;
  background-color: #121417;
  transition: background-color var(--transition), color var(--transition);

  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;

  &:hover,
  :focus {
    background-color: var(--button-color);
    color: var(--main-text-color);
  }

  @media screen and (min-width: 769px) {
    padding: 14px 39px;
  }
`;
