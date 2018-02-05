import React from "react";
import { Row, Col, Button } from "reactstrap";

const Splash = () => {
  return (
    <div
      style={{
        maxWidth: "2000px",
        margin: "auto"
      }}
    >
      <Row style={{ minHeight: "700px" }}>
        <Col className="splashColumn" sm={{ size: "5", offset: 1 }}>
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
        <Col sm="5" className="splashColumn">
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
    </div>
  );
};

export default Splash;
