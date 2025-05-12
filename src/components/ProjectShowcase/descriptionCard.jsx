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
      <dl className='simple-card-dl'>
        {ProjectList.map((project, index) => (
          <dt 
            key={index} 
            className={`project ${activeProjectIndex === index ? 'active' : ''}`}
          ></dt>
        ))}
      </dl> 
      <div>
        <div className="simple-card-content">
          <div className="simple-card-tile-div">
            <h2 className="simple-card-title">{activeProject.title}</h2>
            <h3 className="simple-card-techstack">{activeProject.tech_stack}</h3>
            <hr /> <br/>
          </div>
          
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