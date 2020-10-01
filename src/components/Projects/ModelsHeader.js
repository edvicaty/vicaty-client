import React from "react";
import { Link } from "react-router-dom";

import { ApartmentOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Typography, Collapse, Breadcrumb } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;
const ModelsHeader = ({ props, handleModal }) => {
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
      </Breadcrumb>
      <Title style={{ color: "white" }} level={1}>
        <AppstoreOutlined /> {props.match.params.projectName}
      </Title>
      <Title style={{ color: "white" }} level={3}>
        PROJECT Id: {props.match.params.projectId}
      </Title>

      <h3 style={{ color: "white" }}>
        Here you can see all your {`  `}
        <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>models</span>
        {"  "}
        corresponding to the
        {props.match.params.projectName} project. click below to create a new
        one!
      </h3>
      <Button
        style={{
          margin: "15px 0",
          backgroundColor: "white",
          color: "#364d79",
        }}
        onClick={handleModal}
        block>
        Create New Model!
      </Button>
      <Collapse
        style={{
          background: "linear-gradient(90deg, white 0%, #364d79 220%)",
          marginBottom: "15px",
        }}>
        <Panel header="Show API endpoint to fetch Project" key="1">
          <p>
            <strong>Route :</strong>{" "}
            https://vicaty-api.herokuapp.com/user/project/
            {props.match.params.projectId}
          </p>
          <p>
            <strong>Request Type :</strong> POST
          </p>
          <p>
            <strong>Request Body :</strong> userId : *your user Id*
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default ModelsHeader;
