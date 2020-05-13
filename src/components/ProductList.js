import React from 'react';
import * as api from '../services/api';
import '../ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const { products } = this.props;
    api.getProductsFromCategoryAndQuery('', products)
      .then((result) => {
        this.setState({ products: result.results });
      });
  }

  render() {
    const { products } = this.state;
    if (products.length === 0) {
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
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
