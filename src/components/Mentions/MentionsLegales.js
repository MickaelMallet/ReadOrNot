import React from 'react';
import myGif from './gif_test_bye.gif';
import '../Mentions/MentionsLegales.scss';

const MentionsLegales = () => {
    return(
        <div className='gif-container'>

        <img src={myGif} alt="my-gif" /> 

        </div>
       
    );
};

export default MentionsLegales;