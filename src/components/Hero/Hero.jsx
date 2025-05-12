import React from 'react';
import SocialButtons from '/src/components/SocialButton/SocialButton.jsx';
// import Stats from '/src/components/Stats/Stats.jsx';
import '/src/components/Hero/Hero.css';
import Name from '/src/components/Name/Name.jsx';

function Hero({ personalInfo }) {
  return (
    <div className="hero">
      {/* Grid Background */}
      <div className="grid-background"></div>
      
      <div className="hero-content">
        <h2 className="hello">Hello I'm</h2>
        {/* <h2 className="name">{personalInfo.name}</h2> */}
        <Name name={personalInfo.name} />
        <p className="subtitle">{personalInfo.subtitle}</p>
        <button className="download-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          DOWNLOAD CV
        </button>
        <SocialButtons />
      </div>
      <div className="profile-image-container">
        <div className="profile-image">
          <img
            src="/assets/profile_img.jpg" // Use the path relative to the public folder
            alt="Profile"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%", // Makes it circular
              objectFit: "cover" // Ensures image covers the area properly
            }}/>
          {/* <div className="placeholder-img">
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;