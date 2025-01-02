import { useState, useEffect } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState({
    name: "",
    isOpen: false,
  });

  const openModal = (name) => {
    setModalState({ name, isOpen: true });
  };

  const closeModal = () => {
    setModalState({ name: "", isOpen: false });
  };

  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalState.isOpen]);

  return {
    modalState,
    openModal,
    closeModal,
  };
};
