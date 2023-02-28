import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

function Home() {
const [book, setBook] = useState(null);

useEffect(() => {
fetch('http://kilianthoraval-server.eddi.cloud:8080/book/2')
.then(response => response.json())
.then(data => setBook(data))
.catch(error => console.error(error));
}, []);

console.log("book", book);

return (
<div className="home-container">
<div className="home-left">
<h1>Votre prochaine aventure littéraire, savamment orchestrée</h1>
<p>
Laissez-vous guider par notre traqueur de livres pour des lectures personnalisées. Notre bibliothèque s'adapte à vos goûts et vos envies pour une expérience de lecture unique.
</p>
</div>
<div className="home-right">
<div className="home-cover">
{book && <img src={book.img} alt="book cover" />}
</div>
<div className="home-reviews">
<h4>Livre du Mois</h4>
<ul>
{book && (
  <li>
    <h3>{book.title}</h3>
    <p>Par: {book.author.firstname} {book.author.lastname}, Genre: {book.category.name}, {book.description}</p>
  </li>
)}
</ul>
</div>
</div>
</div>
);
}

export default Home;