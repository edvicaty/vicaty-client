import React, { useContext, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BlockOutlined,
  BorderOutlined,
  FileTextOutlined,
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
  notification,
  Breadcrumb,
} from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import { viewModel, getElement } from "../services/backend";
import {
  addSingle,
  createElement,
  deleteSingleData,
  updateSingle,
  deleteElement,
} from "../services/api";
import { Context } from "../context";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
const { Panel } = Collapse;
const Model = (props) => {
  const { user, loginUser } = useContext(Context);
  const [model, setModel] = useState(null);
  const [form] = Form.useForm();
  const [dataForm] = Form.useForm();
  const [updateDataForm] = Form.useForm();
  const [fetchedModel, setFetchedModel] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [dataCreationModal, setDataCreationModal] = useState(false);
  const [elementName, setElementName] = useState(null);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [valueId, setValueId] = useState(null);
  const [dataUpdateModal, setDataUpdateModal] = useState(false);
  const [dataValue, setDataValue] = useState(null);

  const [elementToDelete, setElementToDelete] = useState(null);
  const [elementDeleteModal, setElementDeleteModal] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "ERROR",
      description:
        "An element already exists with that name. Element's names must be unique",
    });
  };
  //load data functions
  useEffect(() => {
    const getModel = async () => {
      const { data } = await viewModel(props.match.params.modelId);
      setModel([data]);

      if (fetchedModel === false) {
        setFetchedModel(true);
      }
    };
    getModel();
  }, [fetchedModel]);

  //Form functions
  async function onFinish({ elementName }) {
    const newElem = await createElement(
      elementName,
      props.match.params.modelId,
      user._id
    );
    if (!newElem.data) {
      openNotificationWithIcon(`warning`);
    } else {
      form.resetFields();
      setFetchedModel(false);
      handleModal();
    }
  }

  function handleModal() {
    setModalState(!modalState);
    form.resetFields();
  }
  function handleDataCreationModal() {
    setDataCreationModal(!dataCreationModal);
    dataForm.resetFields();
  }
  async function onFinishData(value) {
    addSingle(value, props.match.params.modelId, elementName, user._id);

    setFetchedModel(false);
    dataForm.resetFields();
    handleDataCreationModal();
  }
  async function setElementNameF(elementNameN) {
    setElementName(elementNameN);
  }
  async function deleteElementModal(elementNameN, valueIdN) {
    await setElementName(elementNameN);
    await setValueId(valueIdN);
    handleDeleteElementModal();
  }
  function handleDeleteElementModal() {
    setDeleteModalState(!deleteModalState);
    form.resetFields();
  }
  function deleteWithConfirmation() {
    console.log(`element to deleteee`, elementName, valueId);
    deleteSingleData(
      props.match.params.modelId,
      elementName,
      valueId,
      user._id
    );
    setFetchedModel(false);
    form.resetFields();

    handleDeleteElementModal();
  }
  async function updateElementModal(elementNameN, valueIdN, dataValue) {
    await setElementName(elementNameN);
    await setValueId(valueIdN);
    await setDataValue(dataValue);
  }
  function handleDataUpdateModal() {
    setDataUpdateModal(!dataUpdateModal);
    updateDataForm.resetFields();
  }
  function onFinishUpdateData(value) {
    updateSingle(
      props.match.params.modelId,
      elementName,
      valueId,
      value,
      user._id
    );
    setFetchedModel(false);
    handleDataUpdateModal();
  }

  //Element to delete
  function handleElementDeletionModal() {
    setElementDeleteModal(!elementDeleteModal);
  }

  function setElementToDeleteF(elementName) {
    setElementToDelete(elementName);
  }

  function confirmDeleteElement() {
    console.log(`elem to dell`, elementToDelete);
    deleteElement(elementToDelete, props.match.params.modelId, user._id);
    setFetchedModel(false);
    handleElementDeletionModal();
  }
  //get elements
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
    model ? (
      <div>
        <center>
          <Modal
            title="Create new Element"
            visible={modalState}
            onOk={handleModal}
            onCancel={handleModal}>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                label="Element name"
                name="elementName"
                rules={[
                  { required: true, message: "Please input element name" },
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
              <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                elements
              </span>
              {`  `} corresponding to the {props.match.params.modelName} model.
              Click below to create a new one!
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
          <div style={{ margin: "20px" }}>
            <Modal
              title="Add data"
              visible={dataCreationModal}
              onOk={handleDataCreationModal}
              onCancel={handleDataCreationModal}>
              <Form layout="vertical" form={dataForm} onFinish={onFinishData}>
                <Form.Item
                  label="Data value"
                  name="data"
                  rules={[
                    {
                      required: true,
                      message: "Please input data",
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
                    htmlType="submit">
                    Add Data
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <Modal
              title="Delete Data"
              visible={deleteModalState}
              onOk={handleDeleteElementModal}
              onCancel={handleDeleteElementModal}>
              <Title level={2}>
                Are you sure you want to delete this entry?
              </Title>
              <Button
                style={{
                  marginTop: "15px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                }}
                onClick={deleteWithConfirmation}
                block>
                DELETE
              </Button>
            </Modal>
            <Modal
              title="Delete Element"
              visible={elementDeleteModal}
              onOk={handleElementDeletionModal}
              onCancel={handleElementDeletionModal}>
              <Title level={2}>
                Are you sure you want to delete this element ({elementToDelete})
                ?
              </Title>
              <Button
                style={{
                  marginTop: "15px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "10px",
                }}
                onClick={confirmDeleteElement}
                block>
                DELETE
              </Button>
            </Modal>
            <Modal
              title="Update Data"
              visible={dataUpdateModal}
              onOk={handleDataUpdateModal}
              onCancel={handleDataUpdateModal}>
              <Title level={3}>
                Current value:
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#696969",
                    marginLeft: "10px",
                  }}>
                  {dataValue}
                </span>
              </Title>
              <Form
                layout="vertical"
                form={updateDataForm}
                onFinish={onFinishUpdateData}>
                <Form.Item
                  label="Input new value:"
                  name="data"
                  rules={[
                    {
                      required: true,
                      message: "Please input data",
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
                    htmlType="submit"
                    block>
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
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
                          background:
                            "linear-gradient(90deg, white 0%, #364d79 300%)",
                          marginBottom: "15px",
                        }}>
                        <Panel header="API endpoints for this element" key="1">
                          <hr />
                          <Title level={5}>Get Element </Title>
                          <p>
                            <strong>Route :</strong>{" "}
                            https://vicaty-api.herokuapp.com/user/element/getSingle/
                            {props.match.params.modelId}/
                            {Object.entries(element)[0][0]}
                          </p>
                          <p>
                            <strong>Request Type :</strong> POST
                          </p>
                          <p>
                            <strong>Request Body :</strong> userId : *your user
                            Id*
                          </p>
                          <hr />
                          <Title level={5}>Delete Element </Title>
                          <p>
                            <strong>Route :</strong>{" "}
                            https://vicaty-api.herokuapp.com/user/element/delete/
                            {props.match.params.modelId}/
                            {Object.entries(element)[0][0]}
                          </p>
                          <p>
                            <strong>Request Type :</strong> POST
                          </p>
                          <p>
                            <strong>Request Body :</strong> userId : *your user
                            Id*
                          </p>
                          <hr />
                          <Title level={5}>Add Data</Title>
                          <p>
                            <strong>Route :</strong>{" "}
                            https://vicaty-api.herokuapp.com/user/element/addSingle/
                            {props.match.params.modelId}/
                            {Object.entries(element)[0][0]}
                          </p>
                          <p>
                            <strong>Request Type :</strong> POST
                          </p>
                          <p>
                            <strong>Request Body :</strong> userId : *your user
                            || value: *your new data value*
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
                                  <Panel
                                    header="API endpoints for this data"
                                    key="1">
                                    <hr />
                                    <Title level={5}>Delete Data </Title>
                                    <p>
                                      <strong>Route :</strong>{" "}
                                      https://vicaty-api.herokuapp.com/user/element/deleteSingle/
                                      {props.match.params.modelId}/
                                      {Object.entries(element)[0][0]}/{entry.id}
                                    </p>
                                    <p>
                                      <strong>Request Type :</strong> POST
                                    </p>
                                    <p>
                                      <strong>Request Body :</strong> userId :
                                      *your user Id*
                                    </p>
                                    <hr />
                                    <Title level={5}>Update Data</Title>
                                    <p>
                                      <strong>Route :</strong>{" "}
                                      https://vicaty-api.herokuapp.com/user/element/updateSingle/
                                      {props.match.params.modelId}/
                                      {Object.entries(element)[0][0]}/{entry.id}
                                    </p>
                                    <p>
                                      <strong>Request Type :</strong> PUT
                                    </p>
                                    <p>
                                      <strong>Request Body :</strong> userId :
                                      *your user || value: *your new data value*
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
                                    deleteElementModal(
                                      currentElement,
                                      entry.id
                                    );
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

export default Model;
