import React, { useState } from 'react';
import './descriptionCard.css';

export default function SimpleAnimatedCard({
            activeProject, 
            setActiveProject,
            activeProjectIndex,
            setActiveProjectIndex,
            ProjectList}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="simple-card-container">
      <div
        className={`simple-card-wrapper ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="simple-card-content">
          <h2 className="simple-card-title">{activeProject.title}</h2>
          <p className="simple-card-text">
            {activeProject.description}
          </p>
          <button className="simple-card-button" onClick={() => {
            setActiveProjectIndex((prevIndex) => (prevIndex + 1) % ProjectList.length);
            setActiveProject(ProjectList[(activeProjectIndex + 1) % ProjectList.length]);}}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}