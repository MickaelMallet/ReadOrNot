import React, { useState } from 'react';
import './ContactForm.scss';


function ContactForm(props) {
  const [pseudo, setPseudo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajouter ici la logique pour traiter les données du formulaire
  };


  return (
  <div className="contactform-container">
  <h1>Contact</h1>
  <form onSubmit={handleSubmit} className="contact-form">
    <label>
      Pseudo:
      <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
    </label>
    <label>
      Nom:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>
      Adresse email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <label>
      Message:
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
    </label>
    <input type="submit" value="Envoyer" />
  </form>
</div>
);
}

export default ContactForm;
