// Fichier "apiProjet.js" dans le dossier "src/api"

const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

// Récupérer tous les projets
async function getAllProjets() {
    try {
        const res = await fetch(`${BASE_URL}/api/projets`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
        throw error;
    }
}

// Ajouter un nouveau projet
async function addProjet(nom) {
    try {
        const res = await fetch(`${BASE_URL}/api/projets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom })
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du projet :', error);
        throw error;
    }
}

// Rechercher des projets par nom (recherche approximative)
async function searchProjets(query) {
    try {
        const res = await fetch(`${BASE_URL}/api/projets/recherche?nom=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error('Erreur lors de la récupération des données.');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la recherche des projets :', error);
      throw error;
    }
  }

// Mettre à jour un projet existant
async function updateProjet(id, nom) {
    try {
        const res = await fetch(`${BASE_URL}/api/projets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom })
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du projet :', error);
        throw error;
    }
}

// Supprimer un projet
async function deleteProjet(id) {
    try {
        const res = await fetch(`${BASE_URL}/api/projets/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du projet :', error);
        throw error;
    }
}

export {
        getAllProjets,
        addProjet,
        searchProjets,
        updateProjet,
        deleteProjet
    };

