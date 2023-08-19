import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'; // Import the CSS file
import neckshrunk from '../images/neckshrunk.png';
import ch2 from "../images/ch2.png";
import ch3 from "../images/ch3.png";
import Home from "./Home";

const Gallery = ({ images }) => {
  const imageList = [neckshrunk, ch2, ch3]; // List of image sources

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Link key={index} to={`/image/${index}`} className="gallery-link">
          <div
            className="gallery-image"
            style={{ backgroundImage: `url(${imageList[index]})` }} // Use the correct image source
            aria-label={`Image ${index + 1}`}
          ></div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;


