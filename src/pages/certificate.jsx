import React, { useState } from "react";
import projectData from "../assets/certification";

function Certificate() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = projectData.length;

  const plusDivs = (n) => {
    if (totalSlides === 0) return;
    setSlideIndex((prevIndex) => (prevIndex + n + totalSlides) % totalSlides);
  };

  if (totalSlides === 0) {
    return <div className="container L6">No Certification Image Available.</div>;
  }

  return (
    <div className="container L6">
      <h1>Certification</h1>
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
                alt={project.title || "Certification"}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        <div className="cards">
          <p className="info">
            I’ve built my technical foundation through specialized certifications in
            Agile methodologies, Cloud Computing (IBM-Coursera), CCNA (Cisco), and
            Cybersecurity fundamentals. These programs have equipped me with practical
            knowledge in cloud-native architecture, network configuration, secure
            system design, and agile project execution.
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

export default Certificate;