import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import "./App.scss";

import { getUserBy } from "./api";

class App extends Component {
  state = {
    isLoading: false,
    gitResults: {
      users: [],
      totalCount: 0
    }
  };

  /* 
  set loading to true
  fetch results from github api
  setState with results, 💰
*/
  handleOnClickSearch = searchTerm => {
    this.setState({ isLoading: true });
    getUserBy(searchTerm).then(response =>
      this.setState({
        isLoading: false,
        gitResults: {
          users: response.items,
          totalCount: response.total_count
        }
      })
    );
  };
  render() {
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search
          onSearch={this.handleOnClickSearch}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
