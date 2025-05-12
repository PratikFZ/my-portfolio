import React from 'react';
// import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import './Tabs.css'; 
import { tabs } from './Tabs_model.jsx'; // Import the tabs array from NavBar.jsx

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.location.href = '/#' + tab.toString();
  };
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`}>
          <button 
              onClick={() => {
                handleTabClick(tab);
              }}>{tab}</button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;