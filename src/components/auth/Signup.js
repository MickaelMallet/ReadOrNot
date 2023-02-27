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
    // <div className="signup-container">
    //   <h1>Inscription</h1>
    //   <form onSubmit={handleSubmit} className="signup-form">
    //     <label>
    //       Pseudo:
    //       <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
    //     </label>
    //     <label>
    //       Mot de passe:
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </label>
    //     <label>
    //       Confirmation du mot de passe:
    //       <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
    //     </label>
    //     <label>
    //       Adresse email:
    //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     </label>
    //     <label>
    //       Confirmation de l'adresse email:
    //       <input type="email" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
    //     </label>
    //     <input type="submit" value="S'inscrire" />
    //   </form>
    // </div>
    <div className="containerForm" id="containerForm">
	<div className="form-container sign-in-container">
    <form onSubmit={handleSubmit} className="signup-form">
			<h1>Inscription</h1>
        <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
           <input type="password" placeholder="Password confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
           <input type="email" placeholder="Email confirm" value={emailConfirm} onChange={(e) => setEmailConfirm(e.target.value)} />
        <input type="submit" value="S'inscrire" class="submit-btn" />
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Se connecter</h1>
				<p><a href='/login'>Déjà un compte ?</a></p>
			</div>
		</div>
	</div>
</div>
  );
}

export default Signup;
