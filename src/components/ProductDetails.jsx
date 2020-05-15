import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from './ButtonCart';
import './ProductDetails.css';
import Increment from './Increment';

export default class ProductDetails extends Component {
  render() {
    const { title, price, id, thumbnail } = this.props;
    return (
      <section>
        <div className="headerDetails">
          <p>Botão voltar</p>
          <ButtonCart />
        </div>

        <div data-testid="product">
          <h3>{title}</h3>
          <h4>{id}</h4>
          <img src={thumbnail} alt={title} />
          <h4>
            {`Preço: R$ ${price}`}
          </h4>
          {/* <h4>
            {`Quantidade disponível: ${availableQuantity}`}
          </h4>
          {freeShipping && <h6 data-testid="free-shipping">FRETE GRÁTIS</h6>}
          {this.addToCartButton()} */}
          <Increment />
        </div>

      </section>
    );
  }
}
