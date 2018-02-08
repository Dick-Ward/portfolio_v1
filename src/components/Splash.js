import React from "react";
import { Row, Col, Button } from "reactstrap";

const Splash = () => {
  return (
    <Row style={{ minHeight: "800px" }}>
      <Col className="splashColumn" xs="5" sm="6">
        <div className="splashButtonBox">
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
            href="#projects"
          >
            Projects
          </Button>

          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
            href="https://s3.amazonaws.com/dickwardportfolio/Dick+Ward+Resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
            href="https://github.com/Gonzodamus/"
            target="_blank"
          >
            Github
          </Button>
          <Button
            outline
            color="info"
            style={{ display: "block" }}
            className="splashButton"
            href="https://medium.com/@TheDickWard/"
            target="_blank"
          >
            Blog
          </Button>
        </div>
      </Col>
      <Col xs="7" sm="6" className="splashColumn">
        <Row>
          <Col>
            <div className="socialBar">
              <i
                href="www.linkedin.com/in/Dick-Ward"
                className="fab fa-twitter-square fa-lg splashIcon"
              />
              <i className="fab fa-linkedin fa-lg splashIcon" />
              TheDickWard@gmail.com
            </div>
          </Col>
        </Row>
        <div className="splashTextBox">
          <h1 className="splashHeadline">Dick Ward</h1>
          <p className="splashByline">Full-Stack Web Developer</p>
        </div>
      </Col>
    </Row>
  );
};

export default Splash;
