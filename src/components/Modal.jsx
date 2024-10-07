import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/icon/Close.svg"; // Renamed for clarity

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  color: var(--gray-60);
  background: var(--gray-10);
  border-radius: 24px;
  padding: 40px;
  width: 612px;
  height: 454px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (min-width: 375px) and (max-width: 766px) {
    width: 327px;
    height: 568px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray-60);
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
