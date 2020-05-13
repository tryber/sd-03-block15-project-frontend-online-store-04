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
        {products.map((product) => (
          <div>
            <p>{product}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default ProductList;
