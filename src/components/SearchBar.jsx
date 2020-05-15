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
      search: false,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({
      item: e.target.value,
      search: false,
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

  doSearch() {
    this.setState({ search: true });
  }

  render() {
    const { item, search } = this.state;
    return (
      <div>
        <div className="searchbar">
          <center>
            <input
              data-testid="query-input"
              type="text"
              className="input"
              onChange={this.changeValue}
            />
            {this.addText()}
          </center>
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
          <Categories />
          {search && <ProductList products={item} />}
        </div>
        <br />
      </div>
    );
  }
}

export default SearchBar;
