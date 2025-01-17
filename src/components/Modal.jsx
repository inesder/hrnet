import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide }) => {
    if (!isShowing) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={hide}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
                <div className="modal">
                    <div className="modal-header">
                        <button className="modal-close-button" onClick={hide}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">Employee created!</div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default React.memo(Modal);
