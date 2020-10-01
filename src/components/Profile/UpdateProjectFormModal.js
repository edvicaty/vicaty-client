import React from "react";
import { Button, Input, Form, Modal } from "antd";

const UpdateProjectFormModal = ({
  updateModalState,
  handleUpdateModal,
  updateForm,
  onFinishUpdate,
  projectToUpdate,
  loadingModal,
}) => {
  return (
    <Modal
      title="Update Project Schema's name"
      visible={updateModalState}
      onOk={handleUpdateModal}
      onCancel={handleUpdateModal}>
      <Form layout="vertical" form={updateForm} onFinish={onFinishUpdate}>
        <Form.Item
          initialValue={projectToUpdate.projectName}
          label="Project Schema name"
          name="projectName"
          rules={[{ required: true, message: "Please input project's name" }]}>
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

export default UpdateProjectFormModal;
