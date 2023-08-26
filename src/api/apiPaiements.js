const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les paiements
async function getAllPaiements() {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des paiements :', error);
        throw error;
    }
}

// Récupérer un paiement par ID
async function getPaiement(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du paiement avec l'ID ${id}:`, error);
        throw error;
    }
}

// Ajouter un nouveau paiement
async function addPaiement(paiement) {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paiement)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du paiement :', error);
        throw error;
    }
}

// Mettre à jour un paiement existant
async function updatePaiement(id, paiement) {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paiement)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du paiement :', error);
        throw error;
    }
}

// Supprimer un paiement
async function deletePaiement(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du paiement :', error);
        throw error;
    }
}

// Récupérer les paiements par `marche_id`
async function getPaiementsByMarcheId(marcheId) {
    try {
        const response = await fetch(`${BASE_URL}/api/paiements/marche_id/${marcheId}`);

        if (response.status === 204) {
            return []; // Retourne un tableau vide si aucun paiement n'a été trouvé
        }

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des paiements via marcheId :', error);
        throw error; // Propagez l'erreur pour pouvoir la gérer ailleurs
    }
}

export {
    getAllPaiements,
    getPaiement,
    addPaiement,
    updatePaiement,
    deletePaiement,
    getPaiementsByMarcheId
};
