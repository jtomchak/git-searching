import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import GitUserList from "./components/GitUserList"
import "./App.scss";

class App extends Component {
  state = {
    gitUsers: [],
    totalUsers: null
  }

  handleSearchSuccess = ({ items, total_count }) => {
    this.setState({
      gitUsers: items,
      totalUsers: total_count
    })
  }


  render() {
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search handleSuccess={this.handleSearchSuccess}></Search>
        <GitUserList gitUsers={this.state.gitUsers} />
      </div>
    );
  }
}

export default App;
