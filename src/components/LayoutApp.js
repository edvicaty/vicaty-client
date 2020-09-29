import React, { useContext, useState } from "react";
import {
  Layout,
  Menu,
  Modal,
  Collapse,
  Timeline,
  Image,
  Typography,
  List,
} from "antd";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { logoutP } from "../services/auth";
const { Panel } = Collapse;
const { Title, Text } = Typography;

const { Header, Content, Footer } = Layout;
const LayoutApp = ({ children }) => {
  const { user, logout } = useContext(Context);
  const [helpModalState, setHelpModalState] = useState(false);
  //Modal State
  function handleHelpModal() {
    setHelpModalState(!helpModalState);
  }
  async function setlogout() {
    await logoutP();
    logout();
  }

  //

  return (
    <Layout
      className="layout"
      style={{
        height: "100vh",
        // background: "linear-gradient(90deg, #C1DFC4 0%,  #DEECDD 100%)",
        overflow: "auto",
      }}>
      <Modal
        title="Vicaty documentation"
        width={800}
        visible={helpModalState}
        onOk={handleHelpModal}
        onCancel={handleHelpModal}
        style={{
          background: "linear-gradient(90deg, white 0%, #364d79 220%)",
        }}>
        <Title id="general" level={1}>
          Index
        </Title>
        <ul>
          <li>
            <a href="#general">General</a>
          </li>
          <li>
            <a href="#duplicate">
              Using existing Project's Schemas to create new Project
            </a>
          </li>
          <li>
            <a href="#storing">Storing Data. Practical example</a>
          </li>
        </ul>
        <div>
          <Title id="general" level={1}>
            General
          </Title>
          <p>
            <strong>Projects</strong> are the most general level of organization
            of your <strong>API</strong>
          </p>
          <ul>
            <li>
              <strong>Projects</strong> can contain several{" "}
              <strong>Models</strong>
            </li>
            <li>
              <strong>Models</strong> can contain several{" "}
              <strong>Elements</strong>
            </li>
            <li>
              <strong>Elements</strong> can contain several{" "}
              <strong>Data</strong>
            </li>
          </ul>
          <Image
            style={{ margin: "30px 10%", width: "100%" }}
            src="/tree.png"
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Title id="duplicate" level={1}>
            Using existing Project's Schemas to create new Project
          </Title>

          <p>
            To accomplish this is as easy as to click the
            <strong> Duplicate Project </strong>button to create a new Menu,
            with a whole
            <strong> new ID and new customized API endpoints </strong>, but with
            the
            <strong> same existing data </strong>and structure from the original
            <strong> Project Schema </strong>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Title id="storing" level={1}>
            Storing Data
          </Title>
          <p>
            Lets say you have a Restaurant, and want to build an{" "}
            <strong>API</strong> that will store your <strong>Menus</strong>, so
            you decide to build a <strong>Menu Schema</strong> on the first
            level of organization. So your <strong>Menu Schema</strong> it's
            equivalent to your <strong>Project Schema</strong>.
          </p>
          <br />

          <Timeline>
            <Timeline.Item>
              The first thing you do is create a Menu <strong>Schema</strong>
            </Timeline.Item>
            <Timeline.Item>
              Then you'll decide what <strong>Models</strong> can a Menu have.
              Let's say each <strong>Menu</strong> will contain a{" "}
              <strong>Lunch Model</strong> and a <strong>Dinner Model</strong>{" "}
            </Timeline.Item>
            <Timeline.Item>
              The <strong>Lunch Model</strong> will have many dishes, each Dish
              will be an <strong>Element</strong> of the Lunch Model
            </Timeline.Item>
            <Timeline.Item>
              Each <strong>Dish Element</strong> will have several{" "}
              <strong> Data, </strong>
              including the <strong>Price</strong> and description
            </Timeline.Item>
          </Timeline>
          <br />
          <p>
            So, you do the same for the Dinner model and{" "}
            <strong>Congratulations!</strong> You have created a Menu Schema
            that will look like this (click for larger detail):
          </p>
          <Image style={{ margin: "30px 0", width: "100%" }} src="/tree2.png" />
          <br />
          <br />
          <p>
            Now that you have created your first Menu, you can access and modify
            your data within<strong> Vicaty app </strong>
            or via the<strong> API endpoints </strong>API endpoints provided by
            the page.
          </p>
          <p>
            But maybe you don't want to have one single<strong> Menu </strong>,
            instead you want to have a wide variety of Different Menus with
            several dishes each. To accomplish this is, you need to{" "}
            <strong> Duplicate </strong>the existing project
          </p>
          <p>
            To accomplish this is as easy as to click the
            <strong> Duplicate Project </strong>button to create a new Menu,
            with a whole
            <strong> new ID and new customized API endpoints </strong>, but with
            the
            <strong> same existing data </strong>and structure from the original
            <strong> Menu Schema </strong>
          </p>
        </div>
      </Modal>
      <Header>
        <Menu
          theme="light"
          style={{ width: "100vw", position: "absolute", right: "0" }}
          mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item onClick={handleHelpModal} key="6">
            Documentation
          </Menu.Item>

          {user ? (
            <>
              <Menu.Item key="5">
                <Link to="/profile">
                  {user.username.toUpperCase()}'s Projects
                </Link>
              </Menu.Item>
              <Menu.Item onClick={setlogout} key="4">
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/signup">Signup</Link>
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
          marginTop: "30px",
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
