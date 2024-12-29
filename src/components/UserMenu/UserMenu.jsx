import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperations";
import { ButtonRegister } from "../AuthNav/AuthNav.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <ButtonRegister onClick={handleLogout}>Logout</ButtonRegister>
    </div>
  );
};
