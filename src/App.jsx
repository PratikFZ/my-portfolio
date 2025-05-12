import { React, useEffect, useState } from 'react';
import Navbar from './components/NavBarTabs/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectAppshowcase from './components/ProjectShowcase/ProjectShowcase.jsx';
import './index.css';
import SkillSets from './components/SkillSets/SkillSets.jsx';
import SimpleMailCard from './components/MailCard/MailCard.jsx';
import Footer from './components/Footer/Footer.jsx';

const pages = ['#', '#skills', '#projects', '#footer'];

function App() {
  const [currPageIndex, setCurrPageIndex] = useState(0);

  const personalInfo = {
    name: "PRATIK",
    title: "CSE Student",
    age: 21,
    yearsExperience: 2,
    projectsWorked: 20,
    projectsDeployed: 5,
    subtitle: "Mobile App Developer, AI Enthusiast, and Open Source Contributor",
    email: "your.email@example.com",
    phone: "+1234567890",
    address: "Your City, Your Country",
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        const nextPageIndex = currPageIndex === pages.length - 1 ? 0 : currPageIndex + 1;
        setCurrPageIndex(nextPageIndex);
        window.location.hash = pages[nextPageIndex];
      } else if (event.deltaY < 0) {
        // Scrolling up
        const prevPageIndex = currPageIndex === 0 ? pages.length - 1 : currPageIndex - 1;
        setCurrPageIndex(prevPageIndex);
        window.location.hash = pages[prevPageIndex];
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: true });
    };
  }, [currPageIndex]);

  useEffect(() => {
    // Update the current page index based on the hash in the URL
    const hash = window.location.hash;
    const pageIndex = pages.indexOf(hash);
    if (pageIndex !== -1) {
      setCurrPageIndex(pageIndex);
    }
  }, []);

  return (
    <div className="app">
      <Navbar currPageIndex={currPageIndex} setCurrPageIndex={setCurrPageIndex} />
      <main className="main-content">
        <Hero personalInfo={personalInfo} />
        <SkillSets />
        <ProjectAppshowcase />
        <SimpleMailCard />
      </main>
      <Footer personalInfo={personalInfo} id="footer" />
    </div>
  );
}

export default App;