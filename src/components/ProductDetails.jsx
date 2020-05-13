import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

export default class ProductDetails extends Component() {
  render() {
    const { name, price, tecs, imgpath } = this.props;
    return (
      <section>
        <div>
          <h3 data-testid="product-detail-name">Nome do produto - {price}</h3>
          <img src={imgpath} alt={name} />
          <p>Especificação Tecnica</p>
          <p>{tecs}</p>
        </div>
        <ButtonCart />
      </section>
    );
  }
}
