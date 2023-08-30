import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import SearchBar from '../components/Common/SearchBar';
import SousTableau from '../components/Common/SousTableau';
import '../style/App.css';
import '../style/Common.css';

//importation des routes api
import { getMarcheAndLotInfo } from '../api/apimarcheAndLot'; 
import {getLot} from '../api/apiLot';
import {getMarche} from '../api/apiMarche';
import { getSituationByMarcheId } from '../api/apiSituation';

const Dashboard_Marche = () => {
  const [lotInfo, setLotInfo] = useState(null);
  const [marcheInfo, setMarcheInfo] = useState(null);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [situations, setSituations] = useState([]);


  const { projetId, nom } = useParams(); 

  useEffect(() => {
    async function fetchInfo() {
      try {
        const jointureInfo = await getMarcheAndLotInfo(projetId, nom); 
        // console.log("jointureInfo:", jointureInfo); // Debug
        
        const lotId = jointureInfo[0]?.lot_id;  // Accédez au premier élément du tableau
        const marcheId = jointureInfo[0]?.marche_id;  // Accédez au premier élément du tableau

        // Nouvelle partie pour récupérer les situations
        const situationsData = await getSituationByMarcheId(marcheId);
        if (situationsData) {
          setSituations(situationsData);
        } else {
          console.log('Aucune situation trouvée pour ce marché id');
        }  
        // console.log("lotId:", lotId); // Debug
        // console.log("marcheId:", marcheId); // Debug
    
        if (lotId && marcheId) {
          const infoLot = await getLot(lotId); 
          // console.log('Info Lot:', infoLot);  // Debug
          setLotInfo(infoLot);
        
          const infoMarche = await getMarche(marcheId);
          // console.log('Info Marché:', infoMarche);  // Debug
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
      <SearchBar onSearch={setSearchQuery} />
      {error && (
        <p>Une erreur s'est produite lors de la récupération des informations. Veuillez réessayer plus tard.</p>
      )}

      {lotInfo && (
        <>
          <h2>Informations du marché</h2>
          <p>Nom du marché: {marcheInfo?.nom}</p>
          <p>Description du lot: {lotInfo.description}</p>
          <p>Montant: {lotInfo.montant}</p>
          <p>Date de début: {lotInfo.date_debut}</p>
          <p>Date de fin: {lotInfo.date_fin}</p>
        </>
      )}
<div className="tableau-container">
      {situations && Array.from({length: 3}, (_, i) => (
        <div className='tableau-wrapper' key={i}>
          <h3>Situations</h3>
          <SousTableau
            headers={["Ent", "Montant", "Date", "Etat"]}
            data={situations}
            handleClick={item => console.log(item)}
          />
        </div>
      ))}
    </div>
    
    {!lotInfo && !marcheInfo && !error && (
      <p>Chargement des informations...</p>
    )}
  </div>
  );
};

export default Dashboard_Marche;
