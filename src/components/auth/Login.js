import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    };
  
    console.log('Sending request:', requestOptions);
  
    const response = await fetch('http://kilianthoraval-server.eddi.cloud:8080/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Response received:', data);
  
        if (data.token) {
          localStorage.setItem('token', data.token)
          navigate('/');
        } else {
          // Authentification échouée
          alert(data.token);
        }
      })
      .catch(error => console.error('Error:', error));
  };
  
  return (
    <div className="login-container">
      <h1 className="login-title">Connexion</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Nom d'utilisateur :
          <input type="text" value={email} onChange={handleEmailChange} />
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