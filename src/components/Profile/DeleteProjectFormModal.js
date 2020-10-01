import React from "react";
import { Button, Modal } from "antd";

const DeleteProjectFormModal = ({
  projectDeleteModal,
  handleDeleteProject,
  deleteProjectConfirmed,
  loadingModal,
}) => {
  return (
    <Modal
      title="Are you sure you want to delete this Project?"
      visible={projectDeleteModal}
      onOk={handleDeleteProject}
      onCancel={handleDeleteProject}>
      <Button
        style={{
          margin: "15px 0",
          backgroundColor: "red",
          color: "white",
        }}
        block
        onClick={() => {
          deleteProjectConfirmed();
        }}>
        DELETE
      </Button>
      {loadingModal ? "this could take a while, please wait" : ""}
    </Modal>
  );
};

export default DeleteProjectFormModal;
