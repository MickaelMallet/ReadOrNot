import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResults';
import './SearchBarStyle.scss';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://kilianthoraval-server.eddi.cloud:8080/search?inputsearch=${searchTerm}`);
      const results = await response.json();
      setSearchResults(results);
      setSearchTerm('');
      // Modifier l'URL avec la nouvelle valeur de searchTerm
      navigate(`/search?inputsearch=${searchTerm}`);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Rechercher un livre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='wrapper'>
          <button className="search-btn" type="submit">Rechercher</button>
        </div>
      </form>
      {searchResults && <SearchResults />}
    </div>
  );
}

export default SearchBar;
