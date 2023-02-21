import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de connexion à ajouter ici
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom d'utilisateur :
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Mot de passe :
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginPage;