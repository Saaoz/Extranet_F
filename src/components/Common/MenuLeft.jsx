// Fichier "MenuLeft.js"

import React from 'react';
import { Link } from 'react-router-dom';

const MenuLeft = () => {
  return (
    <div className="menu-left">
      <Link to="/projet/dce">DCE</Link>
      <Link to="/projet/marches">Marchés</Link>
      <Link to="/projet/det">DET</Link>
      <Link to="/projet/doc_marches">Documents marchés</Link>
    </div>
  );
};

export default MenuLeft;
