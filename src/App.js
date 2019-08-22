import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import GitUserList from "./components/GitUserList";
import Pagination from "./components/Pagination";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.scss";

class App extends Component {

  state = {
    gitUsers: [],
    currentGitUsers: [],
    currentPage: null,
    totalPages: null,
    totalUsers: null
  }


  handleSearchSuccess = ({ json, headers }) => {
    console.log(parseLink(headers.get("Link")))
    const { items, total_count } = json;
    this.setState({
      gitUsers: items,
      totalUsers: total_count
    })
  }


  render() {
    const { gitUsers } = this.state;
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search handleSuccess={this.handleSearchSuccess}></Search>
        <ErrorBoundary>
          <Pagination />
          {gitUsers.length > 0 && <GitUserList gitUsers={gitUsers} />}
        </ErrorBoundary>
      </div>
    );
  }
}

function parseLink(s) {
  const output = {};
  const regex = /<([^>]+)>; rel="([^"]+)"/g;

  let m;
  while (m = regex.exec(s)) {
    const [_, v, k] = m;
    output[k] = v;
  }

  return output;
}
export default App;
