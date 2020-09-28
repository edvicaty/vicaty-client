import React, { useContext, useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
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
} from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import { viewModel, getElement } from "../services/backend";
import {
  addSingle,
  createElement,
  deleteSingleData,
  updateSingle,
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
  const [newDataValue, setNewDataValue] = useState(null);
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
  //
  //
  //
  //
  //   console.log(`modeeeeeel`, model);
  //TODO: complete edit and delete
  if (model) {
    //TODO voy aqui, these are the necessary Routes for Mapping data as JSX
    //TODO: put elements[i] index as key to search for it
    // console.log(`namee`, Object.entries(model[0].elements[0])[0][0]); //name of the element as String, ELEMENTS[i] INDEX IS IMPORTANT
    // console.log(`arrToMap`, model[0].elements); //name of the element as String, ELEMENTS[i] INDEX IS IMPORTANT
    // console.log(`dataa`, Object.entries(model[0].elements[0])[0][1].data); //data (values of elements) as array of objects
    // console.log(
    //   `valuee`,
    //   Object.entries(model[0].elements[0])[0][1].data[0].value
    // );
    //value of element as String (or primitive data)
    // console.log(
    //   `data. knowing element's name and elements index IS IMPORTANT`,
    //   model[0].elements[0].testElement1Edg.data
    // ); //name of the element as String
  }
  //
  //
  //
  //
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
              paddingLeft: "15vw",
              paddingRight: "15vw",
              marginTop: "15px",
              background: "linear-gradient(90deg, #364d79 0%, white 220%)",

              color: "white",
            }}>
            <Title style={{ color: "white" }} level={1}>
              {props.match.params.modelName}'s ELEMENTS
            </Title>
            <h3 style={{ color: "white" }}>
              Here you can see all your elements corresponding to the
              {props.match.params.modelName} model. click below to create a new
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
              Create New Element!
            </Button>
          </div>
          <div style={{ margin: "20px" }}>
            <Row gutter={[16, 16]}>
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
              {model[0].elements.map((element) => {
                let currentElement = Object.entries(element)[0][0];
                return (
                  <Card
                    title={`element name: ${Object.entries(element)[0][0]}`}
                    bordered={false}
                    style={{ width: "100vw" }}
                    key={Object.entries(element)[0][0]}>
                    <Collapse
                    //   onChange={showData}
                    >
                      <Panel header="Show Data" key="1">
                        <Button
                          onClick={() => {
                            handleDataCreationModal();
                            setElementNameF(Object.entries(element)[0][0]);
                          }}>
                          Add Data
                        </Button>

                        <Title level={3}>Existing Data:</Title>
                        {Object.entries(element)[0][1].data.map((entry) => {
                          return (
                            <Card
                              title={`data id: ${entry.id}`}
                              bordered={false}
                              style={{ width: "100%" }}
                              key={entry.id}>
                              {console.log(`data valuee`, entry.value)}
                              <p> data value: </p>
                              <p> {entry.value} </p>
                              <Button
                                style={{
                                  margin: "15px 0",
                                  backgroundColor: "#638165",
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
                                  backgroundColor: "white",
                                  color: "red",
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
