import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMarcheByLotNomAndProjetId } from '../api/apiMarche'; // La fonction API à créer

const Dashboard_Marche = () => {
  const { projetId, lotNom } = useParams();
  const [marches, setMarches] = useState([]);
  
  useEffect(() => {
    async function preloadMarches() {
      try {
        const data = await getMarcheByLotNomAndProjetId(lotNom, projetId);
        
        if (data.length === 0) {
          // Gérer le cas où il n'y a pas de marchés. Par exemple, afficher un message.
        } else {
          setMarches(data);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des marchés :', error);
        // Vous pouvez toujours définir une erreur si nécessaire.
      }
    }

    preloadMarches();
  }, [lotNom, projetId]);

  return (
    <div>
      <h1>Tableau de bord du Marché</h1>
      <h2>ID du Projet : {projetId}</h2>
      <h2>Nom du Lot : {lotNom}</h2>
      
      {/* Ici, vous pouvez utiliser les données dans "marches" pour afficher ce que vous souhaitez */}
    </div>
  );
};

export default Dashboard_Marche;
