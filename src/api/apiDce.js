const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les DCE
async function getAllDce() {
    try {
        const response = await fetch(`${BASE_URL}/api/dce`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des DCE :', error);
        throw error;
    }
}

// Récupérer un DCE par ID
async function getDce(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/dce/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du DCE avec l'ID ${id}:`, error);
        throw error;
    }
}

// Ajouter un nouveau DCE
async function addDce(dce) {
    try {
        const response = await fetch(`${BASE_URL}/api/dce`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dce)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du DCE :', error);
        throw error;
    }
}

// Mettre à jour un DCE existant
async function updateDce(id, dce) {
    try {
        const response = await fetch(`${BASE_URL}/api/dce/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dce)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du DCE :', error);
        throw error;
    }
}

// Supprimer un DCE
async function deleteDce(id) {
    try {
        const response = await fetch(`${BASE_URL}/api/dce/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du DCE :', error);
        throw error;
    }
}

export {
    getAllDce,
    getDce,
    addDce,
    updateDce,
    deleteDce
};
