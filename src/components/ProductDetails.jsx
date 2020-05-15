import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';
import Increment from './Increment';

export default class ProductDetails extends Component {
  render() {
    const { location: { state: { title, price, id, thumbnail, address, condition } } } = this.props;
    return (
      <section>
        <div className="headerDetails">
          {console.log(this.props)}
          <div data-testid="product">
            <h3 data-testid="product-detail-name">{title}</h3>
            <h4>{id}</h4>
            <img src={thumbnail} alt={title} />
            <h4>
              {`Preço: R$ ${price}`}
            </h4>
            <p>{address.city_name}</p>
            <p>{condition}</p>
            <Increment />
            <button type="button"><Link to="/">VOLTAR</Link></button>
          </div>
        </div>
      </section>
    );
  }
}
