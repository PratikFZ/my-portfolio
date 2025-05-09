import React from 'react';
// import { motion } from 'motion/react';
import { useState } from 'react';
import './Tabs.css'; 

const tabs = ['','projects', 'personal', 'contact'];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`}>
          <button 
              onClick={() => {
                setActiveTab(tab);
                window.location.href = '/#'+tab.toString();
              }}>{tab}</button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;