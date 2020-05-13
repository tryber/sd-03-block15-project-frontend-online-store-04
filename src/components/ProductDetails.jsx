import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

export default class ProductDetails extends Component() {
  render() {
    return (
      <section>
        <div>
          <h3 data-testid="product-detail-name">Nome do produto - {this.props.price}</h3>
          <img src={this.props.imgpath} alt={this.props.name} />
          <p>Especificação Tecnica</p>
          <p>{this.props}</p>
        </div>
        <ButtonCart />
      </section>
    );
  }
}
