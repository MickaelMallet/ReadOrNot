import React from 'react';
import { Link } from 'react-router-dom';
import treeGif from './tree_swing.svg';
import '../Mentions/MentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <div className='gif-container'>
      <Link to='/'>
        <img src={treeGif} alt='my-gif' />
      </Link>
    </div>
  );
};

export default MentionsLegales;
