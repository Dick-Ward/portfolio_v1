import React from "react";
import { projects } from "../data/projectdata";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = props => {
  const open = !!props.selectedProject;
  const projectInfo = projects.find(
    project => project.name === props.selectedProject
  );

  return (
    <Modal toggle={props.handleClose} isOpen={open}>
      {open ? (
        <div>
          <ModalHeader>{projectInfo.name}</ModalHeader>
          <ModalBody>{projectInfo.description}</ModalBody>
        </div>
      ) : (
        ""
      )}
      <ModalFooter style={{ margin: "auto" }}>
        {open && projectInfo.repoFull ? (
          <Button color="info">View on Github</Button>
        ) : (
          <div>
            <Button color="info" style={{ marginRight: "8px" }}>
              Back-end Github
            </Button>
            <Button color="info">Front-end Github</Button>
          </div>
        )}
        {open && projectInfo.liveDemo ? (
          <Button color="info">Live Demo</Button>
        ) : (
          ""
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
