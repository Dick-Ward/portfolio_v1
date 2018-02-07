import React from "react";
import { Row, Col } from "reactstrap";

const PortfolioFooter = () => {
  return (
    <Row>
      <Col style={{ margin: "auto" }} xs="12" sm="10" lg="8">
        <div className="footerText">
          &copy; 2018 Dick Ward | TheDickWard@gmail.com
        </div>
      </Col>
    </Row>
  );
};

export default PortfolioFooter;
