import React from 'react';
import '../../style/Common.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Rechercher..." />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;