import { React, useEffect, useState, useRef } from 'react';
import Navbar from './components/NavBarTabs/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjectAppshowcase from './components/ProjectShowcase/ProjectShowcase.jsx';
import './index.css';
import SkillSets from './components/SkillSets/SkillSets.jsx';
import SimpleMailCard from './components/MailCard/MailCard.jsx';
import Footer from './components/Footer/Footer.jsx';

const pages = ['#', '#skills', '#projects', '#contact'];

function App() {
  const [currPageIndex, setCurrPageIndex] = useState(0);
  const scrollThreshold = 50; 
  const scrollTimeout = useRef(null);
  const scrollAmount = useRef(0);
  const isScrolling = useRef(false);

  const personalInfo = {
    name: "PRATIK",
    title: "CSE Student",
    age: 21,
    yearsExperience: 2,
    projectsWorked: 20,
    projectsDeployed: 5,
    subtitle: "Mobile App Developer, AI Enthusiast, and Open Source Contributor",
    email: "work.pratikrajput@gmail.com",
    phone: "+91 94223-36464",
    address: "Pune, India",
  };

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      scrollAmount.current += event.deltaY;
      if (isScrolling.current) return;
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        if (Math.abs(scrollAmount.current) >= scrollThreshold) {
          isScrolling.current = true;
          
          if (scrollAmount.current > 0) {
            const nextPageIndex = currPageIndex === pages.length - 1 ? 0 : currPageIndex + 1;
            setCurrPageIndex(nextPageIndex);
            window.location.hash = pages[nextPageIndex];
          } else {
            const prevPageIndex = currPageIndex === 0 ? pages.length - 1 : currPageIndex - 1;
            setCurrPageIndex(prevPageIndex);
            window.location.hash = pages[prevPageIndex];
          }
          
          setTimeout(() => {
            isScrolling.current = false;
            scrollAmount.current = 0;
          }, 800); 
        } else {
          scrollAmount.current = 0;
        }
      }, 100);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
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
      {/* Grid Background */}
      <div className="grid-background"></div>
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