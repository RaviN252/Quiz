// src/Components/Land.js
import React, { useState } from "react";
import "../Components/Land.css";
import Admin from "../Assets/admin.png";
import User from "../Assets/user.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function Land() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopUp((prevState) => !prevState);
  };

  return (
    <div id="body">
      <h1 className="header">Quix APP</h1>
      <div className="Main">
        <div className="sub">
          <img src={User} alt="User" />
          <h2>User</h2>
          <button>
            <Link to="/Game" id="navli">
              Play Game
            </Link>
          </button>
        </div>
        <div className="sub">
          <img src={Admin} alt="Admin" />
          <h2>Admin</h2>
          <button onClick={handleToggleModalPopup}>Admin Login</button>
          {showModalPopUp && <Modal onClose={handleToggleModalPopup} />}
        </div>
      </div>
    </div>
  );
}

export default Land;
