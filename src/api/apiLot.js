// Fichier "apiLot.js" dans le dossier "src/api"

const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les lots
async function getAllLots() {
    try {
        const response = await fetch(`${BASE_URL}/api/lot`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des lots :', error);
        throw error;
    }
}

// Récupérer un lot par ID
async function getLot(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du DCE avec l'ID ${id}:`, error);
        throw error;
    }
}


// Ajouter un nouveau lot
async function addLot(lot) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ lot })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du lot :', error);
        throw error;
    }
}

// Rechercher des lots par nom (recherche approximative)
async function searchLots(query) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot/recherche?nom=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la recherche des lots :', error);
      throw error;
    }
}

// Mettre à jour un lot existant
async function updateLot(id, nom) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du lot :', error);
        throw error;
    }
}

// Supprimer un lot
async function deleteLot(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du lot :', error);
        throw error;
    }
}

async function getLotsByProjetId(projetId) {
    try {
        const response = await fetch(`${BASE_URL}/api/lot/lot_projet_id/${projetId}`);
        
        if (response.status === 204) {
            return []; // Retourne un tableau vide si aucun lot n'a été trouvé
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erreur lors de la récupération des lots via projetid :', error);
        throw error; // Propagez l'erreur pour pouvoir la gérer ailleurs
    }
}

export {
    getAllLots,
    getLot,
    addLot,
    searchLots,
    updateLot,
    deleteLot,
    getLotsByProjetId,
};
