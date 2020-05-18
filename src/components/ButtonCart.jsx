import React from 'react';
import { Link } from 'react-router-dom';
import cart from './cart.png';
import './ButtonCart.css';

class ButtonCart extends React.Component {
  constructor(props) {
    super(props);
    const { total } = this.props;
    this.state = { total };
  }

  render() {
    const { total } = this.state;
    return (
      <div className="cart-info">
        <Link to="/cart">
          <img
            src={cart}
            width="70px"
            alt="cart-icon" data-testid="shopping-cart-button" className="img-cart"
          />
        </Link>
        <p>Produtos no Carrinho: </p>
        <div data-testid="shopping-cart-size">{total}</div>
      </div>
    );
  }
}

export default ButtonCart;
