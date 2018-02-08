import React from "react";
import { Row, Col } from "reactstrap";

const PortfolioFooter = () => {
  return (
    <Row className="footerText">
      <Col>
        &copy; 2018 Dick Ward |{" "}
        <a href="mailto:TheDickWard@gmail.com" style={{ color: "white" }}>
          TheDickWard@gmail.com
        </a>
      </Col>
    </Row>
  );
};

export default PortfolioFooter;
