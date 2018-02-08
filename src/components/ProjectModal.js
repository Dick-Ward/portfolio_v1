import React from "react";
import { projects } from "../data/projectdata";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = props => {
  const projectInfo = projects.find(
    project => project.name === props.selectedProject
  );
  const projectLinks = projectInfo.links.map(link => (
    <Button
      style={{ marginLeft: "0", marginRight: "10px", marginTop: "10px" }}
      key={link.text}
      href={link.address}
      target="_blank"
      color="info"
    >
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

      <ModalFooter style={{ margin: "auto", display: "inline-block" }}>
        {projectLinks}
      </ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
