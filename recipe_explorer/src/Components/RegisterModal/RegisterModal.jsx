import React from 'react';
import './RegisterModal.css';

function RegisterModal() {
  return (
    <div className="register-modal">
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterModal;