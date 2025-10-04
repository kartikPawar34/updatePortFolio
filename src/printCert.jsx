import projectData from "./assets/certification";
import { useState } from 'react';

function CertificateSlideshow() {
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

export default CertificateSlideshow;