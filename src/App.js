import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Categories />
        <CartPage />
      </div>
    );
  }
}

export default App;
