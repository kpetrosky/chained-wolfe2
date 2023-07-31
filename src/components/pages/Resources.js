import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',      // Display the list items horizontally
    listStyle: 'none',    // Remove the default list styles (bullets)
    padding: 0,           // Remove any padding
  };

  const listItemStyle = {
    margin: '0 10px',     // Add some space between list items
  };

  return (
    <nav>
      <ul style={headerStyle}>
      <li style={listItemStyle}><a href="#gallery">Gallery</a></li>
        <li style={listItemStyle}><a href="#contact">Contact</a></li>
        <li style={listItemStyle}><a href="#cart">Cart</a></li>
        <li style={listItemStyle}><a href="#payment">Payment Options</a></li>
      </ul>
    </nav>
  );
};

export default Header;
