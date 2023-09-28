const BASE_URL = "http://localhost:8000"; // Définir l'URL de base de votre API ici

async function loginUser(credentials) {
    const response = await fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
    });

    const data = await response.json();

    return data;
}

async function logout() {
    const response = await fetch(`${BASE_URL}/api/user/logout`, {
        method: "POST",
        credentials: "include",
    });

    if (response.status !== 200) {
        return Promise.reject(new Error("Erreur lors de la déconnexion"));
    }

    const data = await response.json();
    return Promise.resolve(data);
}

export { loginUser, logout };
