import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    };

    console.log('Sending request:', requestOptions);

    const response = await fetch('http://kilianthoraval-server.eddi.cloud:8080/reset_password', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Response received:', data);

        if (data.success) {
          // Le lien de réinitialisation a été envoyé par email
          alert('Un lien pour réinitialiser votre mot de passe a été envoyé à votre adresse email.');
          navigate('/');
        } else {
          // L'envoi du lien de réinitialisation a échoué
          alert(data.error);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="containerForm" id="containerForm">
      <div className="form-container reset-password-container">
        <form onSubmit={handleSubmit} class="reset-password-form">
          <h1>Réinitialisation du mot de passe</h1>
          <p>Entrez l'adresse email associée à votre compte et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
          <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="submit" value="Envoyer" className="submit-btn" />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
