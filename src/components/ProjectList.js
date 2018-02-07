import React from "react";
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardLink
} from "reactstrap";

const ProjectList = () => {
  return (
    <div>
      <Row>
        <Col
          className="projectCard"
          xs="12"
          sm={{ size: "5", offset: 1 }}
          lg={{ size: "4", offset: 2 }}
        >
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <CardBody>
              <CardTitle className="text-center">DonorPool</CardTitle>
            </CardBody>
            <CardSubtitle className="text-center">
              Ruby | Rails | React | Redux
            </CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/150x150"
              alt="Placeholder"
            />
            <CardBody>
              <CardLink href="#">More Info</CardLink> |
              <CardLink href="#">Github</CardLink> |
              <CardLink href="#">Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="projectCard" xs="12" sm="5" lg="4">
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <CardBody>
              <CardTitle className="text-center">Schedulr</CardTitle>
            </CardBody>
            <CardSubtitle className="text-center">Card subtitle</CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/150x150"
              alt="Placeholder"
            />
            <CardBody>
              <CardLink href="#">More Info</CardLink> |
              <CardLink href="#">Github</CardLink> |
              <CardLink href="#">Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          className="projectCard"
          xs="12"
          sm={{ size: "5", offset: 1 }}
          lg={{ size: "4", offset: 2 }}
        >
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <CardBody>
              <CardTitle className="text-center">Peeker</CardTitle>
            </CardBody>
            <CardSubtitle className="text-center">Card subtitle</CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/150x150"
              alt="Placeholder"
            />
            <CardBody>
              <CardLink href="#">More Info</CardLink> |
              <CardLink href="#">Github</CardLink> |
              <CardLink href="#">Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col className="projectCard" xs="12" sm="5" lg="4">
          <Card style={{ maxWidth: "250px", margin: "auto" }}>
            <CardBody>
              <CardTitle className="text-center">H-I-I</CardTitle>
            </CardBody>
            <CardSubtitle className="text-center">Card subtitle</CardSubtitle>
            <img
              className="projectImage"
              src="http://via.placeholder.com/150x150"
              alt="Placeholder"
            />
            <CardBody>
              <CardLink href="#">More Info</CardLink> |
              <CardLink href="#"> Github</CardLink> |
              <CardLink href="#"> Live Demo</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectList;
