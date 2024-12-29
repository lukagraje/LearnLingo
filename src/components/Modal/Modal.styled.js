import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(1.5px);
    `;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  z-index: 1001;

`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: color var(--transition);
  color: #121417;
  font-size: 24px;
  &:hover,
  :focus {
    color: var(--button-active-color);
  }

  
`;
