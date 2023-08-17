import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalNavBar.css'; // Import the CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/servicesAndProducts">Services and Products</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
       
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
