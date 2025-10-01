import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";

function LoginModal({
  isOpen,
  onClose,
  onLogin = () => {},
  onRegisterClick = () => {},
}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with actual login logic (API call)
    console.log("Logging in:", { username, password });
    onLogin({ username, password }); // optional, pass login data up
    onClose();
    navigate("/home");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  // **Don't render modal if it's closed**
  if (!isOpen) return null;

  return (
    <ModalWithForm
      title="Login"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Login"
    >
      <label htmlFor="login-username">
        Username:
        <input
          type="text"
          id="login-username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label htmlFor="login-password">
        Password:
        <input
          type="password"
          id="login-password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button
        type="button"
        className="modal-with-form__switch"
        onClick={onRegisterClick}
      >
        Don't have an account? Register
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
