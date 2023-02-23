import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          LOGO
        </Link>
        <div className="navbar-links">
          <Link to="/bibliotheque" className="navbar-link">
            Bibliothèque
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Inscription
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;