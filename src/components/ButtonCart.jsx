import React from 'react';
import { Link } from 'react-router-dom';
import cart from './cart.png';
import './ButtonCart.css';

function ButtonCart() {
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage === null) {
    storage = [];
  }
  console.log(storage);
  const totaltest = storage.length;
  console.log(totaltest);
  /* const total = storage.reduce((sum, e) => (sum + e.total), 0); */

  return (
    <div className="cart-info">
      <Link to="/cart">
        <img
          src={cart}
          width="70px"
          alt="cart-icon" data-testid="shopping-cart-button" className="img-cart"
        />
      </Link>
      <p>Produtos no Carrinho: </p>
      <div data-testid="shopping-cart-size" style={{color: 'rgb(47, 10, 65)'}}>{totaltest}</div>
    </div>
  );
}

export default ButtonCart;
