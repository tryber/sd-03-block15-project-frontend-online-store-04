import React from 'react';
import './App.css';
import Categories from './components/Categories';
import CartPage from './components/CartPage';

class App extends React.Component {
  render() {
    return (
      <main>
        <Categories />
        <CartPage />
      </main>
    );
  }
}

export default App;
