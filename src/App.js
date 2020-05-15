import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CartPage from './components/CartPage';
import './App.css';
import ProductDetails from './components/ProductDetails';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:id/details" component={ProductDetails} />
        </Switch>
        <div>
          <SearchBar />
          <Categories />
          <CartPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
