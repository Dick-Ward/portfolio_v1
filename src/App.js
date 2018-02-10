import React, { Component } from "react";
import Splash from "./components/Splash";
import Bio from "./components/Bio";
import CurrentProject from "./components/CurrentProject";
import ProjectList from "./components/ProjectList";
import PortfolioFooter from "./components/PortfolioFooter";
import { Row, Col, Button } from "reactstrap";

class App extends Component {
  state = {
    arrowVisibility: false
  };
  render() {
    window.onscroll = () => {
      if (window.pageYOffset > 200) {
        this.setState({ arrowVisibility: true });
      } else {
        this.setState({ arrowVisibility: false });
      }
    };

    return (
      <div
        id="top"
        style={{
          maxWidth: "1500px",
          margin: "auto"
        }}
      >
        {this.state.arrowVisibility ? (
          <Button href="#top" outline color="info" className="buttonUp">
            <i className="fas fa-angle-double-up fa-3x" />
          </Button>
        ) : null}
        <Row>
          <Col style={{ margin: "auto" }} xs="12" sm="10" lg="8">
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
