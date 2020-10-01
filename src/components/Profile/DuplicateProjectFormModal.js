import React from "react";
import { Button, Input, Form, Modal } from "antd";

const DuplicateProjectFormModal = ({
  projectToDuplicate,
  duplicationModalState,
  handleDuplicationModal,
  duplicateForm,
  onFinishDuplication,
  loadingModal,
}) => {
  return (
    <Modal
      title={`Duplicate Project from ${projectToDuplicate.projectName}`}
      visible={duplicationModalState}
      onOk={handleDuplicationModal}
      onCancel={handleDuplicationModal}>
      <Form
        layout="vertical"
        form={duplicateForm}
        onFinish={onFinishDuplication}>
        <Form.Item
          initialValue={projectToDuplicate.projectName}
          label="New Project name"
          name="projectName"
          rules={[{ required: true, message: "Please input project's name" }]}>
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
            Duplicate
          </Button>
          {loadingModal ? "this could take a while, please wait" : ""}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DuplicateProjectFormModal;
