import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import {
  Button,
  Typography,
  Input,
  Card,
  Row,
  Col,
  Form,
  Modal,
  Collapse,
  Breadcrumb,
} from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import {
  viewProject,
  createModel,
  deleteCreatedModel,
  editModel,
} from "../services/backend";
import { Context } from "../context";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Project = (props) => {
  const { user, loginUser } = useContext(Context);
  const [project, setProject] = useState(null);
  const [form] = Form.useForm();
  const [updateModelForm] = Form.useForm();
  const [fetchedProject, setFetchedProject] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [modelDeleteModal, setModelDeleteModal] = useState(false);
  const [modelToDelete, setModelToDelete] = useState(null);
  const [modelUpdateModal, setModelUpdateModal] = useState(false);
  const [modelToUpdate, setModelToUpdate] = useState(false);

  //load data functions
  useEffect(() => {
    const getProject = async () => {
      const { data } = await viewProject(props.match.params.projectId);
      setProject(data);
      if (fetchedProject === false) {
        setFetchedProject(true);
      }
    };
    getProject();
  }, [fetchedProject]);

  //Form functions
  async function onFinish({ createdModelName, description }) {
    createModel(createdModelName, props.match.params.projectId, description);
    setFetchedProject(false);
    handleModal();
  }

  function handleModal() {
    setModalState(!modalState);
  }
  function handleDeleteModal() {
    setModelDeleteModal(!modelDeleteModal);
  }
  function setModelF(modelId) {
    setModelToDelete(modelId);
  }
  function deleteModelConfirmed() {
    console.log(modelToDelete);
    const message = deleteCreatedModel(modelToDelete);
    console.log(message);
    setFetchedProject(false);
    handleDeleteModal();
  }
  function setModelToUpdateF(modelName, modelId, description) {
    setModelToUpdate({
      modelName: modelName,
      modelId: modelId,
      description: description,
    });
  }
  function handleModelUpdateModal() {
    setModelUpdateModal(!modelUpdateModal);
    updateModelForm.resetFields();
  }
  function onFinishUpdate(values) {
    editModel(modelToUpdate.modelId, values.modelName, values.description);
    updateModelForm.resetFields();
    handleModelUpdateModal();
    setFetchedProject(false);
  }
  //image uploader
  const uploadImageUrl = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "lab-ironprofile-ahe");
    const {
      data: { secure_url },
    } = await axios.post(
      "https://api.cloudinary.com/v1_1/vicaty/image/upload",
      data
    );
    await updatePhoto(secure_url);
    const { user } = await getCurrentUser();
    loginUser(user);
  };
  return user ? (
    project ? (
      <div>
        <center>
          <Modal
            title="Create new Model"
            visible={modalState}
            onOk={handleModal}
            onCancel={handleModal}>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                label="Model name"
                name="createdModelName"
                rules={[
                  { required: true, message: "Please input model name" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Model description or value"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input model value or description",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#364d79",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  block
                  htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Update Model"
            visible={modelUpdateModal}
            onOk={handleModelUpdateModal}
            onCancel={handleModelUpdateModal}>
            <Form
              layout="vertical"
              form={updateModelForm}
              onFinish={onFinishUpdate}>
              <Form.Item
                initialValue={modelToUpdate.modelName}
                label="Model name"
                name="modelName"
                rules={[
                  { required: true, message: "Please input model's name" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                initialValue={modelToUpdate.description}
                label="Model description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input model's description",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#638165",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  block
                  htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Are you sure you want to delete this Model?"
            visible={modelDeleteModal}
            onOk={handleDeleteModal}
            onCancel={handleDeleteModal}>
            <Button
              style={{
                margin: "15px 0",
                backgroundColor: "red",
                color: "white",
              }}
              block
              onClick={() => {
                deleteModelConfirmed();
              }}>
              DELETE
            </Button>
          </Modal>
          <div
            style={{
              width: "100vw",
              padding: "30px 15vw",
              background: "linear-gradient(90deg, #364d79 0%, white 220%)",
              color: "white",
            }}>
            <Breadcrumb
              style={{ position: "relative", bottom: "20px" }}
              separator="">
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
              <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                models
              </span>
              {"  "}
              corresponding to the
              {props.match.params.projectName} project. click below to create a
              new one!
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
                        <strong>Last updated:</strong>{" "}
                        {model.updated_at.slice(0, 10)}
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
                            <strong>Request Body :</strong> userId : *your user
                            Id*
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
                      {/* <Collapse
                        style={{
                          background:
                            "linear-gradient(90deg, white 0%, #364d79 220%)",
                        }}>
                        <Panel
                          header="All available API's endpoints for current model"
                          key="1">
                          {Object.entries(model.api).map((object) => {
                            return (
                              <Card
                                style={{
                                  background:
                                    "linear-gradient(90deg, white 0%, #364d79 220%)",
                                }}
                                key={object[0]}>
                                <p>
                                  <strong style={{ width: "100%" }}>
                                    Endpoint function:{" "}
                                  </strong>
                                  {object[0]}
                                </p>
                                <p>
                                  <strong style={{ width: "100%" }}>
                                    Request:{" "}
                                  </strong>
                                  {object[1].reqType}
                                </p>
                                <p>
                                  <strong style={{ width: "100%" }}>
                                    Route:{" "}
                                  </strong>{" "}
                                  {object[1].route}
                                </p>
                                <p>
                                  <strong style={{ width: "100%" }}>
                                    Request body elements:{" "}
                                  </strong>
                                  {object[1].body}
                                </p>
                              </Card>
                            );
                          })}
                        </Panel>
                      </Collapse> */}
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </center>
      </div>
    ) : (
      <p>Loading</p>
    )
  ) : (
    <Redirect to="/" />
  );
};

export default Project;
