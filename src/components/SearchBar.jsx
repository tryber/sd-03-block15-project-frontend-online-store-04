import React from 'react';
import './SearchBar.css';
import ProductList from './ProductList';
import Categories from './Categories';
import ButtonCart from './ButtonCart';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      category: '',
      search: false,
      searchCategory: false,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  getCategorie(category) {
    this.setState({
      category,
      search: false,
      searchCategory: true,
    });
  }

  doSearch() {
    this.setState({
      search: true,
      searchCategory: false,
    });
  }

  addText() {
    const { item } = this.state;
    if (item === '') {
      return (
        <p data-testid="home-initial-message" className="texto-pesquisa">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      );
    }
    return <p className="texto-pesquisa-null">{item}</p>;
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
        {this.addText()}
      </center>
    );
  }

  render() {
    const { item, search, searchCategory, category } = this.state;
    return (
      <div>
        <div className="searchbar">
          {this.renderSearchBar()}
          <button
            data-testid="query-button"
            type="button"
            onClick={() => this.doSearch()}
          >
            PESQUISAR
          </button>
          <ButtonCart />
        </div>
        <div className="product-sidebar">
          <Categories click={(event) => this.getCategorie(event)} />
          {searchCategory && <ProductList category={category} />}
          {search && <ProductList item={item} />}
        </div>
      </div>
    );
  }
}

export default SearchBar;
