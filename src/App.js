import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import "./App.scss";

class App extends Component {
  state = {
    isLoading: false
  };

  handleOnClickSearch = searchTerm => {
    console.log(searchTerm);
  };
  render() {
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search onSearch={this.handleOnClickSearch} />
      </div>
    );
  }
}

export default App;
