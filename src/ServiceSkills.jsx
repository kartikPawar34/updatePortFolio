import React, { useRef } from 'react';

function SkillCard({ text }) {
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  );
}

function Skills() {
  const scrollRef = useRef(null);

  const skillTexts = [{
    id: "1",
    text: "Front-end development using HTML, CSS, and JavaScript, with practical experience in React.js. Adept at creating responsive, user-focused web interfaces."
  }, {
    id: "2",
    text: "Theoretical knowledge of Agile methodologies and frameworks such as Scrum and Kanban for iterative project delivery. Gaining knowledge & experience about sprint planning, backlog management, and fostering continuous improvement within cross-functional teams."
  }, {
    id: "3",
    text: "Currently learning Python libraries for machine learning and automation, including tools like NumPy, Pandas, Scikit-learn, and Selenium. Actively studying Data Structures and Algorithms to strengthen logical thinking and problem-solving skills. Committed to continuous improvement."
  }];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; 
      
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      let newScrollLeft = 0;

      if (direction === 'left') {
        newScrollLeft = Math.max(0, scrollLeft - scrollAmount);
      } else if (direction === 'right') {
        newScrollLeft = Math.min(scrollWidth - clientWidth, scrollLeft + scrollAmount);
      }

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="skills-section-wrapper">
      <div className="carousel-controls">
        
        
        <div className="scroll-container" ref={scrollRef}>
          {skillTexts.map((skill) => (
            <SkillCard key={skill.id} text={skill.text} />
          ))}
        </div>

        <button className="w3-button left" onClick={() => scroll('left')}>
          &#10094;
        </button>

        <button className="w3-button right" onClick={() => scroll('right')}>
         &#10095;
        </button>
      </div>
    </div>
  );
}
export default Skills;