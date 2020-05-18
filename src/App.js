import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CartPage from './components/CartPage';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/cart" component={CartPage} />
            <Route path="/:id/details" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/" component={SearchBar} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
