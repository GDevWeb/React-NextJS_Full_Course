/* 
  28.The special children Props
  29.State and conditional content
  30.Adding a Shared Header & more State Management
  32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 

*/

import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  // 1.***State***
  const navigate = useNavigate();
  // 2.***Functions***
  const closeHandler = () => {
    navigate(".."); //render form everywhere in the app
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // 3.***Render***
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={closeHandler}>
      <div className={classes.modal} onClick={stopPropagation}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
