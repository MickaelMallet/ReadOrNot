// import React from 'react';
// import Slider from 'react-slick';
 import './Mypage.scss'
// // import { Badge } from 'antd';
// // import { UserOutlined } from '@ant-design/icons';

// // function ProfileIcon() {
// //   const booksRead = 5; // nombre de livres lus

// //   return (
// //     <Badge count={booksRead}>
// //       <UserOutlined style={{ fontSize: '24px' }} />
// //     </Badge>
// //   );
// // }


// function BookCarousel({ title, books }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4
//   };

//   return (
//     <div>
//       <h2>{title}</h2>
//       <Slider {...settings}>
//         {books.map((book) => (
//           <div key={book.id}>
//             <img src={book.imageUrl} alt={book.title} />
//             <p>{book.title}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// function Mypage() {
//   const booksToRead = [
//     { id: 1, title: 'Livre 1', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 2, title: 'Livre 2', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 3, title: 'Livre 3', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 4, title: 'Livre 4', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 5, title: 'Livre 5', imageUrl: 'https://via.placeholder.com/150' },
//   ];

//   const booksRead = [
//     { id: 6, title: 'Livre 6', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 7, title: 'Livre 7', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 8, title: 'Livre 8', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 9, title: 'Livre 9', imageUrl: 'https://via.placeholder.com/150' },
//     { id: 10, title: 'Livre 10', imageUrl: 'https://via.placeholder.com/150' },
//   ];

//   return (
//     <div className='book-carousel-container'>
//       <div style={{ float: 'right' }}>
//         {/* <ProfileIcon /> */}
//       </div>
//       <h1>Profil</h1>
//       <div className='book-carousel'>
//         <BookCarousel title="Livres à lire" books={booksToRead} />
//       </div>
//       <div className='book-carousel'>       
//         <BookCarousel title="Livres lus" books={booksRead} />
//     </div> 
//     </div>
//   );
// }

// export default Mypage;
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Mypage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Les items pour le carousel "Livre lu"
  const itemsLivreLu = [
    <div key={1} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=1" alt="carousel-item-1" />
      <h3>Livre lu 1</h3>
    </div>,
    <div key={2} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=2" alt="carousel-item-2" />
      <h3>Livre lu 2</h3>
    </div>,
    <div key={3} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=3" alt="carousel-item-3" />
      <h3>Livre lu 3</h3>
    </div>,
    <div key={4} className="mypage-carousel-item">
    <img src="https://picsum.photos/500/300?random=15" alt="carousel-item-4" />
    <h3>Livre lu 4</h3>
  </div>,
    // Ajouter les autres livres lus ici...
  ];

  // Les items pour le carousel "Livre à lire"
  const itemsLivreALire = [
    <div key={1} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=9" alt="carousel-item-4" />
      <h3>Livre à lire 1</h3>
    </div>,
    <div key={2} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=5" alt="carousel-item-5" />
      <h3>Livre à lire 2</h3>
    </div>,
    <div key={3} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=6" alt="carousel-item-6" />
      <h3>Livre à lire 3</h3>
    </div>,
    <div key={4} className="mypage-carousel-item">
      <img src="https://picsum.photos/500/300?random=25" alt="carousel-item-7" />
      <h3>Livre à lire 4</h3>
    </div>,
    // Ajouter les autres livres à lire ici...
  ];

  const handleSlideChange = (event) => {
    setCurrentIndex(event.item);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="mypage-container">
      <h1>My Page</h1>
      <h2>Livres lus</h2>
      <AliceCarousel
        items={itemsLivreLu}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
      <h2>Livres à lire</h2>
      <AliceCarousel
        items={itemsLivreALire}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={handleSlideChange}
        dotsDisabled={true}
        buttonsDisabled={true}
      />
    </div>
  );
};

export default Mypage;

