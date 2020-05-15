import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';
import Rating from './components/Rating';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartPage />
        <Rating />
      </div>
    );
  }
}

export default App;
