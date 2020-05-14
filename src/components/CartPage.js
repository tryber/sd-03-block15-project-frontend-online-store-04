import React from 'react';
import './CartPage.css'

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const cartProducts = JSON.parse(localStorage.getItem('products'));

    this.state = { selectedProducts: cartProducts };
  }

  createCardProducts(title, thumbnail, price, id, quantity) {
    return (

        <div key={id} className="sub-lista">
          <div>
            <img src={thumbnail} alt={title} />
          </div>
          <div data-testid="shopping-cart-product-name">{title}</div><br />
          <div data-testid="shopping-cart-product-quantity">Quantidade:{quantity}</div>
          <div><p>Preço:</p>{price}</div>
        </div>
    );
  }

  render() {
    const { selectedProducts } = this.state;
    console.log(selectedProducts);
    if (selectedProducts && selectedProducts.length !== 0) {
      return (
        <div className="lista">
          {selectedProducts.map(
            ({ title, thumbnail, price, id, quantity }) => {
              return this.createCardProducts(
                title,
                thumbnail,
                price,
                id,
                quantity,
              );
            },
          )}
        </div>
      );
    }
    return (
      <div>
        <section>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </section>
      </div>
    );
  }
}

export default CartPage;
