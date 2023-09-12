const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer les informations de marché et de lot
async function getMarcheAndLotInfo(projetId, nom) {
    try {
        const response = await fetch(`${BASE_URL}/api/marche_lot/${projetId}/${nom}`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations :', error);
        throw error;
    }
}

export {
    getMarcheAndLotInfo
};
