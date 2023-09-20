import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/apiUser';  
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const credentials = { email, password };
  
    const data = await loginUser(credentials);
  
    if (data.token) {
      localStorage.setItem('token', data.token);
      toast.success('Connexion réussie !');
      navigate('/accueil');
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="container login-container auth_part">
      <h1>Connexion</h1>
      <form className='form-login' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">
          Connexion
        </button>
      </form>
      <div className='login-redi'>
        <Link to="/sign_in" className="link-hover">S'inscrire</Link>
        <Link to="/reset" className="link-hover">Mot de passe oublié</Link>
      </div>
    </div>
  );
};

export default Login;
