import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './bookDetail.scss';

function BookDetails({ match }) {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  const handleToReadClick = () => {
    // Mettez à jour la liste "à lire" dans le local storage en ajoutant le livre
    const toReadList = JSON.parse(localStorage.getItem("toReadList") || "[]");
    localStorage.setItem(
      "toReadList",
      JSON.stringify([...toReadList, book.id])
    );
  };

  const handleReadClick = () => {
    // Mettez à jour la liste "lu" dans le local storage en ajoutant le livre
    const readList = JSON.parse(localStorage.getItem("readList") || "[]");
    localStorage.setItem(
      "readList",
      JSON.stringify([...readList, book.id])
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://kilianthoraval-server.eddi.cloud:8080/book/${id}`);
      const data = await response.json();
      setBook(data);
    };
  
    fetchData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className='bookBox'>
      <h2>{book.title}</h2>
    <div className='bookSubBox'>

      <img src={book.img} alt={book.title} />
      <div className='descriptionBox'>
      <p className='description'>{book.description}</p>
      <p className='author'>Auteur : {book.author.firstname} {book.author.lastname}</p>
      <p className='type'>Genre : {book.category.name}</p>
      <div className='buttonClick'>
      <button className='toRead' onClick={handleToReadClick}>A lire 📖 </button>
      <button className='Read' onClick={handleReadClick}>Lu 📚 </button>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default BookDetails;
