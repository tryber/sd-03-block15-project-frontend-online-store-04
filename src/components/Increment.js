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

  render() {
    const { total } = this.state;
    return (
      <div>
        <h1>Quantidade</h1>
        <button type="button" onClick={() => this.decrease()}>-</button>
        {total}
        <button type="button" onClick={() => this.increase()}>+</button>
        <button type="button">Adicionar ao Carrinho</button>
      </div>
    );
  }
}

export default Increment;
