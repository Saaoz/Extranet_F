// Fichier Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';  // N'oubliez pas de mettre le bon chemin

const Header = ({ onChoiceChange, currentChoice, isFromProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/accueil');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='menu_header'>
        <HeaderButtons 
          onChoiceChange={onChoiceChange} 
          currentChoice={currentChoice} 
          isFromProject={isFromProject}
          handleBackToDashboard={handleBackToDashboard}
          handleLogout={handleLogout}
        />
      </div>
      <div className='menu_burger'>
        <button onClick={toggleMenu}>☰</button>
        {isMenuOpen && (
          <div className='menu_burger_btn'>
            <HeaderButtons 
              onChoiceChange={onChoiceChange} 
              currentChoice={currentChoice} 
              isFromProject={isFromProject}
              handleBackToDashboard={handleBackToDashboard}
              handleLogout={handleLogout}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
