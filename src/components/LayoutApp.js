import React, { useContext, useState } from "react";
import {
  ApartmentOutlined,
  HomeOutlined,
  FileOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  BlockOutlined,
  BorderOutlined,
  FileTextOutlined,
  SendOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Modal,
  Collapse,
  Timeline,
  Image,
  Typography,
  List,
  Tabs,
} from "antd";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { logoutP } from "../services/auth";
const { Panel } = Collapse;
const { Title, Text } = Typography;
const { TabPane } = Tabs;
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
        marginBottom: "50px",
        overflow: "auto",
      }}>
      <Modal
        title={
          <>
            <FileTextOutlined /> Vicaty Documentation
          </>
        }
        width={800}
        visible={helpModalState}
        onOk={handleHelpModal}
        onCancel={handleHelpModal}
        style={{
          background: "linear-gradient(90deg, white 0%, #364d79 220%)",
        }}>
        <Title id="general" level={1}>
          <FileTextOutlined />
          {` `}
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
          <br />
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Model">Models</a>
          </li>
          <li>
            <a href="#Element">Elements</a>
          </li>
          <li>
            <a href="#Data">Data</a>
          </li>
          <br />
          <li>
            <a href="#APIToken">API userID token</a>
          </li>
          <li>
            <a href="#API">Using API</a>
          </li>
          <br />
          <br />
        </ul>
        <div>
          <hr />

          <Title id="general" level={1}>
            General
          </Title>
          <p>
            <strong>Projects</strong> are the most general level of organization
            of your <strong>API</strong>
          </p>
          <p>
            Before creating a project, it's recommended that you plan with care
            the structure of your whole API. Start creating a small diagram on
            paper or with your favorite diagrams app.
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
            src="/docImgs/tree1d.png"
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
            Storing Data. Practical example
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
          <Image
            style={{ margin: "30px 0", width: "100%" }}
            src="/docImgs/tree2d.png"
          />
          <br />
          <br />
          <p>
            Now that you have created your first Menu, you can access and modify
            your data within<strong> Vicaty app </strong>
            or via the<strong> API endpoints </strong> provided by the page.
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
          <Title id="Project" level={1}>
            Projects
          </Title>
          <p>
            Projects are the most general level of organization of your API and
            the first thing you create when starting using Vicaty.
          </p>
          <p>
            Before creating a project, it's recommended that you plan with care
            the structure of your whole API. Start creating a small diagram on
            paper or with your favorite diagrams app.
          </p>
          <p>Each project will have on its own:</p>
          <ul>
            <li>
              <strong>A Project name:</strong> It's recommended to keep it short
              and concise.
            </li>
            <li>
              <strong>Creation and last updated dates:</strong> For keeping
              track of your project
            </li>
            <li>
              <strong>A Project Id:</strong> This Id will be used for making
              requests to your API from an external site
            </li>
          </ul>
          <p>
            For convenience, you will be able to see directly the API endpoint
            to fetch each project below each project's description. This URL
            will have already added the corresponding Project's Id at the end of
            it.
          </p>
          <p>
            <strong>For security</strong>, you can only modify or delete
            projects from Vicaty's dashboard because there is too much nested
            data in them (no external modifications with API endpoints allowed)
          </p>
          <Title id="Model" level={1}>
            Models
          </Title>
          <p>Models are the second level of organization of your API.</p>
          <p>
            You can make your Project with the complexity that you need, for
            instance, only have projects with models attached to it, with no
            elements and no nested data. Like this:
          </p>
          <Image
            style={{ margin: "30px 0", width: "100%" }}
            src="/docImgs/tree3d.png"
          />
          <p>Each Model will have on its own:</p>
          <ul>
            <li>
              <strong>A Model name:</strong> It's recommended to keep it short
              and concise.
            </li>
            <li>
              <strong>A Model description:</strong> It's recommended to keep it
              short and concise.
            </li>
            <li>
              <strong>Creation and last updated dates:</strong> For keeping
              track of your Model.
            </li>
            <li>
              <strong>A Model Id:</strong> This Id will be used for making
              requests to your API from an external site
            </li>
          </ul>
          <p>
            For convenience, you will be able to see directly the API endpoint
            to fetch each Model below each Model's description. This URL will
            have already added the corresponding Model's Id at the end of it.
          </p>
          <p>
            <strong>For security</strong>, you can only modify or delete Models
            from Vicaty's dashboard because there is too much nested data in
            them (no external modifications with API endpoints allowed)
          </p>
          <Title id="Element" level={1}>
            Elements
          </Title>
          <p>
            Elements are third level of organization of your API and can be
            deleted with the corresponding API endpoints from external sites.
          </p>

          <p>Each Element will have on its own:</p>
          <ul>
            <li>
              <strong>An Element name:</strong> It's recommended to keep it
              short and concise. This name will be used for making requests to
              your API from an external site. Because of this{" "}
              <strong>Element's names must be unique for each model</strong>
            </li>
            <br />
            <li>
              <strong>Creation and last updated dates:</strong> For keeping
              track of your Element
            </li>
          </ul>
          <p>
            For convenience, you will be able to see directly the API endpoint
            to <strong>fetch</strong> and <strong>delete</strong> each Element
            below each Element's description. This URL will have already added
            the corresponding Element's name at the end of it.
          </p>

          <Title id="Data" level={1}>
            Data
          </Title>
          <p>Data is the most nested level of organization of your API.</p>
          <p>
            You will be able to create, delete and modify Data from external
            sites with the corresponding API endpoint.
          </p>
          <p>Each Data will have on its own:</p>
          <ul>
            <li>
              <strong>Data Id:</strong> Used for making requests with the
              corresponding API endpoint
            </li>

            <li>
              <strong>Data value:</strong> This Id will be used for making
              requests to your API from an external site
            </li>
          </ul>
          <p>
            For convenience, you will be able to see directly the API endpoint
            to <strong>fetch, delete</strong> and <strong>modify</strong> each
            Data below each Data's value. This URL will have already added the
            corresponding Data's Id at the end of it.
          </p>
          <Title id="APIToken" level={1}>
            API userId Token
          </Title>
          <p>
            You can see your unique <strong>UserId Token</strong> on your
            project's page header, shown as <strong>Show UserID token</strong>
          </p>
          <p>
            You will need to use this <strong>UserId Token</strong> with every
            request you do with your API's endpoints.
          </p>
          <p>
            Use <strong>userId : *your user id*</strong> as part of the request
            body when using your API.
          </p>
          <p>
            Your <strong>userId is PRIVATE</strong> and should be always be kept
            hidden.
          </p>
          <Title id="API" level={1}>
            Using API
          </Title>
          <p>
            There are <strong>two</strong> ways you can get an API endpoint:
          </p>
          <p>
            The <strong>first way</strong> is to get it directly from the
            dashboard (below each Project, Model, Element or Data descriptions
            are shown the <strong>API endpoints</strong> available for them)
          </p>
          <p>
            The <strong>second way</strong> is to build it yourself using the
            Id's of your components:
          </p>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Projects" key="1">
              <Title level={4}>Get All projects</Title>
              <p>
                <strong>Request Type: </strong>
                https://vicaty-api.herokuapp.com/user/project
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Get Project</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/project/<projectId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
            </TabPane>
            <TabPane tab="Models" key="2">
              <Title level={4}>Get Model</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/createdModel/<modelId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Get All Project's elements</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/getAll/<modelId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
            </TabPane>
            <TabPane tab="Elements" key="3">
              <Title level={4}>Get Element</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/getSingle/<modelId>/<elementName>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Create Element</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/create/<modelId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {
                  "userId : <your user Id> || elementName: <your new element Name>"
                }
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Delete Element</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/delete/<modelId>/<elementName>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
            </TabPane>
            <TabPane tab="Data" key="4">
              <Title level={4}>Add Data</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/addSingle/<modelId>/<elementName>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id> || value: <your data value>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Update Data</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/updateSingle/<modelId>/<elementName>/<dataId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id> || value: <your new data value>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
              <Title level={4}>Delete Data</Title>
              <p>
                <strong>Request Type: </strong>
                {`https://vicaty-api.herokuapp.com/user/element/deleteSingle/<modelId>/<elementName>/<dataId>`}
              </p>
              <p>
                <strong>Request Route: </strong>POST
              </p>
              <p>
                <strong>Request Body: </strong>
                {"userId : <your user Id>"}
              </p>
              <hr
                style={{
                  backgroundColor: "#D3D3D3",
                  height: "1px",
                  border: "none",
                }}
              />
            </TabPane>
          </Tabs>
        </div>
      </Modal>
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
