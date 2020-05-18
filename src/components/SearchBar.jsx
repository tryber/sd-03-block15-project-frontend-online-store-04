import React from 'react';
import './SearchBar.css';
import ProductList from './ProductList';
import ButtonCart from './ButtonCart';
import Categories from './Categories';

function addText() {
  return (
    <p data-testid="home-initial-message" className="texto-pesquisa">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );
}

function getTotal() {
  let storage = JSON.parse(localStorage.getItem('cart'));
  if (storage === null) {
    storage = [];
  }
  const total = storage.reduce((sum, e) => (sum + e.total), 0);
  return total;
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      category: '',
      search: false,
      searchWithCategory: false,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  getCategory(categoryId) {
    this.setState({
      category: categoryId,
      search: false,
      searchWithCategory: true,
    });
  }

  doSearch() {
    this.setState({
      search: true,
      searchWithCategory: false,
    });
  }

  changeValue(e) {
    this.setState({
      item: e.target.value,
      search: false,
    });
  }

  renderSearchBar() {
    return (
      <center>
        <input
          data-testid="query-input"
          type="text"
          className="input"
          onChange={this.changeValue}
        />
        {addText()}
      </center>
    );
  }

  render() {
    const { item, search, searchWithCategory, category } = this.state;
    return (
      <div>
        <div className="top-bar">
          <div className="div-logo">
            <span className="logo">F.H.R</span>
            <span className="sub-logo">LOJA VIRTUAL</span>
          </div>
          <div className="searchbar">
            {this.renderSearchBar()}
            <button
              data-testid="query-button"
              type="button"
              onClick={() => this.doSearch()}
            >
              PESQUISAR
            </button>
          </div>
          <ButtonCart className="cart-icon" cartItems={getTotal()} />
        </div>
        <div className="product-sidebar">
          <div className="aside-categoria">
            <h3>Ou selecione uma categoria:</h3>
            <Categories click={(event) => this.getCategory(event)} />
          </div>
          {search && <ProductList item={item} />}
          {searchWithCategory && <ProductList category={category} item={item} />}
        </div>
      </div>
    );
  }
}

export default SearchBar;
