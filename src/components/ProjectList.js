import React from "react";
import { Row, Col, Card, CardSubtitle, CardBody, CardLink } from "reactstrap";

const ProjectList = () => {
  return (
    <div>
      <Row>
        <Col className="projectCard" xs="12" sm={{ size: "5", offset: 1 }}>
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <h4 className="projectTitle">DonorPool</h4>

            <CardSubtitle className="text-center">
              Rails | React | Redux | Bootstrap
            </CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/200x200"
              alt="Placeholder"
            />
            <CardBody style={{ textAlign: "center" }}>
              <CardLink href="#">More Info</CardLink>
              <CardLink href="#">Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="projectCard" xs="12" sm="5">
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <h4 className="projectTitle">Schedulr</h4>

            <CardSubtitle className="text-center">
              React | Draggable | Semantic
            </CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/200x200"
              alt="Placeholder"
            />
            <CardBody style={{ textAlign: "center" }}>
              <CardLink href="#">More Info</CardLink>
              <CardLink href="#">Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="projectCard" xs="12" sm={{ size: "5", offset: 1 }}>
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <h4 className="projectTitle">Peeker</h4>
            <CardSubtitle className="text-center">
              Ruby | Rails | Clarifai API
            </CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/200x200"
              alt="Placeholder"
            />
            <CardBody style={{ textAlign: "center" }}>
              <CardLink href="#">More Info</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="projectCard" xs="12" sm="5">
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <h4 className="projectTitle">H-I-I</h4>

            <CardSubtitle className="text-center">
              Ruby | NYC Open Data API
            </CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/200x200"
              alt="Placeholder"
            />
            <CardBody style={{ textAlign: "center" }}>
              <CardLink href="#">More Info</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectList;
