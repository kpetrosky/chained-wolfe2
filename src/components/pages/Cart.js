import React from 'react';
import './Cart.css';

const Cart = ({ selectedProducts, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {selectedProducts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
