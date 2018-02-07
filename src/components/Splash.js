import React from "react";
import { Row, Col, Button } from "reactstrap";

const Splash = () => {
  return (
    <Row style={{ minHeight: "800px" }}>
      <Col
        className="splashColumn"
        xs="4"
        sm={{ size: "5", offset: 1 }}
        lg={{ size: "4", offset: 2 }}
      >
        <div className="splashButtonBox">
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
          >
            Projects
          </Button>

          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
          >
            Resume
          </Button>
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
          >
            Github
          </Button>
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
          >
            Blog
          </Button>
        </div>
      </Col>
      <Col xs="8" sm="5" lg="4" className="splashColumn">
        <Row>
          <Col>
            <div className="divOutline socialBar">
              <i className="fab fa-twitter-square fa-lg splashIcon" />
              <i className="fab fa-linkedin fa-lg splashIcon" />
              TheDickWard@gmail.com
            </div>
          </Col>
        </Row>
        <div className="splashTextBox">
          <h1 className="divOutline splashHeadline">Dick Ward</h1>
          <p className="divOutline splashByline">Full-Stack Web Developer</p>
        </div>
      </Col>
    </Row>
  );
};

export default Splash;
