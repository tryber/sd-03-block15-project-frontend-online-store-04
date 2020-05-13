import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';
import ButtonDetailed from './components/ButtonDetailed';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartPage />
        <ButtonDetailed />
      </div>
    );
  }
}

export default App;
