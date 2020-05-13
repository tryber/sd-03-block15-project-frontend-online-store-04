import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';
import ButtonDetailed from './components/ButtonDetailed';
import ButtonListing from './components/ButtonListing';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartPage />
        <ButtonDetailed />
        <ButtonListing />
      </div>
    );
  }
}

export default App;
