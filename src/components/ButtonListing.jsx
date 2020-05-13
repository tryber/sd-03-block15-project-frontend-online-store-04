import React from 'react';
import './ButtonListing.css';
import cart2 from './carrinho.png';

class ButtonListing extends React.Component {

  render() {
    return (
      <div className="content">
        <button data-testid="product-add-to-cart" className="button-add">
          Adicionar ao carrinho <img src={cart2} width="20px" alt="cart-icon" />
        </button>
      </div>
    );
  }
}

export default ButtonListing;
