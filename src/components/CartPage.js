import React from 'react';
// import * as api from '../services/api';
import cart from './cart.png';

class CartPage extends React.Component {
  render() {
    return (
      <section>
        <button name-testid="shopping-cart-button">
          <img src={cart} width="70px" alt="cart-icon" />
        </button>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default CartPage;
