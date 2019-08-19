import React from "react";

import Search from "./components/Search";
import HeroTitle from "./components/HeroTitle";
import "./App.scss";

function App() {
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

export default App;
