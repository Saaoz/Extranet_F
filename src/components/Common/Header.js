// Fichier "Header.js"

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onChoiceChange, currentChoice }) => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/accueil');
  };

  const handleLogout = () => {
    navigate('/'); // Ici, nous supposons que la page de connexion est à la racine
  };

  return (
    <header>
      <div className='menu_header'>
        <button onClick={handleBackToDashboard}>HOME</button>
        <button
          onClick={() => onChoiceChange('listProjet')}
          className={currentChoice === 'listProjet' ? 'active' : ''}
        >
          Liste des projets
        </button>
        <button
          onClick={() => onChoiceChange('listDocument')}
          className={currentChoice === 'listDocument' ? 'active' : ''}
        >
          Liste des documents
        </button>
        <button
          onClick={() => onChoiceChange('listNotice')}
          className={currentChoice === 'listNotice' ? 'active' : ''}
        >
          Liste des notices
        </button>

        <button onClick={handleLogout}>Se déconnecter</button>
      </div>
    </header>
  );
};

export default Header;
