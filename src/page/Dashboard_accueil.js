import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Common/SeachBar';
import TableauNeutre from '../components/Common/TableauNeutre';

const Dashboard_accueil = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentChoice, setCurrentChoice] = useState('listProjet');
  const navigate = useNavigate();

  const mockData = [
    { id: 1, nom: 'Projet 1', description: 'Description du projet 1' },
    { id: 2, nom: 'Projet 2', description: 'Description du projet 2' },
    { id: 3, nom: 'Projet 3', description: 'Description du projet 3' },
  ];

  const handleChoiceChange = (choice) => {
    setCurrentChoice(choice);
  };

  const handleSearch = (query) => {
    // Effectuez votre recherche ici en utilisant fetch ou d'autres méthodes
    // Mettez à jour les résultats de la recherche avec setSearchResults
    setSearchResults([...mockData]); // Remplacez mockData par vos données de recherche réelles
  };

  const handleProjetClick = (id) => {
    navigate(`/dashboard_projet/${id}`);
  };

  const handleProjetAdd = () => {
    navigate('/projet/add'); // Redirection vers la page de création de projet
  };

  return (
    <div>
      <header>
        {/* Ajoutez des boutons pour les différentes options */}
        <button
          onClick={() => handleChoiceChange('listProjet')}
          className={currentChoice === 'listProjet' ? 'active' : ''}
        >
          Liste des projets
        </button>
        <button
          onClick={() => handleChoiceChange('listDocument')}
          className={currentChoice === 'listDocument' ? 'active' : ''}
        >
          Liste des documents
        </button>
        <button
          onClick={() => handleChoiceChange('listNotice')}
          className={currentChoice === 'listNotice' ? 'active' : ''}
        >
          Liste des notices
        </button>
      </header>

      {/* Affichez le SearchBar */}
      <SearchBar onSearch={handleSearch} />

      {/* Affichez les résultats en fonction du choix actuel */}
      {currentChoice === 'listProjet' && (
        <TableauNeutre
          donnees={searchResults}
          entetes={['Projet', 'Description', 'Action']}
          onRowClick={(id) => handleProjetClick(id)}
        />
      )}
      {currentChoice === 'listDocument' && (
        <TableauNeutre
          donnees={searchResults}
          entetes={['Document', 'Description', 'Action']}
          onRowClick={() => {}}
        />
      )}
      {currentChoice === 'listNotice' && (
        <TableauNeutre
          donnees={searchResults}
          entetes={['Notice', 'Description', 'Action']}
          onRowClick={() => {}}
        />
      )}

      {currentChoice === 'listProjet' && (
        <button onClick={handleProjetAdd}>Ajouter un projet</button>
      )}
    </div>
  );
};

export default Dashboard_accueil;
