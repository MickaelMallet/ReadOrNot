import React from 'react'
import LoaderGIF from './bookLoader.gif'
import './loaderStyle.scss'

export default function Loader() {
    return (
      <div className="loader-container">
        <img src={LoaderGIF} />
      </div>
    );
  }