import {React, useEffect} from 'react';
import Navbar from './components/NavBarTabs/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectAppshowcase from './components/ProjectShowcase/ProjectShowcase.jsx';
import './index.css';
import SkillSets from './components/SkillSets/SkillSets.jsx';
import SimpleMailCard from './components/MailCard/MailCard.jsx';

const pages = ['/#', '/#skills','/#projects'];

function App() {
  
  var currPageIndex = 0;

  const personalInfo = {
    name: "PRATIK",
    title: "CSE Student",
    age: 21,
    yearsExperience: 2,
    projectsWorked: 20,
    projectsDeployed: 5,
    subtitle: "Mobile App Developer, AI Enthusiast, and Open Source Contributor",
  };

  useEffect(() => {
    const handleScroll = () => {
      currPageIndex === pages.length - 1 ? currPageIndex = 0 : currPageIndex++;
      console.log(currPageIndex);
      window.location.href = pages[currPageIndex];
    };
    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: true });
    };
  }, []);

  return (
    <div className="app">
      
      <Navbar/>
      <main className="main-content">
        <Hero personalInfo={personalInfo} />
        <SkillSets />
        <ProjectAppshowcase />
        <SimpleMailCard />
      </main>

    </div>
  );
}

export default App;