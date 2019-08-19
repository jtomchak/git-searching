import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <div className="field has-addons is-expanded">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                placeholder="Find a repository"
              />
            </div>
            <div className="control">
              <a className="button is-info is-large">Search</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
