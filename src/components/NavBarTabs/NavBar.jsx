import React from 'react';
import Tabs from '/src/components/NavBarTabs/Tabs.jsx';
import '/src/components/NavBarTabs/NavBar.css';

function Navbar({ currPageIndex, setCurrPageIndex }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 onClick={() => {
              setCurrPageIndex(0);
              window.location.href = '/#';
            }} >PRATIKRAJPUT</h1>
        <div className="dot"></div>
      </div>
      
      <div className="navbar-menu">
        <Tabs currPageIndex={currPageIndex} setCurrPageIndex={setCurrPageIndex} />
      </div>
    </nav>
  );
}

export default Navbar;