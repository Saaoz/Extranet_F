import React from 'react';
import { Link } from 'react-router-dom';
import "../../../style/auth.css"

const Reset = () => {
  return (
    <div className="container reset-container">
      <h1>Réinitialisation du mot de passe</h1>
      <form>
        <input type="email" placeholder="Adresse e-mail" />
        <button type="submit">Demander la réinitialisation du mot de passe</button>
      </form>
      <div>
        <Link to="/">Retour à la page de connexion</Link>
      </div>
    </div>
  );
};

export default Reset;