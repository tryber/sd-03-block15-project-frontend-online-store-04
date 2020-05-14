import React from 'react';
import * as api from '../services/api';


class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories()
      .then((result) => this.setState({ categories: result }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3>Categorias</h3>
        <ul>
          {categories.map((category) => (
            <li
              data-testid="category"
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
