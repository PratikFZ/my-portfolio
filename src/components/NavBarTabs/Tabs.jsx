import React from 'react';
import './Tabs.css'; 
import { tabs } from './Tabs_model.jsx';

function Tabs({ currPageIndex, setCurrPageIndex }) {
  const handleTabClick = (tabIndex) => {
    setCurrPageIndex(tabIndex);
    window.location.href = '/#' + tabs[tabIndex];
  };

  return (
    <ul className="tabs">
      {tabs.map((tab, index) => (
        <li key={tab} className={`tab ${currPageIndex === index ? 'active' : ''}`}>
          <button 
              onClick={() => {
                handleTabClick(index);
              }}>{tab}</button>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;