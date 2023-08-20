import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/pages/Home';
import ServicesAndProducts from './Components/pages/ServicesAndProducts';
import Cart from './Components/pages/Cart';
import VerticalNavBar from './Components/pages/VerticalNavBar';
import Header from './Components/Header';
import Gallery from './Components/pages/Gallery';
import ch1 from './Components/images/ph2.png';
import ch2 from './Components/images/ph2.png';
import ch3 from './Components/images/ph2.png';

import Footer from './Components/Footer';
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
          <Route
            path="/gallery"
            element={ 
              <Gallery
                images={[
                  ch1,
                  ch2,
                  ch3,
                  // ...more image URLs
                ]}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
