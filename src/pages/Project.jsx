import React, { useRef } from "react";

function Projects() {
  const cardsRef = useRef(null);

  const scroll = (direction) => {
    if (cardsRef.current) {
      // Smoothly scrolls by ~80% of the container width per click
      const scrollAmount = cardsRef.current.clientWidth * 0.8;
      cardsRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container L4">
      <h1>Academic Projects</h1>

      <div className="carousel-wrapper">
        {/* Scrollable Cards Container */}
        <div className="cards" ref={cardsRef}>
          {/* Card 1 */}
          <div className="card">
            <div className="card-body">
              <h4>MediScan — Digital Image Processing for Medical Diagnostics</h4>
              <p className="card-desc">
                Developed an intelligent X-ray image processing system using DIP algorithms and AI to assist in enhanced disease estimation.
              </p>

              <p className="section-title">Key Contributions:</p>
              <ul>
                <li>Implemented DIP algorithms for noise reduction, enhancement, and image feature extraction.</li>
                <li>Utilized Python and the Pillow library for backend image manipulation and optimization.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> Python, Digital Image Processing (DIP), Pillow, AI/ML models
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-body">
              <h4>Krishi Sakhi — Personalized Farming AI Assistant</h4>
              <p className="card-desc">
                Designed a mobile-first AI companion tailored for Indian smallholder farmers, delivering hyper-personalized crop cycle guidance via voice, text, and image inputs.
              </p>

              <p className="section-title">Key Contributions:</p>
              <ul>
                <li>Integrated generative AI (Gemini) and ML models to provide real-time advisory on soil health, crop care, and local market trends.</li>
                <li>Developed a scalable backend architecture using Django REST API, PostgreSQL/PostGIS, and Celery for async tasks.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> Django REST API, Python, Gemini AI, PostgreSQL / PostGIS, Celery
            </div>
          </div>
        </div>

        {/* Bottom Centered Navigation Controls */}
        <div className="carousel-controls">
          <button 
            className="nav-btn prev-btn" 
            onClick={() => scroll("prev")} 
            aria-label="Previous Project"
          >
            &#10094;
          </button>

          <button 
            className="nav-btn next-btn" 
            onClick={() => scroll("next")} 
            aria-label="Next Project"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;