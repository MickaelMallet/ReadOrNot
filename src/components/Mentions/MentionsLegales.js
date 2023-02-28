import React from 'react';
// import myGif from './gif_test_bye.gif';
import treeGif from './tree_swing.svg'
import '../Mentions/MentionsLegales.scss';

const MentionsLegales = () => {
    return(
        <div className='gif-container'>

        <img src={treeGif} alt="my-gif" /> 

        </div>
       
    );
};

export default MentionsLegales;