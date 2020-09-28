import React, { useContext } from "react";
import { Form, Input, Button, Cascader, Typography, notification } from "antd";
import { signup } from "../services/auth";
import { Redirect } from "react-router-dom";
import { Context } from "../context";
const { Title, Text } = Typography;

const Signup = ({ history }) => {
  const [form] = Form.useForm();
  const { user } = useContext(Context);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "ERROR",
      description: "Username already exists",
    });
  };

  async function onFinish(values) {
    const user = await signup(values);
    if (!user.data) {
      openNotificationWithIcon(`warning`);
    } else {
      history.push("/login");
    }
  }

  return !user ? (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Title level={1}>Create Account</Title>

      <Form.Item
        label="User Name"
        name="username"
        rules={[{ required: true, message: "Please input your user name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input your user name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          // type="primary"
          style={{
            marginTop: "15px",
            backgroundColor: "#364d79",
            color: "white",
            borderRadius: "10px",
          }}
          block
          htmlType="submit">
          SIGNUP
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Signup;
