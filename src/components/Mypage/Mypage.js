import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Mypage.scss";

const Mypage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://kilianthoraval-server.eddi.cloud:8080/books");
      const result = await response.json();
      setData(result);
    };
    
    fetchData();
  }, []);

  const handleSlideChange = (event) => {
    setCurrentIndex(event.item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const itemsBookRead = data.map((book) => (
    <div key={book.id} className="mypage-carousel-item">
      <img src={book.img} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.description}</p>
    </div>
  ));

  const itemsBookToRead = data.map((book) => (
    <div key={book.id} className="mypage-carousel-item">
      <img src={book.img} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.description}</p>
    </div>
  ));

  
  return (
    <div className="mypage-container">
      <h1>Ma Bibliothèque</h1>
      <h2>Livres lus</h2>
      <AliceCarousel
        items={itemsBookRead}
        responsive={responsive}
        slideToIndex={currentIndex}
        // onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
      <h2>Livres à lire</h2>
      <AliceCarousel
        items={itemsBookToRead}
        responsive={responsive}
        slideToIndex={currentIndex}
        // onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
    </div>
  );
};

export default Mypage;


