import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ButtonCart from './components/ButtonCart';
import CartPage from './components/CartPage';
import './App.css';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/cart" component={CartPage} />
            <Route path="/:id/details" component={ProductDetails} />
            <SearchBar path="/" component={SearchBar} />
            <ButtonCart />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
