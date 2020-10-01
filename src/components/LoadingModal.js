import React from "react";
import { Modal, Spin } from "antd";
const LoadingModal = ({ loadingModal, handleLoadingModalFalse }) => {
  return (
    <Modal
      title="Loading... Please wait"
      visible={loadingModal}
      onOk={handleLoadingModalFalse}
      onCancel={handleLoadingModalFalse}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}>
      <Spin size="large" />
    </Modal>
  );
};

export default LoadingModal;
