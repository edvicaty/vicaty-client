import React from "react";

import { Button, Input, Form, Modal } from "antd";

const CreateElementFormModal = ({
  modalState,
  handleModal,
  form,
  onFinish,
  loadingModal,
}) => {
  return (
    <Modal
      title="Create new Element"
      visible={modalState}
      onOk={handleModal}
      onCancel={handleModal}>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Element name"
          name="elementName"
          rules={[{ required: true, message: "Please input element name" }]}>
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
            block
            htmlType="submit">
            Submit
          </Button>
          {loadingModal ? "this could take a while, please wait" : ""}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateElementFormModal;
