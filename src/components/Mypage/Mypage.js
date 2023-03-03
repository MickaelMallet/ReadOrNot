import React from 'react';
import Slider from 'react-slick';
import './Mypage.scss'
// import { Badge } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// function ProfileIcon() {
//   const booksRead = 5; // nombre de livres lus

//   return (
//     <Badge count={booksRead}>
//       <UserOutlined style={{ fontSize: '24px' }} />
//     </Badge>
//   );
// }


function BookCarousel({ title, books }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div>
      <h2>{title}</h2>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id}>
            <img src={book.imageUrl} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function Mypage() {
  const booksToRead = [
    { id: 1, title: 'Livre 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Livre 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Livre 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Livre 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Livre 5', imageUrl: 'https://via.placeholder.com/150' },
  ];

  const booksRead = [
    { id: 6, title: 'Livre 6', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Livre 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Livre 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Livre 9', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Livre 10', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className='book-carousel-container'>
      <div style={{ float: 'right' }}>
        {/* <ProfileIcon /> */}
      </div>
      <h1>Profil</h1>
      <div className='book-carousel'>
        <BookCarousel title="Livres à lire" books={booksToRead} />
      </div>
      <div className='book-carousel'>       
        <BookCarousel title="Livres lus" books={booksRead} />
    </div> 
    </div>
  );
}

export default Mypage;