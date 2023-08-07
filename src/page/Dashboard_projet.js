// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Header from '../components/Common/Header';
// import TableauNeutre from '../components/Common/TableauNeutre';
// import { getProjetDetails } from '../api/apiProjet'; 

// function Dashboard_projet() {
//   const { id } = useParams(); 
//   const [projetDetails, setProjetDetails] = useState({});
//   const [currentChoice, setCurrentChoice] = useState('DCE');

//   useEffect(() => {
//     async function loadProjetDetails() {
//       try {
//         const details = await getProjetDetails(id); 
//         setProjetDetails(details);
//       } catch (error) {
//         console.error('Erreur lors du chargement des détails du projet :', error);
//       }
//     }

//     loadProjetDetails();
//   }, [id]);

//   const handleChoiceChange = (choice) => {
//     setCurrentChoice(choice);
//   };

//   return (
//     <div>
//       <Header
//         onChoiceChange={handleChoiceChange}
//         currentChoice={currentChoice}
//       />

//       {/* Affichage des détails du projet */}
//       <div>
//         <h2>{projetDetails.nom}</h2>
//         <p>{projetDetails.description}</p>
//       </div>

//       {currentChoice === 'DCE' && (
//         <TableauNeutre
//           tableData={/* Adapter les données spécifiques à DCE pour ce projet */}
//           headers={['Titre', 'Contenu']}
//           onRowClick={/* fonction de rappel si nécessaire */}
//         />
//       )}
      
//       {currentChoice === 'Marchés' && (
//         <TableauNeutre
//           tableData={/* Adapter les données spécifiques à Marchés pour ce projet */}
//           headers={['Titre', 'Contenu']}
//           onRowClick={/* fonction de rappel si nécessaire */}
//         />
//       )}
      
//       {currentChoice === 'DET' && (
//         <TableauNeutre
//           tableData={/* Adapter les données spécifiques à DET pour ce projet */}
//           headers={['Titre', 'Contenu']}
//           onRowClick={/* fonction de rappel si nécessaire */}
//         />
//       )}
//     </div>
//   );
// }

// export default Dashboard_projet;
