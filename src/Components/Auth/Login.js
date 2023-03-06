import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.scss';
// import Signup from './Signup';
import ResetPassword from './ResetPassword';

function LoginPage() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showResetPassword, setShowResetPassword] = useState(false);

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleResetPasswordClick = () => {
setShowResetPassword(true);
};

const handleResetPasswordClose = () => {
setShowResetPassword(false);
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
<>
<div className="containerForm" id="containerForm">
<div className="form-container login-container">
<form onSubmit={handleSubmit} class="login-form">
<h1>Se connecter</h1>
<input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
<input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
<input type="submit" value="Se connecter" className="submit-btn" />
<button type="button" onClick={handleResetPasswordClick}>Mot de passe oublié ?</button>
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
{showResetPassword && <ResetPassword onClose={handleResetPasswordClose} />}
</>
);
}

export default LoginPage;