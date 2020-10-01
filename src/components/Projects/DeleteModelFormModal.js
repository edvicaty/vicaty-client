import React from "react";

import { Button, Modal } from "antd";

const DeleteModelFormModal = ({
  modelDeleteModal,
  handleDeleteModal,
  deleteModelConfirmed,
  loadingModal,
}) => {
  return (
    <Modal
      title="Are you sure you want to delete this Model?"
      visible={modelDeleteModal}
      onOk={handleDeleteModal}
      onCancel={handleDeleteModal}>
      <Button
        style={{
          margin: "15px 0",
          backgroundColor: "red",
          color: "white",
        }}
        block
        onClick={() => {
          deleteModelConfirmed();
        }}>
        DELETE
      </Button>
      {loadingModal ? "this could take a while, please wait" : ""}
    </Modal>
  );
};

export default DeleteModelFormModal;
