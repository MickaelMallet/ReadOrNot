import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBarStyle.scss'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`); // redirige vers la page de recherche avec le terme de recherche dans l'URL
    setSearchTerm('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        className="search-input"
        type="text" 
        placeholder="Rechercher un livre" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button className="search-btn" type="submit">Rechercher</button>
    </form>
  );
}

export default SearchBar;