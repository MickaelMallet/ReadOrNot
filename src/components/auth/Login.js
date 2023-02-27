import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss';
// import Signup from './Signup';

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
<div className="containerForm" id="containerForm">
	<div className="form-container sign-in-container">
    <form onSubmit={handleSubmit} class="login-form">
			<h1>Se connecter</h1>
			<input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
			<input type="submit" value="Se connecter" className="submit-btn" />
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p><a href='/signup'>Pas encore de compte ?</a></p>
			</div>
		</div>
	</div>
</div>

  );
}

export default LoginPage;
{/* <div class="login-container">
  <div class="form-container">
    <h1 class="login-title">Connexion</h1>
    <form onSubmit={handleSubmit} class="login-form">
      <div class="input-field">
        <input type="text" value={email} onChange={handleEmailChange} />
        <label>Email</label>
      </div>
      <div class="input-field">
        <input type="password" value={password} onChange={handlePasswordChange} />
        <label>Mot de passe</label>
      </div>
      <input type="submit" value="Se connecter" class="submit-btn" />
    </form>
  </div>
</div> */}