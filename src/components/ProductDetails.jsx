import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import './ProductDetails.css';

export default class ProductDetails extends Component() {
  render() {
    const { title, price, tecs, thumbnail } = this.props;
    return (
      <section>

        <div className="headerDetails">
          <p>Botão voltar</p>
          <ButtonCart />
        </div>

        <div className="productContainer">

          <div className="imgContainer">
            <h3 data-testid="product-detail-name">Nome do produto - {price}</h3>
            <img src={thumbnail} alt={title} />
          </div>

          <div className="specs">
            <p>Especificação Tecnica</p>
            <p>{tecs}</p>
          </div>

        </div>

      </section>
    );
  }
}
