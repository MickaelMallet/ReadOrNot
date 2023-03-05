import React, { useState, useEffect } from 'react';

function SearchResults({ searchTerm }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // appel de l'API avec fetch 
    fetch(`http://kilianthoraval-server.eddi.cloud:8080/search?inputsearch=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  return (
    <div className="search-results">
      {books.map((book) => (
        <div key={book.id} className="search-result">
          <div className="search-result-cover">
            <img src={book.img} alt="book cover" />
          </div>
          <div className="search-result-details">
            <h3>{book.title}</h3>
            <p>Par: {book.author.firstname} {book.author.lastname}, Genre: {book.category.name}, {book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
