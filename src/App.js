import React from 'react';
import './App.css';
import BusinessList from './Components/BusinessList/BusinessList';
import SearchBar from './Components/SearchBar/SearchBar';
import Yelp from './Util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp({term, location, sortBy}) {
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      this.setState({businesses: businesses})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Restaurant Recommender</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    )
  }
}

export default App;