import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography, Input, Card, Row, Col, Form, Modal } from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import {
  viewProjects,
  createProject,
  deleteProject,
  editProject,
  duplicateProject,
} from "../services/backend";
import { Context } from "../context";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Profile = () => {
  const { user, loginUser } = useContext(Context);
  const [projects, setProjects] = useState(null);
  const [fetchedProjects, setFetchedProjects] = useState(false);
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [duplicateForm] = Form.useForm();
  const [modalState, setModalState] = useState(false);
  const [projectDeleteModal, setProjectDeleteModal] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [projectToUpdate, setProjectToUpdate] = useState(`null`);

  const [duplicationModalState, setDuplicationModalState] = useState(false);
  const [projectToDuplicate, setProjectToDuplicate] = useState(`null`);
  //load data functions
  useEffect(() => {
    const getProjects = async () => {
      const { data } = await viewProjects();
      setProjects(data);
      if (fetchedProjects === false) {
        setFetchedProjects(true);
      }
    };
    getProjects();
  }, [fetchedProjects]);
  //Form functions
  async function onFinish(values) {
    createProject(values);
    setFetchedProjects(false);
    form.resetFields();
    handleModal();
  }

  function handleModal() {
    setModalState(!modalState);
  }

  function handleDeleteProject() {
    setProjectDeleteModal(!projectDeleteModal);
  }
  function setProjectF(projectId) {
    setProjectToDelete(projectId);
  }
  function deleteProjectConfirmed() {
    const message = deleteProject(projectToDelete);
    setFetchedProjects(false);
    handleDeleteProject();
  }
  function setProjectToUpdateF(projectName, projectId) {
    setProjectToUpdate({ projectName: projectName, projectId: projectId });
  }
  function handleUpdateModal() {
    setUpdateModalState(!updateModalState);
    updateForm.resetFields();
  }
  function onFinishUpdate(values) {
    // console.log(`form values`, values);
    // console.log(`projtouuup`, projectToUpdate);
    editProject(projectToUpdate.projectId, values.projectName);
    updateForm.resetFields();
    handleUpdateModal();
    setFetchedProjects(false);
  }
  //duplication functions
  function setProjectToDuplicateF(projectName, projectId) {
    setProjectToDuplicate({ projectName: projectName, projectId: projectId });
  }

  function handleDuplicationModal() {
    setDuplicationModalState(!duplicationModalState);
    duplicateForm.resetFields();
  }

  async function onFinishDuplication(values) {
    await duplicateProject(projectToDuplicate.projectId, values.projectName);
    duplicateForm.resetFields();
    handleDuplicationModal();
    setFetchedProjects(false);
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
    <div>
      <center>
        <Modal
          title="Create new Project Schema"
          visible={modalState}
          onOk={handleModal}
          onCancel={handleModal}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Project Schema name"
              name="projectName"
              rules={[{ required: true, message: "Please input project" }]}>
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
          title="Update Project Schema's name"
          visible={updateModalState}
          onOk={handleUpdateModal}
          onCancel={handleUpdateModal}>
          <Form layout="vertical" form={updateForm} onFinish={onFinishUpdate}>
            <Form.Item
              initialValue={projectToUpdate.projectName}
              label="Project Schema name"
              name="projectName"
              rules={[
                { required: true, message: "Please input project's name" },
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
          title={`Duplicate Project from ${projectToDuplicate.projectName}`}
          visible={duplicationModalState}
          onOk={handleDuplicationModal}
          onCancel={handleDuplicationModal}>
          <Form
            layout="vertical"
            form={duplicateForm}
            onFinish={onFinishDuplication}>
            <Form.Item
              initialValue={projectToDuplicate.projectName}
              label="New Project name"
              name="projectName"
              rules={[
                { required: true, message: "Please input project's name" },
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
                Duplicate
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="Are you sure you want to delete this Project?"
          visible={projectDeleteModal}
          onOk={handleDeleteProject}
          onCancel={handleDeleteProject}>
          <Button
            style={{
              margin: "15px 0",
              backgroundColor: "red",
              color: "white",
            }}
            block
            onClick={() => {
              deleteProjectConfirmed();
            }}>
            DELETE
          </Button>
        </Modal>
        <div
          style={{
            width: "100vw",
            paddingLeft: "15vw",
            paddingRight: "15vw",
            marginTop: "15px",
            background: "linear-gradient(90deg, #364d79 0%, white 220%)",

            color: "white",
            borderRadius: "3px",
          }}>
          <Title style={{ color: "white" }} level={1}>
            {user.username.toUpperCase()}'s Projects SCHEMAS
            <p>USER ID : {user._id}</p>
          </Title>
          <h3 style={{ color: "white" }}>
            Here you can see all of your existing projects schemas. Don't have
            any? click below to create a new one!
          </h3>
          <Button
            style={{
              margin: "15px 0",
              backgroundColor: "white",
              color: "#364d79",
            }}
            onClick={handleModal}
            block>
            Create New Project Schema!
          </Button>
        </div>
        <div style={{ margin: "20px" }}>
          <Row gutter={[16, 16]}>
            {projects?.map((project) => {
              return (
                <Col key={project._id} xs={24} sm={24} md={12} lg={8}>
                  <Card
                    title={project.projectName}
                    bordered={false}
                    style={{ width: 300 }}>
                    <Button
                      style={{
                        margin: "15px 0",
                        backgroundColor: "white",
                        color: "#364d79",
                      }}
                      onClick={async () => {
                        await updateForm.resetFields();
                        await setProjectToUpdateF(
                          project.projectName,
                          project._id
                        );
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
                    <Button
                      style={{
                        margin: "15px 0",
                        backgroundColor: "#364d79",
                        color: "white",
                      }}
                      block>
                      <Link
                        to={`/project/${project.projectName}/${project._id}`}>
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
      </center>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
{
  /* <img
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={user.image}
          alt="profile-picture"
        /> 
        <input
          type="file"
          name="image"
          id="image"
          onChange={uploadImageUrl}
        />
        */
}
