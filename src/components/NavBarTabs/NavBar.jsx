import React from 'react';
import Tabs from '/src/components/NavBarTabs/Tabs.jsx';
import '/src/components/NavBarTabs/NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>PRATIKRAJPUT</h1>
        <div className="dot"></div>
        
      </div>
      
      <div className="navbar-menu">
        <Tabs />
        <div className="language-selector">
          <span>English</span>
          <div className="globe-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;