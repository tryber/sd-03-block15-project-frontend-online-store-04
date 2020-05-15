import React from 'react';
import cart from './cart.png';

function ButtonCart() {
  return (
      <button data-testid="shopping-cart-button">
        <img src={cart} width="70px" alt="cart-icon" />
      </button>
  );
}

export default ButtonCart;
