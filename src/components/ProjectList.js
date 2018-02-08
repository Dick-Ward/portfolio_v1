import React from "react";
import ProjectModal from "./ProjectModal";
import { Button, Row, Col, Card, CardSubtitle, CardBody } from "reactstrap";

class ProjectList extends React.Component {
  state = {
    selectedProject: "DonorPool",
    modalOpen: false
  };

  handleSelect = event => {
    this.setState({ selectedProject: event.target.id, modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div id="projects">
        <ProjectModal
          selectedProject={this.state.selectedProject}
          handleClose={this.handleClose}
          modalOpen={this.state.modalOpen}
        />
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
                <Button
                  id="DonorPool"
                  outline
                  color="info"
                  onClick={this.handleSelect}
                >
                  More Info
                </Button>
                <Button outline color="info">
                  Live Demo
                </Button>
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
                <Button
                  id="Schedulr"
                  outline
                  color="info"
                  onClick={this.handleSelect}
                >
                  More Info
                </Button>
                <Button outline color="info">
                  Live Demo
                </Button>
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
                <Button
                  id="Peeker"
                  outline
                  color="info"
                  onClick={this.handleSelect}
                >
                  More Info
                </Button>
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
                <Button
                  id="HII - The Health Inspection Inspector"
                  outline
                  color="info"
                  onClick={this.handleSelect}
                >
                  More Info
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProjectList;
