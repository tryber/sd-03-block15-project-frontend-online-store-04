import React, { Component } from 'react';
import cart2 from './carrinho.png';

class ButtonListing extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.quantityCheck = this.quantityCheck.bind(this);
  }
  addToCart() {
    const { product } = this.props;
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else if (this.quantityCheck()) {
      const products = JSON.parse(localStorage.getItem('cart'));
      localStorage.setItem('cart', JSON.stringify([...products, product]));
    } else {
      console.log('estoque esgotado');
    }
  }

  quantityCheck() {
    const { product } = this.props;
    const products = JSON.parse(localStorage.getItem('cart')).filter((i) => i.id === product.id);
    const quantity = product.available_quantity;
    return (products.length < quantity);
  }

  render() {
    return (
      <button type="button" onClick={this.addToCart} data-testid="product-add-to-cart" className="button-add">
        Adicionar ao Carrinho <img src={cart2} width="20px" alt="cart-icon" />
      </button>
    );
  }
}

export default ButtonListing;
