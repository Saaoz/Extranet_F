import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/Common/SearchBar';
import TableauNeutre from '../components/Common/TableauNeutre';
import Header from '../components/Common/Header';
import { searchProjets, getAllProjets } from '../api/apiProjet';

import '../style/App.css';

const Dashboard_accueil = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentChoice, setCurrentChoice] = useState('listProjet');
  const [searchError, setSearchError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Nouvelle variable d'état pour la requête de recherche
  const [defaultProjects, setDefaultProjects] = useState([]); // Nouvelle variable d'état pour les projets par défaut
  const navigate = useNavigate();

  useEffect(() => {
    // Précharge les 5 derniers projets au chargement de la page
    async function preloadLatestProjects() {
      try {
        const allProjets = await getAllProjets();
        const latestProjects = allProjets.slice(-20).map((projet) => ({
          nom: projet.nom,
          description: projet.description,
        }));
        setSearchResults(latestProjects);
        setDefaultProjects(latestProjects); // Mettre à jour les projets par défaut
      } catch (error) {
        console.error('Erreur lors du chargement des projets :', error);
      }
    }

    preloadLatestProjects();
  }, []);

  // Nouvel effet pour surveiller les changements dans la requête de recherche
  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch(searchQuery);
    } else {
      setSearchResults(defaultProjects); // Remettre les résultats de la recherche aux projets par défaut lorsque la requête de recherche est vide
    }
  }, [searchQuery]); //sera appelée chaque fois que searchQuery change

  const handleChoiceChange = (choice) => {
    setCurrentChoice(choice);
  };

  const handleSearch = async (query) => {
    try {
      setSearchError(false);
      const data = await searchProjets(query);

      if (data.length === 0) {
        setSearchError(true);
      } else {
        setSearchResults(data.map((projet) => ({ nom: projet.nom, description: projet.description })));
      }
    } catch (error) {
      setSearchResults([]);
      setSearchError(true);
    }
  };

  const handleProjetClick = (id) => {
    navigate(`/dashboard_projet/${id}`);
  };

  const handleProjetAdd = () => {
    navigate('/projet/add');
  };

  return (
    <div>
      <Header
        onChoiceChange={handleChoiceChange}
        currentChoice={currentChoice}
      />

      {/* Affichez le SearchBar */}
      <SearchBar onSearch={setSearchQuery} /> {/* Utilisez setSearchQuery comme fonction de rappel pour la recherche */}

      {/* Affichez les résultats en fonction du choix actuel */}
      {currentChoice === 'listProjet' && !searchError && (
        <>
          {searchResults.length > 0 ? (
            <TableauNeutre
              tableData={searchResults.map((projet) => [projet.nom, projet.description])}
              headers={['Nom du projet', 'Description']}
              onRowClick={(id) => handleProjetClick(id)}
            />
          ) : (
            <p>Aucun projet avec ce nom n'a été trouvé.</p>
          )}
        </>
      )}

      {currentChoice === 'listDocument' && !searchError && (
        // Ajoutez ici le contenu spécifique pour le choix "listDocument"
        <p>Contenu pour la liste des documents.</p>
      )}

      {currentChoice === 'listNotice' && !searchError && (
        // Ajoutez ici le contenu spécifique pour le choix "listNotice"
        <p>Contenu pour la liste des notices.</p>
      )}

      {/* Gère l'affichage du message si la recherche n'a pas abouti */}
      {currentChoice === 'listProjet' && searchError && (
        <p>Une erreur s'est produite lors de la recherche. Veuillez réessayer plus tard.</p>
      )}

      {/* Ajoutez des conditions pour les autres choix si nécessaire */}
      {/* ... */}
      {currentChoice === 'listProjet' && (
        <button className='projet_add' onClick={handleProjetAdd}>Ajouter un projet</button>
      )}
    </div>
  );
};

export default Dashboard_accueil;
