import React from 'react';

const HeaderButtons = ({ onChoiceChange, currentChoice, isFromProject, handleBackToDashboard, handleLogout }) => {
  return (
    <>
      <button onClick={handleBackToDashboard}>HOME</button>
      <button
        onClick={() => onChoiceChange('listProjet')}
        className={currentChoice === 'listProjet' ? 'active' : ''}
      >
        {isFromProject ? 'Liste des Lots' : 'Liste des projets'}
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
    </>
  );
};

export default HeaderButtons;
