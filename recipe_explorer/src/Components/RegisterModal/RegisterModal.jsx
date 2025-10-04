import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose = () => {},
  onLoginClick = () => {},
  onRegister = () => {},
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // If not open, don't render
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return; // basic guard
    onRegister({ name, email, password });
    onClose();
    navigate("/home"); // ✅ same as login
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-name" className="modal__name_label">
        Name:
        <input
          type="text"
          id="register-name"
          className="modal__input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button
        type="button"
        className="modal-with-form__switch"
        onClick={onLoginClick}
      >
        Already have an account? Log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
