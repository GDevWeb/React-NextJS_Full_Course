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

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeHandler}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full"
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
