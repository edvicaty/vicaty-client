import React from "react";

import { Button, Input, Form, Modal } from "antd";
const DataCreateFormModal = ({
  dataCreationModal,
  handleDataCreationModal,
  dataForm,
  onFinishData,
  loadingModal,
}) => {
  return (
    <Modal
      title="Add data"
      visible={dataCreationModal}
      onOk={handleDataCreationModal}
      onCancel={handleDataCreationModal}>
      <Form layout="vertical" form={dataForm} onFinish={onFinishData}>
        <Form.Item
          label="Data value"
          name="data"
          rules={[
            {
              required: true,
              message: "Please input data",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              marginTop: "15px",
              backgroundColor: "#638165",
              color: "white",
              borderRadius: "10px",
            }}
            htmlType="submit"
            block>
            Add Data
          </Button>
          {loadingModal ? "this could take a while, please wait" : ""}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DataCreateFormModal;
