import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
          <Link to="/mentionslegales" className="footer-content">
            Mentions Légales
          </Link>
          <Link to="/contact" className="footer-content">
            Contact
          </Link>
          <Link to="/about" className="footer-content">
            A propos
          </Link>
      </div>
    </div>
  );
}

export default Footer;
