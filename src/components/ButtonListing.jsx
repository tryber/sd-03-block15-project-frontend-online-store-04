import React, { Component } from 'react';
import cart2 from './carrinho.png';

class ButtonListing extends Component {
  constructor(props) {
    super(props);

    this.addCart = this.addCart.bind(this);
  }
  addCart() {
    const { product } = this.props;
    const getCart = JSON.parse(localStorage.getItem('cart'));
    if (!getCart) {
      product.quantity = 1;
      return localStorage.setItem('cart', JSON.stringify([{ ...product }]));
    }
    const verifyItem = getCart.find((item) => item.id === product.id);
    if (verifyItem) {
      const index = getCart.indexOf(verifyItem);
      verifyItem.quantity === 'undefined' ? getCart[index].quantity = 1 : getCart[index].quantity += 1;
      return localStorage.setItem('cart', JSON.stringify(getCart));
    }
    product.quantity = 1;
    return localStorage.setItem('cart', JSON.stringify([...getCart, { ...product }]));
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.addCart}
        data-testid="product-add-to-cart"
        className="button-add"
      >
        Adicionar ao Carrinho <img src={cart2} width="20px" alt="cart-icon" />
      </button>
    );
  }
}

export default ButtonListing;
