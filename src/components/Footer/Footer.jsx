import React from 'react';
import './Footer.css';

const Footer = ({ personalInfo }) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></p>
        <p><strong>Address:</strong> {personalInfo.address}</p>
      </div>
      <div className="footer-extra">
        <p>Thanks for visiting!</p>
        <p>Made with ❤️ by {personalInfo.name}</p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;