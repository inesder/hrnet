import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                </div>
                <div className="modal-body">Employee created!</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
