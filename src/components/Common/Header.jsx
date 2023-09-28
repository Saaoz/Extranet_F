import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';
import { logout } from '../../api/apiUser'; 
import { toast } from 'react-toastify';

const Header = ({ onChoiceChange, currentChoice, isFromProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/accueil');
  };

  const handleLogout = async () => {
    try {
      await logout(); // Si la déconnexion réussit, aucune erreur n'est levée
      toast.success('Déconnexion réussie !');
      navigate('/'); // redirigez l'utilisateur 
    } catch (error) {
      console.error(error); 
      toast.error('Une erreur s’est produite lors de la déconnexion.'); 
    }
  };
// toggle du menu burger

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

// toggle du menu profil

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // handle de redirection vers le profil

  const handleProfileClick = () => {
    navigate('/profilePage', { state: { scrollTo: 'profile-section' } });
  };
  
  const handleSettingsClick = () => {
    navigate('/profilePage', { state: { scrollTo: 'settings-section' } });
  };

  return (
    <header>
      <div className='menu_header'>
        <HeaderButtons 
          onChoiceChange={onChoiceChange} 
          currentChoice={currentChoice} 
          isFromProject={isFromProject}
          handleBackToDashboard={handleBackToDashboard}
        />
        <div className='menu_profil'>
        <button onClick={toggleProfileMenu}>Profile Image</button>
        {isProfileMenuOpen && (
          <div className="profile-dropdown">
            <button onClick={handleProfileClick}>Profil</button>
            <button onClick={handleSettingsClick}>Paramètres</button>
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        )}
        </div>
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
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
