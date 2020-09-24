import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;
const Home = () => {
  return (
    <div>
      <>
        <center>
          <div style={{ width: "50vw", height: "50vh" }}>
            <Title level={1}>Vicaty </Title>
            <Text> An API builder made with love</Text>
            <Link to="/login">
              <Button
                style={{
                  height: "25vh",
                  marginTop: "15px",
                  backgroundColor: "#638165",
                  color: "white",
                  borderRadius: "10px",
                }}
                // type="primary"
                block>
                LOGIN
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                style={{ height: "25vh", borderRadius: "10px" }}
                type="default"
                block>
                SIGNUP
              </Button>
            </Link>
          </div>
        </center>
        <br />
      </>
    </div>
  );
};

export default Home;
