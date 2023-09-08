import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value); // mettre à jour la valeur de l'input
    onSearch(value); // déclencher la recherche à chaque fois que la valeur change
  };

  return (
    <div className="search-bar">
      <input className='input_search'
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={handleInputChange} // mise à jour de la valeur de l'input et déclenchement de la recherche chaque fois que l'utilisateur tape quelque chose
      />
      <button type="submit" onClick={() => onSearch(query)}>
        <i className="btn_search">recherche</i>
      </button>
    </div>
  );
};

export default SearchBar;
