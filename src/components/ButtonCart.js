import React from 'react';
import { Link } from 'react-router-dom';
import cart from './cart.png';

function ButtonCart() {
  return (
    <Link to="/cart">
      <button data-testid="shopping-cart-button">
        <img src={cart} width="70px" alt="cart-icon" />
      </button>
    </Link>
  );
}

export default ButtonCart;
