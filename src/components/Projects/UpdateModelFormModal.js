import React from "react";

import { Button, Input, Form, Modal } from "antd";

const UpdateModelFormModal = ({
  modelUpdateModal,
  handleModelUpdateModal,
  updateModelForm,
  onFinishUpdate,
  modelToUpdate,
  loadingModal,
}) => {
  return (
    <Modal
      title="Update Model"
      visible={modelUpdateModal}
      onOk={handleModelUpdateModal}
      onCancel={handleModelUpdateModal}>
      <Form layout="vertical" form={updateModelForm} onFinish={onFinishUpdate}>
        <Form.Item
          initialValue={modelToUpdate.modelName}
          label="Model name"
          name="modelName"
          rules={[{ required: true, message: "Please input model's name" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={modelToUpdate.description}
          label="Model description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input model's description",
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

export default UpdateModelFormModal;
