import React from 'react';
import './SearchBar.css';
import ProductList from './ProductList';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';

function addText() {
  return (
    <p data-testid="home-initial-message" className="texto-pesquisa">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );
}
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      category: '',
      search: false,
      searchWithCategory: false,
      categories: [],
    };
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((result) => this.setState({ categories: result }));
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

  renderCategories() {
    const { categories } = this.state;
    return (
      categories.map((el) => (
        <div className="categories">
          <button
            type="button"
            data-testid="category"
            key={el.id}
            value={el.name}
            onClick={() => this.getCategory(el.id)}
          >
            {el.name}
          </button>
        </div>
      )));
  }

  render() {
    const { item, search, searchWithCategory, category } = this.state;
    return (
      <div>
        <div className="top-bar">
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
          <ButtonCart className="cart-icon" />
        </div>
        <div className="product-sidebar">
          {/* <Categories click={(event) => this.getCategorie(event)} /> */}
          <div className="aside-categoria">
            <h3>Ou selecione uma categoria:</h3>
            {this.renderCategories()}
          </div>
          {search && <ProductList item={item} />}
          {searchWithCategory && <ProductList category={category} item={item} />}
        </div>
      </div>
    );
  }
}

export default SearchBar;
