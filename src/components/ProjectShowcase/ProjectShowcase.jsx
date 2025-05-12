import {React} from 'react';
import { useState, useEffect } from 'react';
import MobileAppShowcase from '../MobileAppShowcase/MobileAppShowcase';
import SimpleAnimatedCard from './descriptionCard';
import './ProjectShowcase.css';
import ProjectList from './ProjectList.jsx';

const ProjectShowcase = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [activeProject, setActiveProject] = useState(ProjectList[activeProjectIndex]);

    return (
        <div className="project-showcase" id="projects">
            <div className="project-details">
                <SimpleAnimatedCard 
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                    activeProjectIndex={activeProjectIndex}
                    setActiveProjectIndex={setActiveProjectIndex}
                    ProjectList={ProjectList}
                    /> 
                <div className="project-screen">
                   <MobileAppShowcase appUrl={activeProject.url} />
                </div>
            </div>
            
            
        </div>
    );
}

export default ProjectShowcase;