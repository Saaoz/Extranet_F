const BASE_URL = 'http://localhost:8000'; // Définir l'URL de base de votre API ici

async function loginUser(credentials) {
    const response = await fetch(`${BASE_URL}/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    const data = await response.json();

    return data;
}


export {
    loginUser
}