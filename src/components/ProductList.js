import React from 'react';

class ProductList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = this.props.products;
  // }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => <p>{product}</p>)}
      </div>
    );
  }
}

export default ProductList;
