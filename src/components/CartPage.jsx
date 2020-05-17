import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import CartItem from './CartItem';

function renderEmptyCartMessage() {
  return (
    <div className="empty-page">
      <div className="empty_content" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
      <Link to="/"><button type="button" className="back-button">VOLTAR</button></Link>
    </div>
  );
}

function renderOptionButtons() {
  return (
    <div className="option-buttons">
      <Link to="/"><button type="button">VOLTAR</button></Link>
      <Link data-testid="checkout-products" to="/checkout">
        <button type="button">FINALIZAR COMPRA</button>
      </Link>
    </div>
  );
}

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem('cart'));
    this.state = { arrayProducts: products };
  }

  componentDidMount() {
    const { arrayProducts } = this.state;
    localStorage.setItem('cart', JSON.stringify(arrayProducts));
    if (arrayProducts) {
      const totalItems = 1;
      localStorage.setItem('totalItems', totalItems);
    }
  }

  render() {
    const { arrayProducts } = this.state;
    if (arrayProducts && (arrayProducts.length !== 0)) {
      return (
        <div className="container">
          <h2 className="h2-fixo">Carrinho de compras: </h2>
          <div className="lista-pai">
            {arrayProducts.map((e) => (
              <CartItem
                key={e.title}
                title={e.title}
                total={e.total}
                price={e.price}
                thumbnail={e.thumbnail}
                quantity={e.available_quantity}
              />
            ))}
          </div>
          {renderOptionButtons()}
        </div>
      );
    }
    return (
      renderEmptyCartMessage()
    );
  }
}

export default CartPage;
