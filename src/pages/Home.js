import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Carousel } from "antd";
const contentStyle = {
  height: "250px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const { Title, Text } = Typography;
const Home = () => {
  return (
    <div>
      <>
        <center>
          <div style={{ width: "50vw", marginBottom: "40px" }}>
            <Title level={1}>Vicaty </Title>
            <Text> An API builder made with love</Text>
          </div>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>Easy to Use</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Modify data within seconds</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Build API's without a line of code</h3>
            </div>
            <div>
              <h3 style={contentStyle}>Made with love</h3>
            </div>
          </Carousel>
        </center>
        <br />
      </>
    </div>
  );
};

export default Home;
