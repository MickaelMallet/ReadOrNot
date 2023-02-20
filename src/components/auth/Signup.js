import React, { useState } from 'react';
import './Signup.scss';

function RegistrationForm() {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter ici la logique pour traiter les données du formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pseudo:
        <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirmation du mot de passe:
        <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
      </label>
      <br />
      <label>
        Adresse email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Confirmation de l'adresse email:
        <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="S'inscrire" />
    </form>
  );
}

export default RegistrationForm;