import React from 'react';
import './Home.css';
import metalCraftsImage from '../images/white shrunk.png'; // Replace with your image path

export function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Chained Wolfe MetalCrafts</h1>
      <p>This is the homepage content.</p>
      <img src={metalCraftsImage} alt="MetalCrafts" />
    </div>
  );
}
