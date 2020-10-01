import React from "react";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import { Button, Typography, Collapse, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Panel } = Collapse;

const ElementsHeader = ({ props, handleModal }) => {
  return (
    <div
      style={{
        width: "100vw",
        padding: "30px 15vw",

        background: "linear-gradient(90deg, #364d79 0%, white 220%)",
        color: "white",
      }}>
      <Breadcrumb style={{ position: "relative", bottom: "20px" }} separator="">
        <Breadcrumb.Item>
          <Link style={{ color: "white" }} to="/profile">
            <ApartmentOutlined style={{ color: "white" }} /> Projects
          </Link>
        </Breadcrumb.Item>
        <span style={{ color: "white" }}>{`   >   `}</span>
        <Breadcrumb.Item>
          <Link
            style={{ color: "white" }}
            to={`/project/${props.match.params.projectName}/${props.match.params.projectId}`}>
            <AppstoreOutlined style={{ color: "white" }} />
            {` `}
            {props.match.params.projectName}
          </Link>
        </Breadcrumb.Item>
        <span style={{ color: "white" }}>{`   >   `}</span>
        <Breadcrumb.Item>
          <BlockOutlined style={{ color: "white" }} />
          <span style={{ color: "white" }}>
            {` `}
            {props.match.params.modelName}
          </span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Title style={{ color: "white" }} level={1}>
        <BlockOutlined /> {props.match.params.modelName}
      </Title>
      <Title style={{ color: "white" }} level={3}>
        MODEL Id: {props.match.params.modelId}
      </Title>

      <h3 style={{ color: "white" }}>
        Here you can see all your {`  `}
        <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>elements</span>
        {`  `} corresponding to the {props.match.params.modelName} model. Click
        below to create a new one!
      </h3>
      <Button
        style={{
          margin: "15px 0",
          backgroundColor: "white",
          color: "#364d79",
        }}
        onClick={handleModal}
        block>
        Create New Element!
      </Button>
      <Collapse
        style={{
          background: "linear-gradient(90deg, white 0%, #364d79 300%)",
          marginBottom: "15px",
        }}>
        <Panel header="API endpoints" key="1">
          <Title level={5}>Get Model </Title>
          <p>
            <strong>Route :</strong>{" "}
            https://vicaty-api.herokuapp.com/user/createdModel/
            {props.match.params.modelId}
          </p>
          <p>
            <strong>Request Type :</strong> POST
          </p>
          <p>
            <strong>Request Body :</strong> userId : *your user Id*
          </p>
          <hr />
          <Title level={5}>Create Element </Title>
          <p>
            <strong>Route :</strong>{" "}
            https://vicaty-api.herokuapp.com/user/element/create/
            {props.match.params.modelId}
          </p>
          <p>
            <strong>Request Type :</strong> POST
          </p>
          <p>
            <strong>Request Body :</strong> userId : *your user Id* ||
            elementName: *your new element Name*
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default ElementsHeader;
