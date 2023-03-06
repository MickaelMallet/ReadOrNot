import React, { useState, useEffect } from 'react';

function SearchResults() {
  const [data, setData] = useState([]);

  const queryParameters = new URLSearchParams(window.location.search);
  const searchTerm = queryParameters.get("inputsearch");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://kilianthoraval-server.eddi.cloud:8080/search?inputsearch=${searchTerm}`);
      const result = await response.json();
      setData(result);
    };
    
    fetchData();
  }, [searchTerm]);

  return (
    <div className="search-results">
      {data.map((book) => (
        <div key={book.id} className="search-result">
          <div className="search-result-cover">
            <img src={book.img} alt="book cover" />
          </div>
          <div className="search-result-details">
            <h3>{book.title}</h3>
            {/* <p>Par: {book.author.firstname} {book.author.lastname}, Genre: {book.category.name}, {book.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

