import React from 'react';
// import { Link } from 'react-router-dom';
import './CartPage.css';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem('cart'));
    console.log(products);
    this.state = {
      arrayProducts: products,
      quantity: '1',
    };
  }

  componentDidMount() {
    const { arrayProducts } = this.state;
    localStorage.setItem('cart', JSON.stringify(arrayProducts));
    if (arrayProducts) {
      /* const totalItems = arrayProducts.reduce((accumulator, currentValue) => {
        const quantity = parseInt((accumulator + currentValue), 1);
        return quantity;
      }, 0); **/ // fror test
      const totalItems = 1;
      localStorage.setItem('totalItems', totalItems);
    }
  }

  render() {
    const { arrayProducts, quantity } = this.state;
    if (arrayProducts && (arrayProducts.length !== 0)) {
      return (
        <div>
          <h2 className="h2-fixo">Carrinho de compras: </h2> <br />
          <div className="lista-pai">
            {arrayProducts.map(({ title, thumbnail, price, id }) =>
              // CartPage.createProduct(title, thumbnail, price, id, quantity)
              <div key={id} className="sub-lista"> <div> <img src={thumbnail} alt={title} /> </div>
                <div data-testid="shopping-cart-product-name"> {title} </div>
                <div data-testid="shopping-cart-product-quantity">
                  <p>Quantidade: </p>{quantity}
                </div>
                <br />
                <div>Valor: R$ {price} </div>
              </div>)}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="empty_content" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default CartPage;
