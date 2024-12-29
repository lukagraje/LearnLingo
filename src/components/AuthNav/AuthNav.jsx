import {
  AuthNavContainer,
  ButtonLogin,
  ButtonRegister,
} from "./AuthNav.styled.js";
import { useModal } from "../../helpers/useModal.js";
import { RegisterForm } from "../RegisterForm/RegisterForm.jsx";
import { LoginForm } from "../LoginForm/LoginForm.jsx";
import { Modal } from "../Modal/Modal.jsx";

import { FiLogIn } from "react-icons/fi";

export const AuthNav = () => {
  const { modalState, closeModal, openModal } = useModal();

  return (
    <AuthNavContainer>
      <ButtonLogin onClick={() => openModal("login")}>
        <span>
          <FiLogIn />
        </span>
        Log in
      </ButtonLogin>
      <ButtonRegister onClick={() => openModal("register")}>
        Register
      </ButtonRegister>
      <Modal modalState={modalState} closeModal={closeModal}>
        {modalState.name === "register" && (
          <RegisterForm onSubmit={closeModal} />
        )}
        {modalState.name === "login" && <LoginForm onSubmit={closeModal} />}
      </Modal>
    </AuthNavContainer>
  );
};
