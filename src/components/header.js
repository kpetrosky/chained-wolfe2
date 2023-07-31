import React from 'react';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="App-header">
      <div className="header-container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              onClick={() => handlePageChange('announcements')}
              className={currentPage === 'announcements' ? 'nav-link active' : 'nav-link'}
            >
              🧡Announcements
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handlePageChange('about')}
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
            >
              🧐About
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => handlePageChange('resources')}
              className={currentPage === 'resources' ? 'nav-link active' : 'nav-link'}
            >
              🐶Resources
            </button>
          </li>
          {/* Add more buttons for other pages */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
