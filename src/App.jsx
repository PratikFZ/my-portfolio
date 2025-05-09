import React from 'react';
import Navbar from './components/NavBarTabs/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectAppshowcase from './components/ProjectShowcase/ProjectShowcase.jsx';

function App() {
  
  const personalInfo = {
    name: "PRATIK",
    title: "CSE Student",
    age: 21,
    yearsExperience: 2,
    projectsWorked: 20,
    projectsDeployed: 5,
    subtitle: "Mobile App Developer, AI Enthusiast, and Open Source Contributor",
  };

  return (
    <div className="app">
      
      <Navbar/>
      <main className="main-content">
        <Hero personalInfo={personalInfo} />
        <ProjectAppshowcase />
      </main>

    </div>
  );
}

export default App;