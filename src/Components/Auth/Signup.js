import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Signup.scss';

function Signup(props) {
const navigate = useNavigate();
const [pseudo, setPseudo] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');


const handlePseudoChange = (event) => {
setPseudo(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};


const handleEmailChange = (event) => {
setEmail(event.target.value);
};


const handleSubmit = async (event) => {
  event.preventDefault();

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        pseudo,
        email,
        password })
  };

  try {
      const response = await fetch('http://kilianthoraval-server.eddi.cloud:8080/signup', requestOptions);
      const data = await response.json();

      console.log('Response received:', data);

      if (response.ok) {
        
          navigate('/login');
      } else {
          alert(data.error);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Erreur de communication avec le serveur');
  }
};


  return (
    <div className="containerForm" id="containerForm">
    <div className="form-container sign-in-container">
    <form onSubmit={handleSubmit} className="signup-form">
    <h1>Inscription</h1>
    <input type="text" placeholder="Pseudo" value={pseudo} onChange={handlePseudoChange} />
    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
    {/* <input type="email" placeholder="Email confirm" value={emailConfirm} onChange={handleEmailConfirmChange} /> */}
    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
    {/* <input type="password" placeholder="Password confirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} /> */}
    <input type="submit" value="S'inscrire" className="submit-btn" />
    </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
    <div className="overlay-panel overlay-right">
    <h1>Déjà inscrit ?</h1>
    <p><a href='/login'>Se connecter</a></p>
    </div>
    </div>
    </div>
    </div>
    );
    }
    
    export default Signup;
