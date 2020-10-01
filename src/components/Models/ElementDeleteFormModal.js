import React from "react";

import { Button, Typography, Modal } from "antd";
const { Title } = Typography;

const ElementDeleteFormModal = ({
  elementDeleteModal,
  handleElementDeletionModal,
  elementToDelete,
  confirmDeleteElement,
  loadingModal,
}) => {
  return (
    <Modal
      title="Delete Element"
      visible={elementDeleteModal}
      onOk={handleElementDeletionModal}
      onCancel={handleElementDeletionModal}>
      <Title level={2}>
        Are you sure you want to delete this element ({elementToDelete}) ?
      </Title>
      <Button
        style={{
          marginTop: "15px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={confirmDeleteElement}
        block>
        DELETE
      </Button>
      {loadingModal ? "this could take a while, please wait" : ""}
    </Modal>
  );
};

export default ElementDeleteFormModal;
