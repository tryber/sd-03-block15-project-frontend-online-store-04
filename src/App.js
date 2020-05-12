import React from 'react';
import SearchBar from './components/SearchBar';

import './App.css';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <SearchBar />
      <Categories />
    );
  }
}

export default App;
