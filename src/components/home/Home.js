import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Votre prochaine aventure littéraire, savamment orchestrée</h1>
        <p>
        Laissez-vous guider par notre traqueur de livres pour des lectures personnalisées. Notre bibliothèque s'adapte à vos goûts et vos envies pour une expérience de lecture unique.
        </p>
      </div>
      <div className="home-right">
        <div className="home-cover">
          <img src="https://the-wizards-shop.com/2578-thickbox_default/harry-potter-a-l-ecole-des-sorciers-serpentard-edition-collector.jpg" alt="book cover" />
        </div>
        <div className="home-reviews">
          <h4>Avis de livres</h4>
          <ul>
            <li>
              <h3>Titre du livre</h3>
              <p>Par: Auteur du livre</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam pharetra mi, a elementum diam facilisis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </li>
            <li>
              <h3>Titre du livre</h3>
              <p>Par: Auteur du livre</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam pharetra mi, a elementum diam facilisis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </li>
            <li>
              <h3>Titre du livre</h3>
              <p>Par: Auteur du livre</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam pharetra mi, a elementum diam facilisis ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
