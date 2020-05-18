import React, { Component } from 'react';
import cart2 from './carrinho.png';

class ButtonListing extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Adicionar ao Carrinho' };
    this.addCart = this.addCart.bind(this);
  }

  addCart() {
    this.setState({ text: 'Produto Adicionado' });
    const { product } = this.props;
    const getCart = JSON.parse(localStorage.getItem('cart'));
    if (!getCart) {
      product.quantity = 1;
      return localStorage.setItem('cart', JSON.stringify([{ ...product, total: 1 }]));
    }
    const verifyItem = getCart.find((item) => item.id === product.id);
    if (verifyItem) {
      const index = getCart.indexOf(verifyItem);
      if (verifyItem.quantity === 'undefined') getCart[index].total = 1;
      else getCart[index].total += 1;

      return localStorage.setItem('cart', JSON.stringify(getCart));
    }
    product.quantity = 1;
    return localStorage.setItem('cart', JSON.stringify([...getCart, { ...product, total: 1 }]));
  }

  render() {
    const { text } = this.state;
    return (
      <button
        type="button"
        onClick={this.addCart}
        data-testid="product-add-to-cart"
        className="button-add"
      >
        {text}
        <img src={cart2} width="20px" alt="cart-icon" />
      </button>
    );
  }
}

export default ButtonListing;
