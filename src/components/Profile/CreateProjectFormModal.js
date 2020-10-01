import React from "react";
import { Button, Input, Form, Modal } from "antd";

const CreateProjectFormModal = ({
  modalState,
  handleModal,
  form,
  onFinish,
  loadingModal,
}) => {
  return (
    <Modal
      title="Create new Project Schema"
      visible={modalState}
      onOk={handleModal}
      onCancel={handleModal}>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Project Schema name"
          name="projectName"
          rules={[{ required: true, message: "Please input project" }]}>
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

export default CreateProjectFormModal;
