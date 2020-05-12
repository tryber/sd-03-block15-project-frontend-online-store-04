import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <SearchBar />
      <Categories />
      
    );
  }
}

export default App;
