import React from 'react';
import './Stats.css';

function Stats({ personalInfo }) {
  const stats = [
    { label: 'Age', value: personalInfo.age },
    { label: 'Years of experience', value: personalInfo.yearsExperience },
    { label: 'Projects worked on', value: personalInfo.projectsWorked },
    { label: 'Projects Deployed', value: personalInfo.projectsDeployed }
  ];

  return (
    <div className="stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <h3 className="stat-value">{stat.value}</h3>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;