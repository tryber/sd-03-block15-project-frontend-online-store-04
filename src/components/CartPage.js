import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem('cart'));
    this.state = {
      isShouldRedirect: false,
      urlRedirect: '',
      productsArr: products,
    };
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidUpdate() {
    const { productsArr } = this.state;
    localStorage.setItem('cart', JSON.stringify(productsArr));
    if (productsArr) {
      const totalItems = productsArr.reduce((acc, cur) => {
        const quantity = parseInt((cur.quantity), 10);
        return acc + quantity;
      }, 0);
      localStorage.setItem('totalItems', totalItems);
    }
  }

  redirectTo(url) {
    this.setState({
      isShouldRedirect: true,
      urlRedirect: url,
    });
  }

  createProductInfos(title, thumbnail, price, id, quantity) {
    return (
      <div key={id} className="sub-lista">
        <div>
          <img src={thumbnail} alt={`imagem de um ${title}`} />
        </div>
        <div data-testid="shopping-cart-product-name"> {title} </div>
        <div data-testid="shopping-cart-product-quantity"> {quantity} </div>
        <br />
        <div>R$ {price} </div>
      </div>
    );
  }

  returnButton() {
    return (
      <div>
        <button
          label="return"
          type="button"
          onClick={() => this.redirectTo('/')}
          className="return-button"
        >
          Retornar
        </button>
      </div>
    );
  }

  checkoutButton = () => {
    return (
      <Link to="/compra-finalizada">
        <button>
          Finalizar compra
        </button>
      </Link>
    );
  }

  totalPrice = () => {
    // teste
    return (
      <div>
        <h2>Valor total:
        </h2>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    const { productsArr, isShouldRedirect, urlRedirect } = this.state;
    if (isShouldRedirect) history.push(urlRedirect);
    if (productsArr && (productsArr.length !== 0)) {
      return (
        <div>
          {this.returnButton()}
          <div>
            <h2>Carrinho de compras: </h2>
            {productsArr.map(({ title, thumbnail, price, id, quantity }) =>
              this.createProductInfos(title, thumbnail, price, id, quantity))}
          </div>
          <div>
            {this.totalPrice()}
          </div>
          {this.checkoutButton()}
        </div>
      );
    }
    return (
      <div>
        {this.returnButton()}
        <div className="empty_content" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default CartPage;
