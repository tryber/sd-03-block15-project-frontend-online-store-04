import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import cart from './cart.png';

function ButtonCart() {
  return (
    <Router>
    <Link to="/CartPage">
      <button data-testid="shopping-cart-button">
        <img src={cart} width="70px" alt="cart-icon" />
      </button>
    </Link>
    </Router>
  );
}

export default ButtonCart;
