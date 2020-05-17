import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';


function renderForm() {
  return (
    <form>
      <label htmlFor="name">
        Nome Completo:
        <input id="name" data-testid="checkout-fullname" />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" data-testid="checkout-email" />
      </label>
      <label htmlFor="cpf">
        CPF:
        <input id="cpf" data-testid="checkout-cpf" />
      </label>
      <label htmlFor="phone-number">
        Telefone:
        <input id="phone-number" data-testid="checkout-phone" />
      </label>
      <label htmlFor="zip">
        CEP:
        <input id="zip" data-testid="checkout-cep" />
      </label>
      <label htmlFor="address">
        Endereço:
        <input id="address" data-testid="checkout-address" />
      </label>
    </form>
  );
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount() {
    this.renderTotal();
  }

  calculateTotal(total, price) {
    const finalValue = total * price;
    this.setState((state) => ({ total: state.total + finalValue }));
  }

  renderTotal() {
    const storage = JSON.parse(localStorage.getItem('cart'));
    const FinalValue = (storage.reduce((sum, e) => (sum + (e.total * e.price)), 0).toFixed(2));
    this.setState(() => ({ total: FinalValue }));
  }

  render() {
    const storage = JSON.parse(localStorage.getItem('cart'));
    const { total } = this.state;
    return (
      <div>
        <div className="list">
          <div className="list-child">
            {storage.map((e) => (
              <div key={e.title}>
                <div>
                  <span>{e.title}</span>
                  <span>{e.total}</span>
                  <span>{e.price}</span>
                </div>
              </div>
            ))}

          </div>
          <div className="total">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>
        {renderForm()}
        <Link to="/"><button type="button">VOLTAR</button></Link>
      </div>
    );
  }
}

export default Checkout;
