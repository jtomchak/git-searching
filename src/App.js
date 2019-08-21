import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import GitUserList from "./components/GitUserList";
import Pagination from "./components/Pagination";
import "./App.scss";

class App extends Component {
  state = {
    gitUsers: [],
    currentGitUsers: [],
    currentPage: null,
    totalPages: null,
    totalUsers: null
  }

  handleSearchSuccess = ({ items, total_count, headers }) => {
    console.log(headers.get('Link'))
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
        <Pagination />
        <GitUserList gitUsers={this.state.gitUsers} />
      </div>
    );
  }
}

export default App;
