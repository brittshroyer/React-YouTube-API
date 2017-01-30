import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          className="col-md-8 col-md-offset-2"
          onKeyUp={ this.props.onSearchTermChanged }
          placeholder="Search for videos" />
      </div>
    );
  }
}

export default SearchBar;
