import React from "react";
import { Row, Col, Card } from "reactstrap";

const ProjectList = () => {
  return (
    <Row>
      <Col
        style={{ margin: "auto" }}
        xs="12"
        sm={{ size: "5", offset: 1 }}
        lg={{ size: "4", offset: 2 }}
      >
        <Card>hi</Card>
      </Col>
      <Col style={{ margin: "auto" }} xs="12" sm="5" lg="4">
        <Card>hi</Card>
      </Col>
    </Row>
  );
};

export default ProjectList;
