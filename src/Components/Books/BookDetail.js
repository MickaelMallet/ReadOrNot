import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './bookDetail.scss';
// import './kwak.mp3';

function BookDetails({ match }) {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  const handleToReadClick = () => {
    // Met à jour la liste "à lire" dans le local storage en ajoutant le livre
    const toReadList = JSON.parse(localStorage.getItem("toReadList") || "[]");
    localStorage.setItem(
      "toReadList",
      JSON.stringify([...toReadList, book.id])
    );
  };

  const handleRemoveClickToRead = () => {
    // Récupérer la liste "à lire" depuis le localStorage
    const toReadList = JSON.parse(localStorage.getItem("toReadList") || "[]");
  
    // Supprimer l'ID du livre de la liste "à lire"
    const updatedList = toReadList.filter((id) => id !== book.id);
  
    // Mettre à jour la liste "à lire" dans le localStorage avec la nouvelle liste sans le livre supprimé
    localStorage.setItem("toReadList", JSON.stringify(updatedList));
  };
  

  
  const handleReadClick = () => {
    // Met à jour la liste "lu" dans le local storage en ajoutant le livre
    const readList = JSON.parse(localStorage.getItem("readList") || "[]");
    localStorage.setItem(
      "readList",
      JSON.stringify([...readList, book.id])
    );
  };


  const handleRemoveClickRead = () => {
    // Récupérer la liste "lu" depuis le localStorage
    const readList = JSON.parse(localStorage.getItem("readList") || "[]");
  
    // Supprimer l'ID du livre de la liste "lu"
    const updatedList = readList.filter((id) => id !== book.id);
  
    // Mettre à jour la liste "lu" dans le localStorage avec la nouvelle liste sans le livre supprimé
    localStorage.setItem("readList", JSON.stringify(updatedList));
  };


  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://kilianthoraval-server.eddi.cloud:8080/book/${id}`);
      const data = await response.json();
      setBook(data);
    };
  
    fetchData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  // function kwak (){
  //   const kwak = new Audio();
  //   kwak.src = "kwak.mp3";
  // }

  return (
    <div>
    <div className='bookBox'>
      <h2>{book.title}</h2>
    <div className='bookSubBox'>
      <img src={book.img} alt={book.title} />
      <div className='descriptionBox'>
      <p className='description'>{book.description}</p>
      <p className='author'>Auteur : {book.author.firstname} {book.author.lastname}</p>
      <p className='type'>Genre : {book.category.name}</p>
      <div className='buttonClick'>
      <div className='toReadBox'>
      <button className='toRead' onClick={handleToReadClick}> Lu 📚</button>
      <button className='eraseRead' onClick={handleRemoveClickToRead}> Retirer </button>
      </div>
      <div className='boxRead'>
      <button className='Read' onClick={handleReadClick}>A lire 📖 </button>
      <button className='eraseToRead' onClick={handleRemoveClickRead}> Retirer </button>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default BookDetails;
