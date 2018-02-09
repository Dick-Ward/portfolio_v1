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
      <div id="projects" style={{ paddingTop: "20px" }}>
        <hr className="projectsLine" />
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
                onClick={this.handleSelect}
                id="DonorPool"
                className="projectImage"
                src="https://s3.amazonaws.com/dickwardportfolio/DonorPoolSquare.png"
                alt="DonorPool Screenshot"
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
                <Button
                  href="https://powerful-savannah-20154.herokuapp.com/"
                  target="_blank"
                  outline
                  color="info"
                >
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
                id="Schedulr"
                onClick={this.handleSelect}
                className="projectImage"
                src="https://s3.amazonaws.com/dickwardportfolio/Schedulr+Square.png"
                alt="Schedulr Screenshot"
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
                <Button
                  href="https://fathomless-forest-91982.herokuapp.com/"
                  target="_blank"
                  outline
                  color="info"
                >
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
                id="Peeker"
                onClick={this.handleSelect}
                className="projectImage"
                src="https://s3.amazonaws.com/dickwardportfolio/PeekrSquare.png"
                alt="Peeker Screenshot"
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
                id="HII - The Health Inspection Inspector"
                onClick={this.handleSelect}
                className="projectImage"
                src="https://s3.amazonaws.com/dickwardportfolio/HIISquare.png"
                alt="H-I-I Screenshot"
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
