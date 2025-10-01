import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  children,
  buttonText = "Submit",
  onClose = () => {},
  onSubmit = () => {},
}) {
  return (
    <div className="modal-with-form__overlay">
      <div className="modal-with-form">
        <button
          type="button"
          className="modal-with-form__close"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="modal-with-form__title">{title}</h2>
        <form className="modal-with-form__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal-with-form__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;