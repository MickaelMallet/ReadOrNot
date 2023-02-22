import React, { useState } from 'react';
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
    <div className="login-container">
    <h1>Connexion</h1>
    <form onSubmit={handleSubmit}className="login-form">
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
      <input type="submit" value="Se connecter" />
    </form>
    </div>
  );
}

export default LoginPage;