import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails({ match }) {
  const [book, setBook] = useState(null);

  const { id } = useParams();

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
    </div>
  );
}

export default BookDetails;
