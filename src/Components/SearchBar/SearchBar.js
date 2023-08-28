import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
        </ul>
        </div>
        <div className="SearchBar-fields">
          <input  placeholder="Search Businesses" />
          <input  placeholder="Where?" />
        </div>
        <div></div>
    </div>
  )
};

export default SearchBar;