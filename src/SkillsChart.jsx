import React from 'react';

const SkillsSection = () => {
  return (
    <div className="skills-section-container">
      <div className="skills-content">
        <div className="skill-category">
          <h3 className="category-title">WEB DEVELOPMENT</h3>
          <SkillBar skill="HTML / CSS" percentage={95} />
          <SkillBar skill="JAVASCRIPT" percentage={80} />
          <SkillBar skill="SQL" percentage={40} />
        </div>

        <div className="skill-category">
          <h3 className="category-title">APP DEVELOPMENT</h3>
          <SkillBar skill="Python" percentage={40} />
          <SkillBar skill="CPP" percentage={40} />
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar-wrapper">
      <span className="skill-name">{skill}</span>
      <div className="skill-bar-outer">
        <div className="skill-bar-inner" style={{ width: `${percentage}%` }}></div>
        <span className="skill-percentage">{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillsSection;