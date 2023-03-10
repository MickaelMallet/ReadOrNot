import React from 'react';
import myGifOfWiwi from './Wiwi.gif';
import myGifOfKiki from './Kiki.gif';
import myGifOfMika from './Mika.gif';
import myGifOfJm from './Jm.gif';
import image from './dev.png';
import './About.scss';


const dev = image;

function About(){
    return(

      <div className='container-pic'> 

        <div className='gifAbout-container'>
        <figure className='imageDev'>
        <img className='dev' src={dev} alt="" />
        </figure>
        <div className='pics'>
        <figure className='pic'>
        <img src={myGifOfWiwi} alt="" />
        <figcaption className='pic-legendeWiwi'>Photo of Wiwi</figcaption>
        </figure>
        <figure className='pic'>
        <img src={myGifOfKiki} alt="" />
        <figcaption className='pic-legendeKiki'>Photo of Kiki</figcaption>
        </figure>
        <figure className='pic'>
        <img src={myGifOfMika} alt="" /> 
        <figcaption className='pic-legendeMika'>Photo of Mika</figcaption>
        </figure> 
        <figure className='pic'>
        <img src={myGifOfJm} alt="" /> 
        <figcaption className='pic-legendeJm'>Photo of Jm</figcaption>
        </figure>
        </div>
        </div> 
        </div>

    );
};

export default About;