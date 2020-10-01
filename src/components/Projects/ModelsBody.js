import React from "react";
import { Link } from "react-router-dom";

import { BlockOutlined } from "@ant-design/icons";
import { Button, Card, Row, Col, Collapse } from "antd";
const { Panel } = Collapse;
const ModelsBody = ({
  project,
  updateModelForm,
  setModelToUpdateF,
  handleModelUpdateModal,
  props,
  loadingModal,
  setModelF,
  handleDeleteModal,
}) => {
  return (
    <div style={{ margin: "20px" }}>
      <Row gutter={[16, 16]}>
        {project[0].createdModels.map((model) => {
          return (
            <Col key={model._id} xs={24} sm={24} md={12} lg={8}>
              <Card
                key={model._id}
                title={
                  <>
                    <BlockOutlined />
                    {` `}
                    {model.createdModelName}
                  </>
                }
                bordered={true}
                style={{
                  marginBottom: "40px",
                  borderTop: "3px solid #364d79",
                }}>
                <p>
                  <strong>Model description:</strong> {model.description}
                </p>
                <Button
                  style={{
                    margin: "15px 0",
                    backgroundColor: "white",
                    color: "#364d79",
                    width: "100%",
                  }}
                  onClick={async () => {
                    await updateModelForm.resetFields();
                    await setModelToUpdateF(
                      model.createdModelName,
                      model._id,
                      model.description
                    );
                    handleModelUpdateModal();
                  }}
                  block>
                  Update Model's name and description
                </Button>
                <p>
                  <strong>Model id:</strong> {model._id}
                </p>
                <p>
                  <strong>Creation date:</strong>{" "}
                  {model.created_at.slice(0, 10)}
                </p>
                <p>
                  <strong>Last updated:</strong> {model.updated_at.slice(0, 10)}
                </p>
                <Collapse
                  style={{
                    background:
                      "linear-gradient(90deg, white 0%, #364d79 220%)",
                    marginBottom: "15px",
                  }}>
                  <Panel header="Show API to fetch this model" key="1">
                    <p>
                      <strong>Route :</strong>{" "}
                      https://vicaty-api.herokuapp.com/user/createdModel/
                      {model._id}
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
                    width: "100%",
                    margin: "15px 0",
                    backgroundColor: "#364d79",
                    color: "white",
                  }}>
                  <Link
                    to={`/model/${model.createdModelName}/${model._id}/${props.match.params.projectName}/${props.match.params.projectId}`}>
                    Go to model
                  </Link>
                </Button>
                <Button
                  style={{
                    width: "100%",
                    margin: "15px 0",
                    backgroundColor: "red",
                    color: "white",
                  }}
                  onClick={() => {
                    setModelF(model._id);
                    handleDeleteModal();
                  }}>
                  DELETE
                </Button>
                {loadingModal ? "this could take a while, please wait" : ""}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ModelsBody;
