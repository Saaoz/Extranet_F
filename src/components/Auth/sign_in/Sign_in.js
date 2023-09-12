import React from 'react';
import { Link } from 'react-router-dom';
// import "../../../style/auth.css"

const Sign_in = () => {
  return (
    <div className="container sign-in-container ">
      <h1>Inscription</h1>
      <form className='form-sign'>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Mobile" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Validation du mot de passe" />
        <textarea placeholder="Description" />
        <div className='radio-label'>
          <label>
            <input type="radio" name="role" value="ENT" /> ENT
          </label>
          <label>
            <input type="radio" name="role" value="MOA" /> MOA
          </label>
          <label>
            <input type="radio" name="role" value="ARCHI" /> ARCHI
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <div>
        <Link to="/">Retour à la page de connexion</Link>
      </div>
    </div>
  );
};

export default Sign_in;
