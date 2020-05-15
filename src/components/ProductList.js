import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import '../ProductList.css';


class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showProducts: false,
    };
  }

  componentDidMount() {
    const { products } = this.props;
    api.getProductsFromCategoryAndQuery('', products)
      .then((result) => {
        this.setState({
          products: result.results,
          showProducts: true,
        });
      });
  }

  render() {
    const { products, showProducts } = this.state;
    if (products.length === 0 && showProducts === true) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product" data-testid="product">
            <p className="search-result">{product.title}</p>
            <img src={product.thumbnail} alt="foto" />
            <p>
              R$
              {product.price}
            </p>
            <button type="button"><Link to={`/${product.id}/details`}>VER DATALHES</Link></button>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
