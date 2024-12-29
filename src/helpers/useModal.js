import { useState, useEffect } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState({
    name: "",
    isOpen: false,
  });

  const openModal = (name) => {
    console.log("Opening modal:", name); // Dodajemy logowanie   
    setModalState({ name, isOpen: true });    
  };

  const closeModal = () => {
    console.log("Closing modal"); // Dodajemy logowanie

    setModalState({ name: "", isOpen: false });
  };

  useEffect(() => {
    console.log("Modal state updated:", modalState);
  }, [modalState]); // Logujemy zmiany stanu

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
