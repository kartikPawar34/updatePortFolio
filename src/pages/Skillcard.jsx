import React, { useRef } from "react";

function Skillcards() {
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
    <div className="container L3">
      <h1>Service Learning & Applied Training</h1>

      <div className="carousel-wrapper">
        {/* Scrollable Cards Container */}
        <div className="cards" ref={cardsRef}>

          {/* Card 1: Frontend Technology */}
          <div className="card">
            <div className="card-body">
              <h4>Frontend Technologies & Web Design</h4>
              <p className="card-desc">
                Building responsive, interactive, and high-performance user interfaces with clean architecture and modern web standards.
              </p>

              <p className="section-title">Key Competencies:</p>
              <ul>
                <li>Developing dynamic Single Page Applications (SPAs) and interactive web layouts.</li>
                <li>Crafting mobile-first responsive interfaces using CSS, Flexbox, and Grid.</li>
                <li>DOM manipulation, client-side state management, and user experience optimization.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> JavaScript (ES6+), React.js, HTML5, CSS3
            </div>

            <a 
              href="https://kartikpawar34.github.io/GYM/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-btn"
            >
              View GYM Web App &#10138;
            </a>
          </div>

          {/* Card 2: Backend Technology */}
          <div className="card">
            <div className="card-body">
              <h4>Backend & Systems Engineering</h4>
              <p className="card-desc">
                Developing scalable backend architecture, RESTful APIs, efficient data handling, and core system logic.
              </p>

              <p className="section-title">Key Competencies:</p>
              <ul>
                <li>High-performance computing and algorithm design utilizing C++ and Python.</li>
                <li>Building REST APIs, managing database integrations, and executing asynchronous processing.</li>
                <li>Backend logic integration with cloud infrastructure, AI models, and spatial databases.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> Python, C++, Django REST, PostgreSQL, Celery
            </div>

            <a 
              href="https://kartikpawar34.github.io/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-btn"
            >
              View Main Portfolio &#10138;
            </a>
          </div>

          {/* Card 3: Salesforce Solutions Service */}
          <div className="card">
            <div className="card-body">
              <h4>Salesforce CRM & Administration</h4>
              <p className="card-desc">
                Configuring enterprise CRM solutions, workflow automation, and custom business processes within the Salesforce ecosystem.
              </p>

              <p className="section-title">Key Competencies:</p>
              <ul>
                <li>Customizing objects, fields, page layouts, and security settings.</li>
                <li>Automating business logic using Flows, Process Builder, and approval workflows.</li>
                <li>Managing data models, user roles, permission sets, and reporting dashboards.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> Salesforce Admin, Apex Basics, Flow Builder, Trailhead
            </div>
          </div>

          {/* Card 4: Cloud Computing Service */}
          <div className="card">
            <div className="card-body">
              <h4>Cloud Computing & Infrastructure</h4>
              <p className="card-desc">
                Deploying cloud-native solutions, managing virtual infrastructure, and maintaining secure server environments.
              </p>

              <p className="section-title">Key Competencies:</p>
              <ul>
                <li>Architecting serverless functions, microservices, and containerized apps.</li>
                <li>Setting up relational and spatial databases with cloud persistence.</li>
                <li>Understanding hybrid cloud architectures, virtualization, and identity management.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Tech Stack:</strong> IBM Cloud, Cloud Architecture, Docker, PostgreSQL / PostGIS
            </div>
          </div>

          {/* Card 5: Salesforce Training */}
          <div className="card">
            <div className="card-body">
              <h4>Salesforce Training — SmartBridge</h4>
              <p className="card-desc">
                Powered by TCS • Completed an intensive 3-month online training program led by TCS professionals.
              </p>

              <p className="section-title">Key Highlights:</p>
              <ul>
                <li>Mastered CRM core concepts, automation tools, and cloud-based enterprise solutions.</li>
                <li>Completed hands-on Trailhead challenges (cleared Phase 1 and Phase 2).</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Domain:</strong> Salesforce, CRM, Cloud Automation
            </div>
          </div>

          {/* Card 6: Cisco Cybersecurity */}
          <div className="card">
            <div className="card-body">
              <h4>Cisco Cybersecurity Training — BSNL BRBRAITT</h4>
              <p className="card-desc">
                Cisco Networking Academy • Completed 70 hours (2 weeks) of intensive cybersecurity training in Jabalpur.
              </p>

              <p className="section-title">Key Highlights:</p>
              <ul>
                <li>Built strong technical foundations in network security and threat mitigation.</li>
                <li>Gained practical understanding of core networking fundamentals and security protocols.</li>
              </ul>
            </div>

            <div className="tech-stack">
              <strong>Domain:</strong> Cybersecurity, Network Security, Threat Mitigation
            </div>
          </div>

        </div>

        {/* Bottom Centered Navigation Controls */}
        <div className="carousel-controls">
          <button 
            className="nav-btn prev-btn" 
            onClick={() => scroll("prev")} 
            aria-label="Previous Training"
          >
            &#10094;
          </button>

          <button 
            className="nav-btn next-btn" 
            onClick={() => scroll("next")} 
            aria-label="Next Training"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skillcards;