import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Mypage.scss'

const Mypage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Les items pour le carousel "Livre lu"
  const itemsLivreLu = [
    <div key={1} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=1" alt="carousel-item-1" />
      <h3>Livre lu 1</h3>
    </div>,
    <div key={2} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=2" alt="carousel-item-2" />
      <h3>Livre lu 2</h3>
    </div>,
    <div key={3} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=3" alt="carousel-item-3" />
      <h3>Livre lu 3</h3>
    </div>,
    <div key={4} className="mypage-carousel-item">
    <img src="https://picsum.photos/500/300?random=15" alt="carousel-item-4" />
    <h3>Livre lu 4</h3>
  </div>,
    // Ajouter les autres livres lus ici...
  ];

  // Les items pour le carousel "Livre à lire"
  const itemsLivreALire = [
    <div key={1} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=9" alt="carousel-item-4" />
      <h3>Livre à lire 1</h3>
    </div>,
    <div key={2} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=5" alt="carousel-item-5" />
      <h3>Livre à lire 2</h3>
    </div>,
    <div key={3} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=6" alt="carousel-item-6" />
      <h3>Livre à lire 3</h3>
    </div>,
    <div key={4} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=25" alt="carousel-item-7" />
      <h3>Livre à lire 4</h3>
    </div>,
    // Ajouter les autres livres à lire ici...
  ];

  const handleSlideChange = (event) => {
    setCurrentIndex(event.item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="mypage-container">
      <h1>Ma Bibliothèque</h1>
      <h2>Livres lus</h2>
      <AliceCarousel
        items={itemsLivreLu}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
      <h2>Livres à lire</h2>
      <AliceCarousel
        items={itemsLivreALire}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
    </div>
  );
};

export default Mypage;

