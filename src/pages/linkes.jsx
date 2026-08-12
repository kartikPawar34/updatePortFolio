import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

function Links() {
  return (
    <div className="Linkes">
      <a 
        href="https://www.linkedin.com/in/kartik-pawar346949/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <img src={linkedin} alt="LinkedIn" style={{ height: "2rem" }} />
      </a>
      <a 
        href="https://github.com/kartikPawar34" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <img src={github} alt="GitHub" style={{ height: "2rem" }} />
      </a>
      <a 
        href="https://www.instagram.com/arte_playlist/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
      >
        <img src={instagram} alt="Instagram" style={{ height: "2rem" }} />
      </a>
    </div>
  );
}

export default Links;