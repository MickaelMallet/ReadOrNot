import React from 'react'
import LoaderVideo from './loader.mp4'
import './loaderStyle.scss'

export default function Loader() {
    return (
      <div className="loader-container">
        <video src={LoaderVideo} autoPlay loop muted/>
      </div>
    );
  }