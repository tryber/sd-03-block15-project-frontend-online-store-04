import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import cart from './cart.png';

function ButtonCart() {
  return (
    <Router>
      <Link to="/CartPage">
        <img data-testid="shopping-cart-button" src={cart} width="70px" alt="cart-icon" />
      </Link>
    </Router>
  );
}

export default ButtonCart;
