import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue sur notre site</h1>
      <p>Cliquez sur l'un des onglets pour commencer</p>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Inscription</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
