import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
  return (
    <div className="container login-container auth_part">
      <h1>Connexion</h1>
      <form>
        <input type="text" placeholder="Pseudo" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">
          <Link to="/accueil" style={{ textDecoration: 'none', color: 'inherit' }}>
            Connexion
          </Link>
        </button>
      </form>
      <div>
        <Link to="/sign_in">S'inscrire</Link>
        <Link to="/reset">Mot de passe oublié</Link>
      </div>
    </div>
  );
};

export default Login;
