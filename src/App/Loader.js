import React from 'react'
import LoaderVideo from './loader.mp4'
import './loaderStyle.scss'

export default function Loader() {
    return (
      <body className='no-background'>
      <div className="loader-container">
        <video src={LoaderVideo} autoPlay loop muted/>
      </div>
      </body>
    );
  }