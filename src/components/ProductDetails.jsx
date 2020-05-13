import React, { Component } from 'react';
import ButtonCart from './ButtonCart';
import './ProductDetails.css';

export default class ProductDetails extends Component() {
  render() {
    const { name, price, tecs, imgpath } = this.props;
    return (
      <section>

        <div className="headerDetails">
          <ButtonCart />
        </div>

        <div className="productContainer">

          <div className="imgContainer">
            <h3 data-testid="product-detail-name">Nome do produto - {price}</h3>
            <img src={imgpath} alt={name} />
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
