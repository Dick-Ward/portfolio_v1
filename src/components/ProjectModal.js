import React from "react";
import { projects } from "../data/projectdata";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = props => {
  const projectInfo = projects.find(
    project => project.name === props.selectedProject
  );
  const projectLinks = projectInfo.links.map(link => (
    <Button key={link.text} color="info">
      {link.text}
    </Button>
  ));

  console.log(projectLinks);

  return (
    <Modal toggle={props.handleClose} isOpen={props.modalOpen}>
      <div>
        <ModalHeader>{projectInfo.name}</ModalHeader>
        <ModalBody>{projectInfo.description}</ModalBody>
      </div>

      <ModalFooter style={{ margin: "auto" }}>{projectLinks}</ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
