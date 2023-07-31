// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="/images/butterfly.png" // Correct image path from the public directory
        alt="SteamPowered Butterfly Logo" // Add an alt attribute for accessibility
        style={{ width: '100px', height: 'auto' }} // Set the width to 100px and auto-adjust height
      />
      SteamPowered Butterfly 2023
    </footer>
  );
};

export default Footer;
