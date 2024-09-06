// src/Components/Modal.js
import React, { useState } from "react";
import "../Components/Modal.css";

export default function Modal({ onClose }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === "Admin" && password === "Admin@123") {
      console.log("Login successful!");
      setErrorMessage("");
      onClose();
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="userId"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type="submit" className="btn">
              Login
            </button>
            <button type="btn" onClick={onClose} className="btn">
              close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
