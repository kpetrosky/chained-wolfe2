// App.js

import React from 'react';
import Header from './components/Header';
import Announcements from './components/pages/Announcements';
import About from './components/pages/About';
import Resources from './components/pages/Resources';
import TeacherClassroom from './components/pages/TeacherClassroom';
import Footer from './components/Footer'; // Import the Footer component

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('announcements');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* Main content section */}
      <main className="App-content">
        {/* Render the content based on the selected page */}
        {currentPage === 'announcements' && <Announcements />}
        {currentPage === 'About' && <About />}
        {currentPage === 'resources' && <Resources />}
        {currentPage === 'TeacherClassroom' && <TeacherClassroom />}
        {/* Render other components based on the selected page */}
      </main>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

export default App;
