import React from "react";
import { projects } from "../data/projectdata";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = props => {
  const projectInfo = projects.find(
    project => project.name === props.selectedProject
  );
  const techUsed = projectInfo.tech.map(technology => (
    <li key={technology}>{technology}</li>
  ));

  const projectLinks = projectInfo.links.map(link => (
    <Button
      style={{ marginLeft: "0", marginRight: "10px", marginTop: "10px" }}
      key={link.text}
      href={link.address}
      target="_blank"
      rel="noopener noreferrer"
      color="info"
    >
      {link.text}
    </Button>
  ));

  return (
    <Modal toggle={props.handleClose} isOpen={props.modalOpen}>
      <div>
        <ModalHeader>{projectInfo.name}</ModalHeader>
        <div className="modalImageContainer">
          <img
            className="modalImage"
            src={projectInfo.image}
            alt="placeholder"
          />
        </div>
        <ModalBody>
          <p>{projectInfo.description}</p>
          {techUsed}
        </ModalBody>
      </div>
      <ModalFooter style={{ margin: "auto", display: "inline-block" }}>
        {projectLinks}
      </ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
