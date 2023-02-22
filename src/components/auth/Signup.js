import React, { useState } from 'react';
import './Signup.scss';


function Signup(props) {
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
    <div className="signup-container">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Pseudo:
          <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirmation du mot de passe:
          <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        </label>
        <label>
          Adresse email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Confirmation de l'adresse email:
          <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
        </label>
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
}

export default Signup;
