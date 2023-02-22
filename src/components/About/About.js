import React from 'react';
import myGifOfWiwi from './Wiwi.gif';
import myGifOfKiki from './Kiki.gif';
import myGifOfMika from './Mika.gif';
import myGifOfJm from './Jm.gif';
import '../About/About.scss';

const About = () => {
    return(
      <div className='container-pic'>  
        <div className='gifAbout-container'>
        
        <figure className='pic'>
        <img src={myGifOfWiwi} alt="Photo of Wiwi" />
        <figcaption className='pic-legendeWiwi'>Photo of Wiwi</figcaption>
        </figure>
        <figure className='pic'>
        <img src={myGifOfKiki} alt="Photo of Kiki" />
        <figcaption className='pic-legendeKiki'>Photo of Kiki</figcaption>
        </figure>
        <figure className='pic'>
        <img src={myGifOfMika} alt="Photo of Mika" /> 
        <figcaption className='pic-legendeMika'>Photo of Mika</figcaption>
        </figure> 
        <figure className='pic'>
        <img src={myGifOfJm} alt="Photo of Jm" /> 
        <figcaption className='pic-legendeJm'>Photo of Jm</figcaption>
        </figure>
        
        </div>
        </div>  
    );
};

export default About;