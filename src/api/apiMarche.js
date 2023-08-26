const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les marchés
async function getAllMarches() {
    try {
        const response = await fetch(`${BASE_URL}/api/marches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des marchés :', error);
        throw error;
    }
}

// Récupérer un marché par ID
async function getMarche(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/marches/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du marché avec l'ID ${id}:`, error);
        throw error;
    }
}

// Ajouter un nouveau marché
async function addMarche(marche) {
    try {
        const response = await fetch(`${BASE_URL}/api/marches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(marche)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du marché :', error);
        throw error;
    }
}

// Mettre à jour un marché existant
async function updateMarche(id, marche) {
    try {
        const response = await fetch(`${BASE_URL}/api/marches/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(marche)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du marché :', error);
        throw error;
    }
}

// Supprimer un marché
async function deleteMarche(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/marches/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du marché :', error);
        throw error;
    }
}

export {
    getAllMarches,
    getMarche,
    addMarche,
    updateMarche,
    deleteMarche
};
