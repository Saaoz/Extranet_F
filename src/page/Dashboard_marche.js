import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import SearchBar from '../components/Common/SearchBar';
import SousTableau from '../components/Common/SousTableau';
import Panel from '../components/Common/Panel';
import '../style/App.css';

// Importation des routes API
import { getMarcheAndLotInfo } from '../api/apimarcheAndLot';
import { getLot } from '../api/apiLot';
import { getMarche } from '../api/apiMarche';
import { getSituationByMarcheId } from '../api/apiSituation';
import { getAvenantByMarcheId } from '../api/apiAvenant';
import { getPaiementsByMarcheId } from '../api/apiPaiements';


const Dashboard_Marche = () => {
  const [lotInfo, setLotInfo] = useState(null);
  const [marcheInfo, setMarcheInfo] = useState(null);
  const [error, setError] = useState(false);
  const [situations, setSituations] = useState([]);
  const [avenants, setAvenants] = useState([]);
  const [paiements, setPaiements] = useState([]);
  const { projetId, nom } = useParams();
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    async function fetchInfo() {
      try {
        const jointureInfo = await getMarcheAndLotInfo(projetId, nom);
        const lotId = jointureInfo[0]?.lot_id;
        const marcheId = jointureInfo[0]?.marche_id;
        
        // Récupérer le nom du marché
        const marcheData = await getMarche(marcheId);
        setMarcheInfo(marcheData);
        
        setSituations(await getSituationByMarcheId(marcheId));
        setAvenants(await getAvenantByMarcheId(marcheId));
        setPaiements(await getPaiementsByMarcheId(marcheId));

        if (lotId) {
          const lotData = await getLot(lotId);
          setLotInfo(lotData);
        } else {
          setError(true);
        }

      } catch (err) {
        setError(true);
      }
    }
    fetchInfo();
  }, [projetId, nom])

  let montantActuel = lotInfo?.montant;
  if (avenants.length > 0) {
    const avenantValide = avenants.find(avenant => avenant.etat === 'valide');
    if (avenantValide) {
      montantActuel = avenantValide.nouveau_montant;
    }
  }

  return (
<div>
      <Header isFromProject={false} />
      <SearchBar onSearch={e => setSearchQuery(e.target.value)} />
      {error && (
        <p>Une erreur s'est produite lors de la récupération des informations. Veuillez réessayer plus tard.</p>
      )}
      {lotInfo && marcheInfo && (
    <Panel marcheInfo={marcheInfo} lotInfo={lotInfo} montantActuel={montantActuel} />
)}
<div className="tableau-container">
      {situations && (
        <div className='tableau-wrapper'>
          <h3>Situations</h3>
          <SousTableau
            headers={["Ent", "Montant", "Date", "Etat"]} // Header modifiable en fonction des données
            data={situations}
            handleClick={item => console.log(item)}
          />
        </div>
      )}
      {avenants && (
        <div className='tableau-wrapper'>
          <h3>Avenants</h3>
          <SousTableau
            headers={["Ent", "Nouveau_Montant", "Date", "Etat"]}  // Header modifiable en fonction des données
            data={avenants}
            handleClick={item => console.log(item)}
          />
        </div>
      )}
      {paiements && (
        <div className='tableau-wrapper'>
          <h3>Paiements</h3>
          <SousTableau
            headers={["Reference", "Montant_payer", "Date", "Etat"]} // Header modifiable en fonction des données
            data={paiements}
            handleClick={item => console.log(item)}
          />
        </div>
      )}
    </div>
    
    {!lotInfo && !marcheInfo && !error && (
      <p>Chargement des informations...</p>
    )}
  </div>
  );
};

export default Dashboard_Marche;
