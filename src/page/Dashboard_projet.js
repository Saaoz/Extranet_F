import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../components/Common/SearchBar';
import Header from '../components/Common/Header';
import { searchLots, getLotsByProjetId} from '../api/apiLot';
import Tableau from '../components/Common/TableauNeutre';  // Assurez-vous que le chemin d'importation est correct

import '../style/App.css';

const Dashboard_Projet = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentChoice, setCurrentChoice] = useState('listLot');
  const [searchError, setSearchError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [defaultLots, setDefaultLots] = useState([]);

  const navigate = useNavigate();

  const { projetId } = useParams();



  useEffect(() => {
    async function preloadLotsByProjet() {
      try {
          const lots = await getLotsByProjetId(projetId); 
          
          if (lots.length === 0) {
              // Gérer le cas où il n'y a pas de lots. Par exemple, afficher un message.
          } else {
              setSearchResults(lots);
              setDefaultLots(lots);
          }
  
      } catch (error) {
          console.error('Erreur lors du chargement des lots :', error);
          setSearchError(true); // Vous pouvez toujours définir une erreur si nécessaire.
      }
  }

    preloadLotsByProjet();
}, [projetId]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch(searchQuery);
    } else {
      setSearchResults(defaultLots);
    }
  }, [searchQuery]);

  const handleChoiceChange = (choice) => {
    setCurrentChoice(choice);
  };

  const handleSearch = async (query) => {
    try {
      setSearchError(false);
      const data = await searchLots(query);

      if (data.length === 0) {
        setSearchError(true);
      } else {
        setSearchResults(data.map((lot) => ({ nom: lot.nom, description: lot.description })));
      }
    } catch (error) {
      setSearchResults([]);
      setSearchError(true);
    }
  };

  const handleLotClick = (lot) => {
    navigate(`/marche/${projetId}/${lot.nom}`);
  };
  

  return (
    <>
      <Header isFromProject={true} onChoiceChange={handleChoiceChange} currentChoice={currentChoice} />
      <SearchBar onSearch={setSearchQuery} />
      
      {currentChoice === 'listLot' && !searchError && (
      <Tableau headers={['Nom', 'Description']} data={searchResults} handleClick={handleLotClick} />
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
          {currentChoice === 'listLot' && searchError && (
            <p>Une erreur s'est produite lors de la recherche. Veuillez réessayer plus tard.</p>
          )}
    </>
  );
};

export default Dashboard_Projet;
