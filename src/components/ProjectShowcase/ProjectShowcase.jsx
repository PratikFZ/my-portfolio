import {React} from 'react';
import { useState, useEffect } from 'react';
import MobileAppShowcase from '../MobileAppShowcase/MobileAppShowcase';
import SimpleAnimatedCard from './descriptionCard';
import './ProjectShowcase.css';

const ProjectList = [
    {
        title: "Medico-Medicine helper",
        description: `Flutter, Flask, spacy, NLTK, OpenCV, transformers, tesseract-OCR
Jan 2024 – Mar 20
● Extract the medicine and dosage information from medical prescriptions and set alarm according to dosage
● Used fine-tuned tesseract-OCR for text extraction from prescription, spacy and NLTK for
NLP-NER to recognize medicine and dosage from extracted text and flutter for Mobile-App that reduced
medicine alarm setting time by 30%.
● Useful for elderly peoples, employees, and college students with busy schedules`,
        url: "http://localhost:8000/"
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        url: "http://localhost:8005/"
    },
    // Add more projects as needed
];
const ProjectShowcase = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const [activeProject, setActiveProject] = useState(ProjectList[activeProjectIndex]);

    return (
        <div className="project-showcase" id="projects">
            <div className="project-details">
                {/* <h2>Project Showcase</h2>
                <div className="projects">
                    {ProjectList.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => setActiveProject(project)}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div> */}
                <SimpleAnimatedCard 
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                    activeProjectIndex={activeProjectIndex}
                    setActiveProjectIndex={setActiveProjectIndex}
                    ProjectList={ProjectList}
                    />
            </div>
            <div className="project-screen">
                <MobileAppShowcase appUrl={activeProject.url} />
            </div>
            
        </div>
    );
}

export default ProjectShowcase;