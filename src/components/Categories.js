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
      <ul>
        {categories.map((category) => <li data-testid="category" key={category.id}>{category.name}</li>)}
      </ul>
    );
  }
}

export default Categories;
