import React from 'react';
import ButtonCart from './ButtonCart';

class CartPage extends React.Component {
  render() {
    return (
      <section>
        <ButtonCart />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default CartPage;
