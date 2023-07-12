import React from 'react'
import TableauNeutre from '../components/Common/TableauNeutre';

function Dashboard_accueil() {
  const projets = [
    ['Projet 1', 'Description 1', 'Date 1'],
    ['Projet 2', 'Description 2', 'Date 2'],
    // ...
  ];

  const marches = [
    ['Marché 1', 'Description 1', 'Date 1'],
    ['Marché 2', 'Description 2', 'Date 2'],
    // ...
  ];

  return (
    <div>
      <h2>Liste des projets</h2>
      <TableauNeutre donnees={projets} entetes={['Projet', 'Description', 'Date']} />

      <h2>Liste des marchés</h2>
      <TableauNeutre donnees={marches} entetes={['Marché', 'Description', 'Date']} />
    </div>
  );
};

export default Dashboard_accueil