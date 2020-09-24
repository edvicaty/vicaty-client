import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography, Input, Card, Row, Col } from "antd";
import axios from "axios";
import { updatePhoto, getCurrentUser } from "../services/auth";
import { viewProjects } from "../services/backend";
import { Context } from "../context";

const { Title, Text } = Typography;

const Profile = () => {
  const { user, loginUser } = useContext(Context);
  const [projects, setProjects] = useState(null);
  const [fetchedProjects, setFetchedProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await viewProjects();
      setProjects(data);
    };
    getProjects();
  }, [fetchedProjects]);

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
          </Title>
          <h3 style={{ color: "white" }}>
            Here you can see all of your existing projects. Don't have any?
            click below to create a new one!
          </h3>
          <Button
            // type="primary"
            style={{
              margin: "15px 0",
              backgroundColor: "white",
              color: "#638165",
            }}
            block>
            Create New project!
          </Button>
        </div>
        <div style={{ margin: "20px" }}>
          <Row gutter={[16, 16]}>
            {projects?.map((project) => {
              return (
                <Col key={project._id} sm={24} md={12} lg={8}>
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
                      onClick={() => {
                        console.log(`clicked`);
                      }}
                      style={{
                        margin: "15px 0",
                        backgroundColor: "#638165",
                        color: "white",
                      }}
                      block>
                      Go to project
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
