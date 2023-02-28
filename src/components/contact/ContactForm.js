import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.scss';


function ContactForm(props) {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pseudo: pseudo, email: email, message: message })
    };
    console.log(requestOptions);
  
    try {
      const response = await fetch('http://kilianthoraval-server.eddi.cloud:8080/contact', requestOptions);
      const data = await response.json();
      console.log('Response received:', data);
  
      if (data.success) {
        alert('Votre message a été envoyé avec succès!');
        navigate('/');
      } else {
        alert('Une erreur est survenue, veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur est survenue, veuillez réessayer plus tard.');
    }
  };
  

  return (

    <div className="containerForm" id="containerForm">
	<div className="form-container contact-container">
    <form onSubmit={handleSubmit} class="contact-form">
      <h1>Contact</h1>
      <input type="text" placeholder="Pseudo" value={pseudo} onChange={(event) => setPseudo(event.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <textarea placeholder="Votre message" value={message} onChange={(event) => setMessage(event.target.value)} />
      <input type="submit" value="Envoyer" className="submit-btn" />
    </form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
			</div>
		</div>
	</div>
</div>
);
}

export default ContactForm;
