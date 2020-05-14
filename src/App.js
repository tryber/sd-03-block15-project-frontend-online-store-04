import React from 'react';
import SearchBar from './components/SearchBar';
import { Switch, Route } from 'react-router-dom';
import Categories from './components/Categories';
import ButtonCart from './components/ButtonCart';
import CartPage from './components/CartPage';

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/cart" component={CartPage} />
        </Switch>
        
        <SearchBar />
        <ButtonCart />
        <Categories />
      </div>
    );
  }
}

export default App;
