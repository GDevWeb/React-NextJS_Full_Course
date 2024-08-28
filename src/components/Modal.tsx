/* 
  28.The special children Props
  29.State and conditional content
  30.Adding a Shared Header & more State Management
  32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 

*/

import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  // 1.***State***
  // 2.***Functions***
  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  // 3.***Render***
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <div className={classes.modal} onClick={stopPropagation}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
