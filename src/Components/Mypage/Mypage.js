import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Mypage.scss";

const Mypage = () => {
const [currentIndex] = useState(0);
const [data, setData] = useState([]);
const [toReadList, setToReadList] = useState([]);
const [readList, setReadList] = useState([]);

useEffect(() => {
const fetchData = async () => {
const response = await fetch("http://kilianthoraval-server.eddi.cloud:8080/books");
const result = await response.json();
setData(result);
};

fetchData();

// Récupérez la liste "à lire" et la liste "lu" depuis le local storage
const toReadList = JSON.parse(localStorage.getItem("toReadList") || "[]");
const readList = JSON.parse(localStorage.getItem("readList") || "[]");

// Mettez à jour les états "toReadList" et "readList" avec les listes récupérées
setToReadList(toReadList);
setReadList(readList);
}, []);

// Filtrez les livres à partir des listes "à lire" et "lu"
const booksToRead = data.filter((book) => toReadList.includes(book.id));
const booksRead = data.filter((book) => readList.includes(book.id));

const responsive = {
0: { items: 1 },
568: { items: 4 },
1024: { items: 6 },
};

const itemsBookRead = booksRead.map((book) => (
  <div >
  <Link to={`/books/${book.id}`} className="link"> 
  <div key={book.id} className="mypage-carousel-item">
  
  <img className="photo" src={book.img} alt={book.title}/>
  </div>
  </Link>
  </div>
));

const itemsBookToRead = booksToRead.map((book) => (
<div >
<Link to={`/books/${book.id}`} className="link"> 
<div key={book.id} className="mypage-carousel-item">

<img className="photo" src={book.img} alt={book.title}/>
</div>
</Link>
</div>

));

return (
<div className="mypage-container">
<h1 className="bibliotheque-title">Ma Bibliothèque</h1>
<h2>Livres à lire</h2>
<AliceCarousel
     items={itemsBookRead}
     responsive={responsive}
     slideToIndex={currentIndex}
     dotsDisabled={true}
     buttonsDisabled={true}
   />
<h2>Livres lus</h2>
<AliceCarousel
     items={itemsBookToRead}
     responsive={responsive}
     slideToIndex={currentIndex}
     dotsDisabled={true}
     buttonsDisabled={true}
   />
   
</div>
);
};

export default Mypage;



