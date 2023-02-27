import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* <Link to="/" className="navbar-logo">
          LOGO
        </Link> */}
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
          <Link to ="/mypage" className="navbar-link">
           Profil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;