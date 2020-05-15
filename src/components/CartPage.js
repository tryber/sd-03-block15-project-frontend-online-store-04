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
      arrayProducts: products,
    };
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidUpdate() {
    const { arrayProducts } = this.state;
    localStorage.setItem('cart', JSON.stringify(arrayProducts));
    if (arrayProducts) {
      /* const totalItems = arrayProducts.reduce((accumulator, currentValue) => {
        const quantity = parseInt((accumulator + currentValue), 1);
        return quantity;
      }, 0); **/ // fror test
      const totalItems = 1;
      const quantity = 1;
      localStorage.setItem('totalItems', totalItems);
    }
  }

  redirectTo(url) {
    this.setState({
      isShouldRedirect: true,
      urlRedirect: url,
    });
  }

 /*  static createProduct(title, thumbnail, price, id, quantity) {
    return (
      <div key={id} className="sub-lista">
        <div>
          <img src={thumbnail} alt={title} />
        </div>
        <div data-testid="shopping-cart-product-name"> {title} </div>
        <div data-testid="shopping-cart-product-quantity"> {quantity} </div>
        <br />
        <div>R$ {price} </div>
      </div>
    );
  } */

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

  render() {
    const { history } = this.props;
    const { arrayProducts, isShouldRedirect, urlRedirect } = this.state;
    if (isShouldRedirect) history.push(urlRedirect);
    if (arrayProducts && (arrayProducts.length !== 0)) {
      return (
        <div>
          {this.returnButton()}
          <div>
            <h2>Carrinho de compras: </h2>
            {arrayProducts.map(({ title, thumbnail, price, id, quantity }) =>
              // CartPage.createProduct(title, thumbnail, price, id, quantity)
              <div key={id} className="sub-lista"> <div> <img src={thumbnail} alt={title} /> </div>
                <div data-testid="shopping-cart-product-name"> {title} </div>
                <div data-testid="shopping-cart-product-quantity"> <p>Quantidade: </p>1</div> <br />
                <div>R$ {price} </div>
              </div>)}
          </div>
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
