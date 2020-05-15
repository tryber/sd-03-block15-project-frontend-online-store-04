import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartPage />
        <ProductDetails />
      </div>
    );
  }
}

export default App;
