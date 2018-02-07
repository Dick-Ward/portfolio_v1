import React, { Component } from "react";
import Splash from "./components/Splash";
import Bio from "./components/Bio";
import CurrentProject from "./components/CurrentProject";
import ProjectList from "./components/ProjectList";
import PortfolioFooter from "./components/PortfolioFooter";
import { Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "1500px",
          margin: "auto"
        }}
      >
        <Row>
          <Col
            className="divOutline"
            style={{ margin: "auto" }}
            xs="12"
            sm="10"
            lg="8"
          >
            <Splash />
            <Bio />
            <ProjectList />
            <CurrentProject />
            <PortfolioFooter />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
