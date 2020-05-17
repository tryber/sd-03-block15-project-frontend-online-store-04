import React from 'react';

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
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

  addToCart() {
    const { total } = this.state;
    const { info } = this.props;
    const infoWithQuantity = { ...info, total };
    let storage = JSON.parse(localStorage.getItem('cart'));
    if (storage === null) {
      storage = [];
    }
    const newStorage = JSON.stringify([...storage, infoWithQuantity]);
    localStorage.setItem('cart', newStorage);
  }

  render() {
    const { total } = this.state;
    return (
      <div>
        <h1>Quantidade</h1>
        <button type="button" className="increment" onClick={() => this.decrease()}>-</button>
        {total}
        <button type="button" className="increment" onClick={() => this.increase()}>+</button>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={() => this.addToCart()}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default Increment;
