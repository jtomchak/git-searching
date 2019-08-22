import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import GitUserList from "./components/GitUserList";
import Pagination from "./components/Pagination";
import TotalUsers from "./components/TotalUsers";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.scss";

class App extends Component {

  state = {
    gitUsers: [],
    totalUsers: null,
    paginationLinks: {}
  }


  handleSearchSuccess = ({ json, headers }) => {
    const { items, total_count } = json;
    this.setState({
      gitUsers: items,
      totalUsers: total_count,
      paginationLinks: parseLink(headers.get('Link'))
    })
  }


  render() {
    const { gitUsers, totalUsers, paginationLinks } = this.state;
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search handleSuccess={this.handleSearchSuccess}></Search>
        <ErrorBoundary>
          <TotalUsers users={totalUsers} />
          <Pagination links={paginationLinks} handleSuccess={this.handleSearchSuccess} />
          {gitUsers.length > 0 && <GitUserList gitUsers={gitUsers} />}
        </ErrorBoundary>
      </div>
    );
  }
}


/**
 * Takes 'link' headers from an API response and gives us back a nice object with
 * with available urls for pagination from that response. 
 * https://gist.github.com/niallo/3109252#gistcomment-3003309
 * @param {*} s
 * @returns
 */
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
