import React from 'react';
import Gallery from './Gallery';

const ServicesAndProducts = ({ addToCart }) => {
  const servicesAndProductsData = [
    { id: 1, name: 'ch1', type: 'Service', price: 50 },
    { id: 2, name: 'ch2', type: 'Product', price: 20 },
    // ... more items
  ];

  const galleryImages = [
    '../components/page/images/ch1.jpg', // Adjust the relative path
    '../images/ch2.jpg', // Adjust the relative path
    '../images/ch3.jpg', // Adjust the relative path
    // ... add more image paths
  ];

  return (
    <div className="services-products-container">
      <Gallery images={galleryImages} />
      <div className="service-product-list">
        {servicesAndProductsData.map(item => (
          <div className="service-product-card" key={item.id}>
            <h3 className="service-product-title">{item.name}</h3>
            <p className="service-product-price">${item.price}</p>
            <img
              src={require(`../images/${item.name}.jpg`).default} // Adjust the image path
              alt={item.name}
              className="service-product-image"
            />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAndProducts;
