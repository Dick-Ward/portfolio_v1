import React from "react";
import { projects } from "../data/projectdata";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProjectModal = props => {
  const open = !!props.selectedProject;
  const projectInfo = projects.find(
    project => project.name === props.selectedProject
  );
  console.log(projectInfo);

  return (
    <Modal onClick={props.handleClose} isOpen={open}>
      {open ? (
        <div>
          <ModalHeader>{projectInfo.name}</ModalHeader>
          <ModalBody>{projectInfo.description}</ModalBody>
        </div>
      ) : (
        ""
      )}
      <ModalFooter>
        {open && projectInfo.repoFull ? (
          <Button>Github</Button>
        ) : (
          <div>
            <Button>Back-end Github</Button>
            <Button>Front-end Github</Button>
          </div>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ProjectModal;
