import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import './ProductList.css';
import ButtonListing from './ButtonListing';

function renderButton(id, product) {
  console.log(this);
  return (
    <button
      type="button"
    >
      <Link
        className="link-detalhes"
        data-testid="product-detail-link"
        to={{
          pathname: `/${id}/details`,
          state: product,
        }}
      >
        VER DATALHES
      </Link>
    </button>
  );
}
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showProducts: false,
    };
  }

  componentDidMount() {
    const { category, item } = this.props;
    api.getProductsFromCategoryAndQuery(category, item)
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
            {product.shipping.free_shipping && <p data-testid="free-shipping">Frete Grátis</p>}
            {renderButton(product.id, product)}
            <ButtonListing product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
