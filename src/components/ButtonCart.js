import React from 'react';
import { Link } from 'react-router-dom';
import cart from './cart.png';

function ButtonCart() {
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage === null) {
    storage = [];
  }
  const total = storage.reduce((sum, e) => (sum + e.total), 0);

  return (
    <div>
      <Link to="/cart">
        <img src={cart} width="70px" alt="cart-icon" data-testid="shopping-cart-button" />
      </Link>
      <div data-testid="shopping-cart-size">{total}</div>
    </div>
  );
}

export default ButtonCart;
