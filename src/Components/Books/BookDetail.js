import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails({ match }) {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  const handleToReadClick = () => {
    // Met à jour la liste "à lire" dans le local storage en ajoutant le livre
    const toReadList = JSON.parse(localStorage.getItem("toReadList") || "[]");
    localStorage.setItem(
      "toReadList",
      JSON.stringify([...toReadList, book.id])
    );
  };

  const handleReadClick = () => {
    // Met à jour la liste "lu" dans le local storage en ajoutant le livre
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
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title} />
      <p>{book.description}</p>
      <p>Auteur : {book.author.firstname} {book.author.lastname}</p>
      <p>Genre : {book.category.name}</p>
      <button onClick={handleToReadClick}>A lire</button>
      <button onClick={handleReadClick}>Lu</button>
    </div>
  );
}

export default BookDetails;
