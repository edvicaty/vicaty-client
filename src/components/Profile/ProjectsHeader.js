import React from "react";
import { ApartmentOutlined } from "@ant-design/icons";

import { Button, Typography, Collapse } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;
const ProjectsHeader = ({ user, handleModal }) => {
  return (
    <div
      style={{
        width: "100vw",
        background: "linear-gradient(90deg, #364d79 0%, white 220%)",
        padding: "30px 15vw",
        color: "white",
        borderRadius: "3px",
      }}>
      <Title style={{ color: "white" }} level={1}>
        <ApartmentOutlined /> Projects Schemas
      </Title>
      <Title style={{ color: "white" }} level={3}>
        Main Content of your API
      </Title>
      <Collapse
        style={{
          marginBottom: "15px",
        }}>
        <Panel header="Show UserID token" key="1">
          <p>
            <strong>USER ID :</strong> {user._id}
          </p>
        </Panel>
      </Collapse>
      <Collapse
        style={{
          background: "linear-gradient(90deg, white 0%, #364d79 220%)",
          marginBottom: "15px",
        }}>
        <Panel header="Show API endpoint to fetch all Projects" key="1">
          <p>
            <strong>Route :</strong>{" "}
            https://vicaty-api.herokuapp.com/user/project
          </p>
          <p>
            <strong>Request Type :</strong> POST
          </p>
          <p>
            <strong>Request Body :</strong> userId : *your user Id*
          </p>
        </Panel>
      </Collapse>

      <h3 style={{ color: "white" }}>
        Here you can see all of your existing projects schemas. Don't have any?
        click below to create a new one!
      </h3>

      <Button
        style={{
          margin: "15px 0",
          color: "#364d79",
        }}
        onClick={handleModal}>
        Create New Project Schema!
      </Button>
    </div>
  );
};

export default ProjectsHeader;
