import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  
  return (
    <div className="container login-container auth_part">
      <h1>Connexion</h1>
      <form className='form-login'>
        <input type="text" placeholder="Pseudo" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">
          <Link to="/accueil"  className="link-hover">
            Connexion
          </Link>
        </button>
      </form>
      <div className='login-redi'>
        <Link to="/sign_in" className="link-hover" >S'inscrire</Link>
        <Link to="/reset" className="link-hover" >Mot de passe oublié</Link>
      </div>
    </div>
  );
};

export default Login;
