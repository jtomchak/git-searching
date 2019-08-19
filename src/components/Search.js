import React, { Component } from "react";

class Search extends Component {
  state = {
    searchTerm: "",
    isLoading: false
  };

  handleSearchInputOnChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  //call props 'onSearch' to pass searchTerm Value to parent
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    // Set simple validation for searchterm length
    const isEnabled = searchTerm.length > 2;
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form
            className="field has-addons is-expanded"
            onSubmit={this.handleSearchSubmit}
          >
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
              <button
                disabled={!isEnabled}
                className={`button is-info is-large ${
                  this.props.isLoading ? "is-loading" : ""
                }`}
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
