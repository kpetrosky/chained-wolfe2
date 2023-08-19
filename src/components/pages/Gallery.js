import React from 'react'; // Import React

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default Gallery;
