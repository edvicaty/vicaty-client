import React from "react";

import { Button, Typography, Input, Form, Modal } from "antd";
const { Title } = Typography;

const DataUpdateFormModal = ({
  dataUpdateModal,
  handleDataUpdateModal,
  dataValue,
  updateDataForm,
  onFinishUpdateData,
  loadingModal,
}) => {
  return (
    <Modal
      title="Update Data"
      visible={dataUpdateModal}
      onOk={handleDataUpdateModal}
      onCancel={handleDataUpdateModal}>
      <Title level={3}>
        Current value:
        <span
          style={{
            fontSize: "1.1rem",
            color: "#696969",
            marginLeft: "10px",
          }}>
          {dataValue}
        </span>
      </Title>
      <Form
        layout="vertical"
        form={updateDataForm}
        onFinish={onFinishUpdateData}>
        <Form.Item
          label="Input new value:"
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
            Update
          </Button>
          {loadingModal ? "this could take a while, please wait" : ""}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DataUpdateFormModal;
