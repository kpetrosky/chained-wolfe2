import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SteamPowered Designs. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/">Home</a>
        
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
