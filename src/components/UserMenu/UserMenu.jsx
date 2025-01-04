import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { ButtonRegister } from "../AuthNav/AuthNav.styled";
import { LogoutWrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <LogoutWrapper>
      <ButtonRegister onClick={handleLogout}>Logout</ButtonRegister>
    </LogoutWrapper>
  );
};
