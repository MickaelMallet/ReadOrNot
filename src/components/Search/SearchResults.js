import React from 'react';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { searchTerm } = useParams(); // récupère le terme de recherche dans l'URL

  // TODO: récupérer les résultats de la recherche depuis la BDD

  return (
    <div>
      <h1>Résultats de la recherche pour "{searchTerm}"</h1>
      {/* TODO: afficher les résultats de la recherche */}
    </div>
  );
}

export default SearchResults;
