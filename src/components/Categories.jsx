import React from 'react';
import * as api from '../services/api';
import './Categories.css';


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
    const { click } = this.props;
    return (
      <div className="categories">
        <h3>Categorias</h3>
        {categories.map((category) => (
          <button
            type="button"
            data-testid="category"
            key={category.id}
            value={category.name}
            onClick={() => click(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

export default Categories;
