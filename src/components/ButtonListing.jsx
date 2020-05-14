import React from 'react';
import './ButtonListing.css';
import cart2 from './carrinho.png';

class ButtonListing extends React.Component {
  constructor(props) {
    super(props);

    this.intoCart = this.intoCart.bind(this);
  }

  intoCart() {
    const { product } = this.props;

    const itemsTotal = parseInt(localStorage.getItem('itemsTotal'), 10);

    if (localStorage.getItem('products') === 0 || !localStorage.products) {
      localStorage.setItem('itemsTotal', itemsTotal + 1);
      localStorage.setItem('products', JSON.stringify([product]));
    }

    const products = JSON.parse(localStorage.getItem('products'));

    if (localStorage.products.includes(product.id)) {
      const index = products.findIndex((item) => item.id === product.id);
      products[index].quantity += 1;
      localStorage.setItem('itemsTotal', itemsTotal + 1);
      localStorage.setItem('products', JSON.stringify(products));
    }

    localStorage.setItem('itemsTotal', itemsTotal + 1);
    localStorage.setItem('products', JSON.stringify([...products, product]));
  }

  render() {
    return (
      <div className="content">
        <button
          data-testid="product-add-to-cart"
          className="button-add"
          onClick={this.intoCart}
        >
          Adicionar ao carrinho <img src={cart2} width="20px" alt="cart-icon" />
        </button>
      </div>
    );
  }
}

export default ButtonListing;
