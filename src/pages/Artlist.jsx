import React, { useState } from "react";
import projectData from "../assets/artWork";

function Artlist() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = projectData.length;

  const plusDivs = (n) => {
    if (totalSlides === 0) return;
    setSlideIndex((prevIndex) => (prevIndex + n + totalSlides) % totalSlides);
  };

  if (totalSlides === 0) {
    return <div className="container L6">No Artwork Image Available.</div>;
  }

  return (
    <div className="container L6">
      <h1>Art Section</h1>

      <div className="slideshow-1">
        <div className="slide-wrapper">
          {projectData.map((project, index) => (
            <div
              className="mySlides"
              key={project.id || index}
              style={{ display: index === slideIndex ? "block" : "none" }}
            >
              <img
                src={project.image}
                alt={project.title || "Art Piece"}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        <div className="cards">
          <p className="info">
            Shading is my tool for sculpting realism and form. I make every
            stroke deliberate, focusing on depth, tension, and structure. It
            comes down to two things: using contrast to guide the eye and
            texture to communicate story. These graphite pieces are not just
            drawings; they’re executed moments brought to life.
          </p>
        </div>

        {/* Centered Controls at Bottom */}
        <div className="carousel-controls">
          <button
            className="nav-btn prev-btn"
            onClick={() => plusDivs(-1)}
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          <button
            className="nav-btn next-btn"
            onClick={() => plusDivs(1)}
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Artlist;