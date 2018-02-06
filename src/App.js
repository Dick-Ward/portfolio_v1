import React, { Component } from "react";
import Splash from "./components/Splash";
import Bio from "./components/Bio";
import CurrentProject from "./components/CurrentProject";
import ProjectList from "./components/ProjectList";

class App extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "1500px",
          margin: "auto"
        }}
      >
        <Splash />
        <Bio />
        <ProjectList />
        <CurrentProject />
      </div>
    );
  }
}

export default App;
