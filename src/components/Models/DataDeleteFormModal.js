import React from "react";

import { Button, Typography, Modal } from "antd";
const { Title } = Typography;

const DataDeleteFormModal = ({
  deleteModalState,
  handleDeleteElementModal,
  deleteWithConfirmation,
  loadingModal,
}) => {
  return (
    <Modal
      title="Delete Data"
      visible={deleteModalState}
      onOk={handleDeleteElementModal}
      onCancel={handleDeleteElementModal}>
      <Title level={2}>Are you sure you want to delete this entry?</Title>
      <Button
        style={{
          marginTop: "15px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={deleteWithConfirmation}
        block>
        DELETE
      </Button>
      {loadingModal ? "this could take a while, please wait" : ""}
    </Modal>
  );
};

export default DataDeleteFormModal;
