import React from "react";
import { BorderOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, Typography, Card, Row, Col, Collapse } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;
const ElementsBody = ({
  model,
  props,
  updateElementModal,
  handleDataUpdateModal,
  deleteElementModal,
  handleDataCreationModal,
  setElementNameF,
  setElementToDeleteF,
  handleElementDeletionModal,
}) => {
  return (
    <Row gutter={[16, 16]}>
      {model[0].elements.map((element) => {
        let currentElement = Object.entries(element)[0][0];
        return (
          <Col
            key={Object.entries(element)[0][0]}
            xs={24}
            sm={24}
            md={12}
            lg={8}
            style={{ width: "100%" }}>
            <Card
              title={
                <>
                  <BorderOutlined />
                  {` `} element name: {Object.entries(element)[0][0]}
                </>
              }
              bordered={true}>
              <Collapse
                style={{
                  background: "linear-gradient(90deg, white 0%, #364d79 300%)",
                  marginBottom: "15px",
                }}>
                <Panel header="API endpoints for this element" key="1">
                  <hr />
                  <Title level={5}>Get Element </Title>
                  <p>
                    <strong>Route :</strong>{" "}
                    https://vicaty-api.herokuapp.com/user/element/getSingle/
                    {props.match.params.modelId}/
                    {Object.entries(element)[0][0].replace(/ /g, "%20")}
                  </p>
                  <p>
                    <strong>Request Type :</strong> POST
                  </p>
                  <p>
                    <strong>Request Body :</strong> userId : *your user Id*
                  </p>
                  <hr />
                  <Title level={5}>Delete Element </Title>
                  <p>
                    <strong>Route :</strong>{" "}
                    https://vicaty-api.herokuapp.com/user/element/delete/
                    {props.match.params.modelId}/
                    {Object.entries(element)[0][0].replace(/ /g, "%20")}
                  </p>
                  <p>
                    <strong>Request Type :</strong> POST
                  </p>
                  <p>
                    <strong>Request Body :</strong> userId : *your user Id*
                  </p>
                  <hr />
                  <Title level={5}>Add Data</Title>
                  <p>
                    <strong>Route :</strong>{" "}
                    https://vicaty-api.herokuapp.com/user/element/addSingle/
                    {props.match.params.modelId}/
                    {Object.entries(element)[0][0].replace(/ /g, "%20")}
                  </p>
                  <p>
                    <strong>Request Type :</strong> POST
                  </p>
                  <p>
                    <strong>Request Body :</strong> userId : *your user ||
                    value: *your new data value*
                  </p>
                </Panel>
              </Collapse>
              <Button
                style={{ backgroundColor: "#364D78", color: "white" }}
                onClick={() => {
                  handleDataCreationModal();
                  setElementNameF(Object.entries(element)[0][0]);
                }}>
                Add Data
              </Button>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginBottom: "20px",
                }}
                onClick={() => {
                  setElementToDeleteF(Object.entries(element)[0][0]);
                  handleElementDeletionModal();
                }}>
                Delete Element
              </Button>
              <Collapse>
                <Panel
                  header={
                    <>
                      <FileTextOutlined />
                      {` `} Show data
                    </>
                  }
                  key="1">
                  {Object.entries(element)[0][1].data.map((entry) => {
                    return (
                      <Card
                        title={
                          <Title level={5}>
                            <FileTextOutlined /> Data ID: {entry.id}
                          </Title>
                        }
                        bordered={true}
                        style={{
                          width: "100%",
                          borderTop: "1px solid #364D78",
                        }}
                        key={entry.id}>
                        <Collapse
                          style={{
                            background:
                              "linear-gradient(90deg, white 0%, #364d79 300%)",
                            marginBottom: "15px",
                          }}>
                          <Panel header="API endpoints for this data" key="1">
                            <hr />
                            <Title level={5}>Delete Data </Title>
                            <p>
                              <strong>Route :</strong>{" "}
                              https://vicaty-api.herokuapp.com/user/element/deleteSingle/
                              {props.match.params.modelId}/
                              {Object.entries(element)[0][0].replace(
                                / /g,
                                "%20"
                              )}
                              /{entry.id}
                            </p>
                            <p>
                              <strong>Request Type :</strong> POST
                            </p>
                            <p>
                              <strong>Request Body :</strong> userId : *your
                              user Id*
                            </p>
                            <hr />
                            <Title level={5}>Update Data</Title>
                            <p>
                              <strong>Route :</strong>{" "}
                              https://vicaty-api.herokuapp.com/user/element/updateSingle/
                              {props.match.params.modelId}/
                              {Object.entries(element)[0][0].replace(
                                / /g,
                                "%20"
                              )}
                              /{entry.id}
                            </p>
                            <p>
                              <strong>Request Type :</strong> PUT
                            </p>
                            <p>
                              <strong>Request Body :</strong> userId : *your
                              user || value: *your new data value*
                            </p>
                          </Panel>
                        </Collapse>
                        <Title level={5}>Data value:</Title>{" "}
                        <p> {entry.value} </p>
                        <Button
                          style={{
                            margin: "15px 0",
                            backgroundColor: "#364D78",
                            color: "white",
                          }}
                          onClick={() => {
                            updateElementModal(
                              currentElement,
                              entry.id,
                              entry.value
                            );
                            handleDataUpdateModal();
                          }}>
                          Modify
                        </Button>
                        <Button
                          style={{
                            margin: "15px 0",
                            backgroundColor: "red",
                            color: "white",
                          }}
                          onClick={async () => {
                            deleteElementModal(currentElement, entry.id);
                          }}>
                          Delete
                        </Button>
                      </Card>
                    );
                  })}
                </Panel>
              </Collapse>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ElementsBody;
