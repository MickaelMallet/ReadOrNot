import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const LibraryPage = () => {
  const booksRead = [
    {
      id: 1,
      title: "Harry Potter à l'école des sorciers",
      cover:
        "https://m.media-amazon.com/images/I/916DM68L6cS.jpg",
    },
    {
      id: 2,
      title: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
      cover: "https://m.media-amazon.com/images/I/81BT9A2Uv7L.jpg",
    },
    {
      id: 3,
      title: "Le silence des agneaux",
      cover:
        "https://m.media-amazon.com/images/I/814fRILnbnL.jpg",
    },
    {
      id: 4,
      title: "1984",
      cover: "https://images.booksense.com/images/935/262/9780452262935.jpg",
    },
    {
      id: 5,
      title: "Orange mécanique",
      cover:
        "https://i.pinimg.com/originals/eb/da/cb/ebdacbbb68fa1479fcade68c7ca90511.jpg",
    },
    {
      id: 6,
      title: "Le meilleur des mondes",
      cover:
        "https://cdn1.booknode.com/book_cover/975/le_meilleur_des_mondes-974961-264-432.jpg",
    },
    {
      id: 7,
      title: "Watchmen",
      cover:
        "https://m.media-amazon.com/images/I/71pgBiyXh8L.jpg",
    },
    {
      id: 8,
      title: "Misery",
      cover:
        "https://m.media-amazon.com/images/I/51SSlC2WctL.jpg",
    },
    {
      id: 9,
      title: "The key to Mulholland Drive",
      cover:
        "https://m.media-amazon.com/images/I/41ptt9EUgyL.jpg",
    },
  ];
 

  const booksToRead = [
    {
      id: 1,
      title: "Harry Potter à l'école des sorciers",
      cover:
        "https://m.media-amazon.com/images/I/916DM68L6cS.jpg",
    },
    {
      id: 2,
      title: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
      cover: "https://m.media-amazon.com/images/I/81BT9A2Uv7L.jpg",
    },
    {
      id: 3,
      title: "Le silence des agneaux",
      cover:
        "https://m.media-amazon.com/images/I/814fRILnbnL.jpg",
    },
    {
      id: 4,
      title: "1984",
      cover: "https://images.booksense.com/images/935/262/9780452262935.jpg",
    },
    {
      id: 5,
      title: "Orange mécanique",
      cover:
        "https://i.pinimg.com/originals/eb/da/cb/ebdacbbb68fa1479fcade68c7ca90511.jpg",
    },
    {
      id: 6,
      title: "Le meilleur des mondes",
      cover:
        "https://cdn1.booknode.com/book_cover/975/le_meilleur_des_mondes-974961-264-432.jpg",
    },
    {
      id: 7,
      title: "Watchmen",
      cover:
        "https://m.media-amazon.com/images/I/71pgBiyXh8L.jpg",
    },
    {
      id: 8,
      title: "Misery",
      cover:
        "https://m.media-amazon.com/images/I/51SSlC2WctL.jpg",
    },
    {
      id: 9,
      title: "The key to Mulholland Drive",
      cover:
        "https://m.media-amazon.com/images/I/41ptt9EUgyL.jpg",
    },

  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  return (
    <div className="library-page">
      <h2 className="">Mes livres lus</h2>
      <Slider {...settings}>
        {booksRead.map((book) => (
          <div key={book.id}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </Slider>
      <h2>Mes livres à lire</h2>
      <Slider {...settings}>
        {booksToRead.map((book) => (
          <div key={book.id}>
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LibraryPage;