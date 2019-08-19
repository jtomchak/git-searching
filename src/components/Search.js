import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: "",
    isLoading: false
  };

  handleSearchInputOnChange = event => {
    console.log(event.target);
    this.setState({
      searchTerm: event.target.value
    });
  };
  render() {
    const { searchTerm } = this.state;
    // Set simple validation for searchterm length
    const isEnabled = searchTerm.length > 2;
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="field has-addons is-expanded">
            <div className="control is-expanded">
              <input
                className="input is-large"
                type="text"
                placeholder="Find a User"
                value={searchTerm}
                onChange={this.handleSearchInputOnChange}
              />
            </div>
            <div className="control">
              <button disabled={!isEnabled} className="button is-info is-large">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
