import React, { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  children,
  buttonText = "Submit",
  onClose = () => {},
  onSubmit = () => {},
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    // close only when clicking the overlay itself
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div className="modal-with-form__overlay" onClick={handleOverlayClick}>
      <div className="modal-with-form" onClick={(e) => e.stopPropagation()}>
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