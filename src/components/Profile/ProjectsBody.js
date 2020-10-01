import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Button, Card, Row, Col, Collapse } from "antd";
const { Panel } = Collapse;

const ProjectsBody = ({
  projects,
  updateForm,
  setProjectToUpdateF,
  handleUpdateModal,
  duplicateForm,
  setProjectToDuplicateF,
  handleDuplicationModal,
  setProjectF,
  handleDeleteProject,
}) => {
  return (
    <div style={{ margin: "20px" }}>
      <Row gutter={[16, 16]}>
        {projects?.map((project) => {
          return (
            <Col key={project._id} xs={24} sm={24} md={12} lg={8}>
              <Card
                title={
                  <>
                    <AppstoreOutlined /> {` `}
                    {project.projectName}
                  </>
                }
                bordered={false}>
                <Button
                  style={{
                    margin: "15px 0",
                    backgroundColor: "white",
                    color: "#364d79",
                  }}
                  onClick={async () => {
                    await updateForm.resetFields();
                    await setProjectToUpdateF(project.projectName, project._id);
                    handleUpdateModal();
                  }}
                  block>
                  Update Project's name
                </Button>
                <Button
                  style={{
                    margin: "15px 0",
                    backgroundColor: "white",
                    color: "#364d79",
                  }}
                  onClick={async () => {
                    await duplicateForm.resetFields();
                    await setProjectToDuplicateF(
                      project.projectName,
                      project._id
                    );
                    handleDuplicationModal();
                  }}
                  block>
                  Duplicate Project
                </Button>

                <p>
                  <strong>Project id:</strong> {project._id}
                </p>
                <p>
                  <strong>Creation date:</strong>{" "}
                  {project.created_at.slice(0, 10)}
                </p>
                <p>
                  <strong>Last updated:</strong>{" "}
                  {project.updated_at.slice(0, 10)}
                </p>
                <Collapse
                  style={{
                    background:
                      "linear-gradient(90deg, white 0%, #364d79 300%)",
                    marginBottom: "15px",
                  }}>
                  <Panel header="API endpoint to fetch project" key="1">
                    <p>
                      <strong>Route :</strong>{" "}
                      https://vicaty-api.herokuapp.com/user/project/
                      {project._id}
                    </p>
                    <p>
                      <strong>Request Type :</strong> POST
                    </p>
                    <p>
                      <strong>Request Body :</strong> userId : *your user Id*
                    </p>
                  </Panel>
                </Collapse>
                <Button
                  style={{
                    margin: "15px 0",
                    backgroundColor: "#364d79",
                    color: "white",
                  }}
                  block>
                  <Link to={`/project/${project.projectName}/${project._id}`}>
                    Go to project
                  </Link>
                </Button>
                <Button
                  style={{
                    margin: "15px 0",
                    backgroundColor: "red",
                    color: "white",
                  }}
                  block
                  onClick={() => {
                    setProjectF(project._id);
                    handleDeleteProject();
                  }}>
                  DELETE
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProjectsBody;
