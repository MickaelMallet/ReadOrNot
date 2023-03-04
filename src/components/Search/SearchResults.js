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
        <div key={book.id} className="mypage-carousel-item">
          <img src={book.img} alt={book.title}/>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;