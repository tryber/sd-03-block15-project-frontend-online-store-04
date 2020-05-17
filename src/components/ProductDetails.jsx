import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';
import Increment from './Increment';
import Rating from './Rating';
import ButtonCart from './ButtonCart';

export default class ProductDetails extends Component {
  render() {
    const {
      location: {
        state: {
          title, price, id, thumbnail,
          address, condition, available_quantity: avail,
        },
      },
    } = this.props;
    const { location: { state } } = this.props;

    return (
      <section>
        <div className="headerDetails">
          <div data-testid="product">
            <h3 data-testid="product-detail-name">{title}</h3>
            <h4>{id}</h4>
            <img src={thumbnail} alt={title} />
            <h4>{`Preço: R$ ${price}`}</h4>
            <p>{address.city_name}</p>
            <p>{condition}</p>
            <Increment quantity={avail} info={state} />
            <Link to="/"><button type="button">VOLTAR</button></Link>
            <Rating />
          </div>
        </div>
        <ButtonCart />
      </section>
    );
  }
}
