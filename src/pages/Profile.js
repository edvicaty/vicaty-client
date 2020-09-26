import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography, Input, Card, Row, Col, Form, Modal } from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import {
  viewProjects,
  createProject,
  deleteProject,
} from "../services/backend";
import { Context } from "../context";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Profile = () => {
  const { user, loginUser } = useContext(Context);
  const [projects, setProjects] = useState(null);
  const [fetchedProjects, setFetchedProjects] = useState(false);
  const [form] = Form.useForm();
  const [modalState, setModalState] = useState(false);
  const [projectDeleteModal, setProjectDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
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
  console.log(projects);
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
          title="Create new Project"
          visible={modalState}
          onOk={handleModal}
          onCancel={handleModal}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Project name"
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
            width: "70vw",
            marginTop: "15px",
            backgroundColor: "#638165",
            color: "white",
            borderRadius: "5px",
          }}>
          <Title style={{ color: "white" }} level={1}>
            {user.username.toUpperCase()}'s PROJECTS
            <p>USER ID : {user._id}</p>
          </Title>
          <h3 style={{ color: "white" }}>
            Here you can see all of your existing projects. Don't have any?
            click below to create a new one!
          </h3>
          <Button
            style={{
              margin: "15px 0",
              backgroundColor: "white",
              color: "#638165",
            }}
            onClick={handleModal}
            block>
            Create New project!
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
                        backgroundColor: "#638165",
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
