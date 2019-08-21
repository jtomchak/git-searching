import React, { Component } from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import "./App.scss";

class App extends Component {
  state = {

  }


  render() {
    return (
      <div className="App">
        <HeroTitle
          title="Git Searching"
          subtitle="All your search are belong to us"
        />
        <Search />
      </div>
    );
  }
}

export default App;
