import React, { useState } from 'react';

const ServicesAndProducts = ({ addToCart }) => {
  const servicesAndProductsData = [
    { id: 1, name: 'ch1', type: 'Product', price: 50 },
    { id: 2, name: 'ch2', type: 'Product', price: 20 },
    { id: 3, name: 'ch3', type: 'Service', price: 0}
    // ... more items
  ];

  const [clickedProducts, setClickedProducts] = useState([]); // State to track clicked products

  const handleAddToCart = (item) => {
    // Update the clickedProducts state to include the clicked product's ID
    setClickedProducts([...clickedProducts, item.id]);
    addToCart(item);
  };

  const isProductClicked = (productId) => clickedProducts.includes(productId);

  return (
    <div className="services-products-container">
      <div className="service-product-list">
        {servicesAndProductsData.map(item => (
          <div className="service-product-card" key={item.id}>
            <h3 className="service-product-title">{item.name}</h3>
            <p className="service-product-price">${item.price}</p>
            <img
              src={require(`../images/${item.name}.png`).default} // Adjust the image path
              alt={item.name}
              className="service-product-image"
            />
            <button
              onClick={() => handleAddToCart(item)}
              className={`add-to-cart-button ${isProductClicked(item.id) ? 'greyed-out' : ''}`}
              disabled={isProductClicked(item.id)} // Disable the button if the product is clicked
            >
              {isProductClicked(item.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAndProducts;
