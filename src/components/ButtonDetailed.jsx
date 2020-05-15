import React from 'react';
import './ButtonDetailed.css';
import cart2 from './carrinho.png';

class ButtonDetailed extends React.Component {

  constructor(props) {
    super(props);

    this.state = { amount: 1 };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({ amount: e.target.value });
  }

  render() {
    return (
      <div className="content">
        <span className="quantidade">Quantidade:</span>
        <input
          type="number"
          min="1"
          className="input-number"
          onChange={this.changeValue}
        />
        <button data-testid="product-detail-add-to-cart" className="button-add-detailed">
          <img src={cart2} width="20px" alt="cart-icon" />
        </button>
      </div>
    );
  }
}

export default ButtonDetailed;

