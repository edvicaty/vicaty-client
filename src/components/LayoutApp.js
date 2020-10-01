import React, { useContext, useState } from "react";
import {
  ApartmentOutlined,
  FileOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { logoutP } from "../services/auth";
import Documentation from "./Documentation";
const { Header, Content, Footer } = Layout;
const LayoutApp = ({ children }) => {
  const { user, logout } = useContext(Context);
  const [helpModalState, setHelpModalState] = useState(false);

  function handleHelpModal() {
    setHelpModalState(!helpModalState);
  }
  async function setlogout() {
    await logoutP();
    logout();
  }

  return (
    <Layout
      className="layout"
      style={{
        marginBottom: "50px",
        overflow: "auto",
      }}>
      <Documentation
        helpModalState={helpModalState}
        handleHelpModal={handleHelpModal}
      />
      <Header>
        <Menu
          theme="light"
          style={{ width: "100vw", position: "absolute", right: "0" }}
          mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">
              <SendOutlined
                style={{ color: "#364D78", marginLeft: "5px" }}
                rotate="90"
              />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item onClick={handleHelpModal} key="6">
            <FileOutlined />
            Documentation
          </Menu.Item>

          {user ? (
            <>
              <Menu.Item key="5">
                <Link to="/profile">
                  <ApartmentOutlined />
                  {user.username.toUpperCase()}'s Projects
                </Link>
              </Menu.Item>
              <Menu.Item onClick={setlogout} key="4">
                <LogoutOutlined />
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="2">
                <Link to="/login">
                  <LoginOutlined /> Login
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/signup">
                  <UserAddOutlined /> Signup
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Header>
      <Content style={{ wordBreak: "break-all" }}>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "white",
          color: "black",
          height: "50px",
          position: "fixed",
          bottom: "0",
          paddingBottom: "40px",
          width: "100vw",
        }}>
        ©2020 Edgar V. C.
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
