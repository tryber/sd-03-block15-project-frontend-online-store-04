import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ButtonCart from './components/ButtonCart';
import CartPage from './components/CartPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/cart" component={CartPage} />
          </Switch>
          <Link to="/cart" data-testid="shopping-cart-button">
            <ButtonCart />
          </Link>
        </Router>

        <SearchBar />
        
        <Categories />
      </div>
    );
  }
}

export default App;
