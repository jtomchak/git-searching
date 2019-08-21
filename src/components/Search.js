import React, { Component } from "react";
import SearchInput from "./SearchInput"

import { getUserBy } from "../api";


class Search extends Component {
  state = {
    isLoading: false,
    searchTerm: "",
    gitUsers: [],
    totalUsers: null
  };

  handleSearchInputOnChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  /* 
prevent submit from refreshing the page
set loading to true
fetch results from github api (async)
setState with results, 💰
*/
  handleSearchSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    getUserBy(this.state.searchTerm).then(response =>
      this.setState({
        isLoading: false,
        gitUsers: response.items,
        totalUsers: response.total_count
      })
    );
  };

  render() {
    const { searchTerm, isLoading } = this.state;
    // Set simple validation for searchterm length
    const isEnabled = searchTerm.length > 2;
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <SearchInput
            handleSubmit={this.handleSearchSubmit}
            handleInputOnChange={this.handleSearchInputOnChange}
            inputTerm={searchTerm}
            isLoading={isLoading}
            isEnabled={isEnabled} />
        </div>
      </div>
    );
  }
}

export default Search;
