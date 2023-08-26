const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer toutes les situations
async function getAllSituations() {
    try {
        const response = await fetch(`${BASE_URL}/api/situations`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des situations :', error);
        throw error;
    }
}

// Récupérer une situation par ID
async function getSituation(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/situations/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de la situation avec l'ID ${id}:`, error);
        throw error;
    }
}

// Ajouter une nouvelle situation
async function addSituation(situation) {
    try {
        const response = await fetch(`${BASE_URL}/api/situations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(situation)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la situation :', error);
        throw error;
    }
}

// Mettre à jour une situation existante
async function updateSituation(id, situation) {
    try {
        const response = await fetch(`${BASE_URL}/api/situations/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(situation)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la situation :', error);
        throw error;
    }
}

// Supprimer une situation
async function deleteSituation(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/situations/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression de la situation :', error);
        throw error;
    }
}

export {
    getAllSituations,
    getSituation,
    addSituation,
    updateSituation,
    deleteSituation
};
