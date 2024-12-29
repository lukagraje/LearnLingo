import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Overlay, ModalContent, ButtonClose } from "./Modal.styled";

export const Modal = ({ modalState, closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  if (!modalState.isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <ButtonClose onClick={closeModal}>x</ButtonClose>
        {children}
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  modalState: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    type: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func,
  children: PropTypes.node.isRequired,
};
