const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les avenants
async function getAllAvenants() {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des avenants :', error);
        throw error;
    }
}

// Récupérer un avenant par ID
async function getAvenant(id) {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'avenant avec l'ID ${id}:`, error);
        throw error;
    }
}

// Ajouter un nouvel avenant
async function addAvenant(avenant) {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avenant)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'avenant :', error);
        throw error;
    }
}

// Mettre à jour un avenant existant
async function updateAvenant(id, avenant) {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avenant)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'avenant :', error);
        throw error;
    }
}

// Supprimer un avenant
async function deleteAvenant(id) {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'avenant :', error);
        throw error;
    }
}

async function getAvenantByMarcheId(marche_id) {
    try {
        const res = await fetch(`${BASE_URL}/api/avenants/?marche_id=${marche_id}`);
        if (!res.ok) {
            console.error(`Erreur réseau avec le statut ${res.status}`);
            throw new Error('Erreur réseau');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de la situation avec l'ID ${marche_id}:`, error);
        throw error;
    }
}

export {
    getAllAvenants,
    getAvenant,
    addAvenant,
    updateAvenant,
    deleteAvenant,
    getAvenantByMarcheId
};
