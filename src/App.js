import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/pages/Home';
import ServicesAndProducts from './Components/pages/ServicesAndProducts';
import Cart from './Components/pages/Cart';
import VerticalNavBar from './Components/pages/VerticalNavBar';
import Header from './Components/Header';
import Gallery from './Components/pages/Gallery'; // Import the Gallery component
import './App.css';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = selectedProducts.filter((item) => item.id !== product.id);
    setSelectedProducts(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <VerticalNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesAndProducts" element={<ServicesAndProducts addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart selectedProducts={selectedProducts} removeFromCart={removeFromCart} />}
          />
          {/* Add a route for the Gallery */}
          <Route
            path="/gallery"
            element={
              <Gallery
                images={[
                  '/images/ch1.jpg',
                  '/images/ch2.jpg',
                  '/images/ch3.jpg',
                  // ...more image URLs
                ]}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
