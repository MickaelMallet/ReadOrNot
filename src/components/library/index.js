import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const LibraryPage = () => {
  const booksRead = [
    {
      id: 1,
      title: "Vingt mille lieues sous les mers",
      cover:
        "https://m.media-amazon.com/images/I/91d0MPVV0qL.jpg",
    },
    {
      id: 2,
      title: "La Guerre des mondes",
      cover: "https://m.media-amazon.com/images/I/71x3rwTkF1L.jpg",
    },
    {
      id: 3,
      title: "La Horde du Contrevent",
      cover:
        "https://m.media-amazon.com/images/I/814U8H+bKHL.jpg",
    },
    {
      id: 4,
      title: "Batman: The Dark Knight Returns",
      cover: "https://m.media-amazon.com/images/I/41wkzapzlNL._SX326_BO1,204,203,200_.jpg",
    },
    {
      id: 5,
      title: "V pour Vendetta",
      cover:
        "https://m.media-amazon.com/images/I/71ihimelAGL.jpg",
    },
    {
      id: 6,
      title: "Gone Girl",
      cover:
        "https://m.media-amazon.com/images/I/41io6z2h3xL.jpg",
    },
    {
      id: 7,
      title: "Shutter Island",
      cover:
        "https://m.media-amazon.com/images/I/71f6MWskYDL.jpg",
    },
    {
      id: 8,
      title: "La part des ténèbres",
      cover:
        "https://m.media-amazon.com/images/I/51852ZOGIsL.jpg",
    },
    {
      id: 9,
      title: "La nuit des temps",
      cover:
        "https://m.media-amazon.com/images/I/51agfIYIv3L.jpg",
    },
    {
      id: 10,
      title: "Le Hobbit",
      cover: "https://m.media-amazon.com/images/I/5147HX5ZNRL._AC_UF700,800_QL80_.jpg",
    },
    {
      id: 11,
      title: "Le Petit Prince",
      cover: "https://m.media-amazon.com/images/I/71lyHAf7XXL.jpg",
    },
    {
      id: 12,
      title: "Fahrenheit 451",
      cover: "https://m.media-amazon.com/images/I/41Xe3FXKz6L._SX301_BO1,204,203,200_.jpg",
    },
    {
      id: 13,
      title: "1984",
      cover: "https://m.media-amazon.com/images/I/81StSOpmkjL.jpg",
    },
    {
      id: 14,
      title: "Le cycle de Dune",
      cover: "https://m.media-amazon.com/images/I/51DPA94V79L.jpg",
    },
    {
      id: 15,
      title: "Fondation",
      cover: "https://m.media-amazon.com/images/I/41TLuCnkTRL.jpg",
    },
    {
      id: 16,
      title: "l'Héritage",
      cover: "https://m.media-amazon.com/images/I/81Qk1KAq0kL.jpg",
    },
    
    {
      id: 18,
      title: "l'Assassin Royal",
      cover: "https://m.media-amazon.com/images/I/4169hOAIkmL._SX340_BO1,204,203,200_.jpg",
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