import React, { useContext } from "react";
import { Form, Input, Button, Cascader, Typography, notification } from "antd";
import { login } from "../services/auth";
import { Redirect } from "react-router-dom";
import { Context } from "../context";

const { Title, Text } = Typography;

const Signup = ({ history }) => {
  const [form] = Form.useForm();
  const { user, loginUser } = useContext(Context);
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "ERROR",
      description: "Wrong Username or Password",
    });
  };

  async function onFinish(values) {
    const user = await login(values);
    if (!user) {
      openNotificationWithIcon(`warning`);
    } else {
      loginUser(user);
      history.push("/profile");
    }
  }

  return !user ? (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Title level={1}>LOGIN</Title>
      <Form.Item
        label="User Name"
        name="username"
        rules={[{ required: true, message: "Please input your user name!" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        type="password"
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
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Redirect to="/profile" />
  );
};

export default Signup;
