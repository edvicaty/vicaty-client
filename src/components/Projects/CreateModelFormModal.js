import React from "react";

import { Button, Input, Form, Modal } from "antd";

const CreateModelFormModal = ({
  modalState,
  handleModal,
  form,
  onFinish,
  loadingModal,
}) => {
  return (
    <Modal
      title="Create new Model"
      visible={modalState}
      onOk={handleModal}
      onCancel={handleModal}>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Model name"
          name="createdModelName"
          rules={[{ required: true, message: "Please input model name" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Model description or value"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input model value or description",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            style={{
              marginTop: "15px",
              backgroundColor: "#364d79",
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

export default CreateModelFormModal;
