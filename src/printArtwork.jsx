import React, { useState } from 'react';
import projectData from './assets/artWork';
import instagram from'./assets/instagram.png';

function ImageSlideshow() {
  const [slideIndex, setSlideIndex] = useState(0); 
  const totalSlides = projectData.length;

  const plusDivs = (n) => {
    const newIndex = slideIndex + n;

    let finalIndex;
    if (newIndex >= totalSlides) {
      finalIndex = 0; 
    } else if (newIndex < 0) {
      finalIndex = totalSlides - 1;
    } else {
      finalIndex = newIndex;
    }
    setSlideIndex(finalIndex);
  };

  if (totalSlides === 0) {
    return <div>No artwork available.</div>;
  }

  return (
    <div className="slideshow-container"> 
      <div className="slideshow-1">
        <div className="slide-wrapper">
          {projectData.map((project, index) => (
            <div 
              className="mySlides" 
              key={project.id}
              style={{ display: index === slideIndex ? 'block' : 'none' }} 
            >
              <img src={project.image} alt="Art Piece" className="gallery-image" />
            </div>
          ))}
        </div>
        <div className="artinfo">
          <p className="cerInfo">
              Shading is my tool for sculpting realism and form. I make every stroke deliberate, focusing on depth, tension, and structure. It comes down to two things: using contrast to guide the eye and texture to communicate story. These graphite pieces are not just drawings; they’re executed moments brought to life.      
          </p>
          <div className="insta">
          <p><b>Do Follow</b></p>
          <a href="https://www.instagram.com/arte_playlist/">
          <img src={instagram} alt="Instagram logo" className="Social_Links"/>
          </a>
          </div>
          
        </div>
      </div>

        <button 
          className="w3-button w3-black w3-display-left" 
          onClick={() => plusDivs(-1)} 
        >
          &#10094;
        </button>
        <button 
          className="w3-button w3-black w3-display-right" 
          onClick={() => plusDivs(1)} 
        >
          &#10095;
        </button>
    </div>
  );
}

export default ImageSlideshow;