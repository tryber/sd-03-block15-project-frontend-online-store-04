import React from 'react';
import './App.css';
import Categories from './components/Categories';
import ProductList from './components/ProductList';

class App extends React.Component {


  render() {
    const teste = ['banana', 'laranja'];
    return (
      <div>
        <Categories />
        <ProductList products={teste} />
      </div>
    );
  }
}

export default App;
