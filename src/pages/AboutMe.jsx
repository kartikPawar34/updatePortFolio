import React from "react";

function Aboutme() {
  return (
    <div className="container L2 CARD about-section">
      <h1>About Me</h1>
      
      <div className="about-grid">
        <div className="block bio-content">
          <p>
            I am a Computer Science and Design (CSD) graduate from Gyan Ganga
            Institute of Technology and Sciences (CGPA: 8.32). I bridge the gap
            between intuitive front-end design and powerful backend architecture.
          </p>
          <p>
            With core skills spanning React.js, Python, Flask, and Django REST API,
            alongside a strong foundation in Azure and Salesforce cloud environments,
            I specialize in turning complex logic into seamless digital experiences.
            Whether implementing Digital Image Processing algorithms for medical tech
            or building AI-driven solutions for real-world impact, I thrive on
            continuous learning, problem-solving, and collaborative development.
          </p>
        </div>

        <div className="block skills-content">
          <div className="skill-group">
            <h3>Markup & Styling</h3>
            <p><label>HTML5</label> <progress value="85" max="100">85%</progress></p>
            <p><label>CSS3</label> <progress value="75" max="100">75%</progress></p>
          </div>

          <div className="skill-group">
            <h3>Programming Languages</h3>
            <p><label>JavaScript (ES6+)</label> <progress value="80" max="100">80%</progress></p>
            <p><label>Python 3</label> <progress value="70" max="100">70%</progress></p>
            <p><label>C++</label> <progress value="60" max="100">60%</progress></p>
          </div>

          <div className="skill-group">
            <h3>Frameworks & Runtimes</h3>
            <p><label>React</label> <progress value="70" max="100">70%</progress></p>
            <p><label>Node.js</label> <progress value="65" max="100">65%</progress></p>
            <p><label>Vue.js</label> <progress value="50" max="100">50%</progress></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;