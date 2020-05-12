import React from 'react';
import * as api from '../services/api.js';
import './SearchBar.css';

class SearchBar extends React.Component {
  
  // verifica se ta pegando os dados:
  // api.getCategories().then(categories => { console.log(categories) });

  constructor(props) {
    super(props);

    this.state = {
      item: ''
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({ item: e.target.value });
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
    return <p className="texto-pesquisa">{item}</p>;
  }

  render() {
    return (
      <div>
        <center>
          <input
            type="text"
            className="input"
            onChange={this.changeValue}
          />
          {this.addText()}
        </center>
        <br />
      </div>
    );
  }
}

export default SearchBar;