import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'; // Import the CSS file

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Link key={index} to={`/image/${index}`} className="gallery-link">
          <div
            className="gallery-image"
            style={{ backgroundImage: `url(${image})` }}
            aria-label={`Gallery Image ${index + 1}`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;



