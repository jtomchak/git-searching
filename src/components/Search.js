import React, { Component } from "react";
import SearchInput from "./SearchInput"

import { getUsersBySearchTerm } from "../api";


class Search extends Component {
  state = {
    error: null,
    isLoading: false,
    searchTerm: ""
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
invoke success callback from partent to send gituser results
setState back to default, 💰
unless error, then set error! ⛔
*/
  handleSearchSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    getUsersBySearchTerm(this.state.searchTerm).then(response => {
      this.props.handleSuccess(response)
      this.setState({
        error: null,
        isLoading: false,
      })
    }).catch(err => {
      this.setState({ error: err, isLoading: false });
    })
  };

  render() {
    const { searchTerm, isLoading, error } = this.state;
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
          {error && <span style={{ color: 'red' }}>{error.message}</span>}
        </div>
      </div>
    );
  }
}


export default Search;
