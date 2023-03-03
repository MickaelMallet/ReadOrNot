import React from 'react';
import { Link } from 'react-router-dom';
import treeGif from './tree_swing.svg';
import '../Mentions/MentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <body className='no-background'>
    <div className='gif-container'>
      <Link to='/'>
        <img src={treeGif} alt='my-gif' />
      </Link>
    </div>
    </body>
  );
};

export default MentionsLegales;
