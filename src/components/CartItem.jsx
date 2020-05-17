import React from 'react';
import './CartPage.css';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { total } = this.props;
    this.state = { total };
  }

  decrease() {
    const { total } = this.state;
    if (total > 0) {
      this.setState((state) => ({ total: state.total - 1 }));
    }
  }

  increase() {
    const { quantity } = this.props;
    const { total } = this.state;
    if (total < quantity) {
      this.setState((state) => ({ total: state.total + 1 }));
    }
  }

  render() {
    const { total } = this.state;
    const { title, thumbnail, price } = this.props;
    return (
      <div className="cart-item">
        <img src={thumbnail} alt={title} />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => this.decrease(total)}
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{total}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => this.increase()}
        >
          +
        </button>
        <div>{`Valor: R$${price}`}</div>
      </div>
    );
  }
}

export default CartItem;
