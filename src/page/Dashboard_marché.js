import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import { getMarcheAndLotInfo } from '../api/apimarcheAndLot'; // Importez le fichier apiJoin.js
import {getLot} from '../api/apiLot';
import {getMarche} from '../api/apiMarche';

const Dashboard_Marche = () => {
  const [lotInfo, setLotInfo] = useState(null);
  const [marcheInfo, setMarcheInfo] = useState(null);
  const [error, setError] = useState(false);

  const { projetId, nom } = useParams(); 

  useEffect(() => {
    async function fetchInfo() {
      try {
        const jointureInfo = await getMarcheAndLotInfo(projetId, nom); 
        // console.log("jointureInfo:", jointureInfo); // Debug
        
        const lotId = jointureInfo[0]?.lot_id;  // Accédez au premier élément du tableau
        const marcheId = jointureInfo[0]?.marche_id;  // Accédez au premier élément du tableau
        
        // console.log("lotId:", lotId); // Debug
        // console.log("marcheId:", marcheId); // Debug
    
        if (lotId && marcheId) {
          const infoLot = await getLot(lotId); 
          setLotInfo(infoLot);
        
          const infoMarche = await getMarche(marcheId); 
          setMarcheInfo(infoMarche);
        } else {
          console.error("lotId ou marcheId est undefined");
        }
        
      } catch (err) {
        console.error('Erreur lors de la récupération des informations :', err);
        setError(true);
      }
    }
  
    fetchInfo();
  }, [projetId, nom]);

  return (
    <div>
      <Header isFromProject={false} />

      {error && (
        <p>Une erreur s'est produite lors de la récupération des informations. Veuillez réessayer plus tard.</p>
      )}

      {lotInfo && (
        <>
          <h2>Informations sur le lot</h2>
          <p>Nom du lot: {lotInfo.nom}</p>
          <p>Description du lot: {lotInfo.description}</p>
          <p>Montant: {lotInfo.montant}</p>
          <p>Date de début: {lotInfo.date_debut}</p>
          <p>Date de fin: {lotInfo.date_fin}</p>
        </>
      )}



      {!lotInfo && !marcheInfo && !error && (
        <p>Chargement des informations...</p>
      )}
    </div>
  );
};

export default Dashboard_Marche;
