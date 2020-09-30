import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Carousel, Image } from "antd";
import {
  ApartmentOutlined,
  HomeOutlined,
  FileOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  BlockOutlined,
  BorderOutlined,
  FileTextOutlined,
  HeartOutlined,
  FieldTimeOutlined,
  CodeOutlined,
  SendOutlined,
} from "@ant-design/icons";
const contentStyle = {
  height: "350px",
  fontSize: "2rem",
  color: "#fff",
  lineHeight: "310px",
  textAlign: "center",
  background: "linear-gradient(90deg, #364d79 0%, white 220%)",
};
const { Title, Text } = Typography;
const Home = () => {
  return (
    <center>
      <div style={{ wordBreak: "normal" }}>
        <Title style={{ fontSize: "5rem", margin: "2rem 0 1rem 0" }} level={1}>
          Vicaty{" "}
          <span
            style={{
              fontSize: "3.2rem",
              color: "darkGray",
              position: "relative",
              right: "53px",
              top: "37px",
            }}>
            Vicaty {` `}{" "}
            <SendOutlined
              style={{ color: "#364D78", marginLeft: "5px" }}
              rotate="90"
            />
          </span>
        </Title>
        <br />
        <br />
        <br />
        <Text style={{ color: "gray", fontSize: "1.1rem" }}>
          A Headless CMS made with <HeartOutlined />
        </Text>
        <Carousel style={{ marginTop: "2rem" }} autoplay effect="fade">
          <div>
            <h3 style={contentStyle}>
              <ApartmentOutlined style={{ color: "white" }} /> {`  `}
              Easy to Use
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <FieldTimeOutlined style={{ color: "white" }} /> {`  `}
              Modify data within seconds
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <CodeOutlined style={{ color: "white" }} /> {`  `}
              Build API's without a line of code
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              Made with love <HeartOutlined block style={{ color: "white" }} />
            </h3>
          </div>
        </Carousel>
        <Title
          style={{
            fontSize: "3.5rem",
            marginTop: "2rem",
          }}
          level={1}>
          <ApartmentOutlined /> Easy to use{" "}
          <span
            style={{
              fontSize: "2.2rem",
              color: "darkGray",
            }}>
            Easy to use
          </span>
        </Title>
        <br />
        <br />
        <br />
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          Plan your project and start building it immediately!{" "}
        </Title>
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          with intuitive work flow and easy access documentation{" "}
        </Title>
        <Image
          style={{ margin: "30px 10%", width: "100%" }}
          src="/docImgs/tree2d.png"
        />
        <Title
          style={{
            fontSize: "3.5rem",
            marginTop: "8rem",
          }}
          level={1}>
          <FieldTimeOutlined /> Modify data within seconds{" "}
          <span
            style={{
              fontSize: "2.2rem",
              color: "darkGray",
            }}>
            Modify data within seconds
          </span>
        </Title>
        <br />
        <br />
        <br />
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          Plan your project and start building it immediately!{" "}
        </Title>
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          with intuitive work flow and easy access documentation{" "}
        </Title>
        <Image
          style={{ margin: "30px 10%", width: "100%" }}
          src="/docImgs/dinnerModel.png"
        />
        <Title
          style={{
            fontSize: "3.5rem",
            marginTop: "8rem",
          }}
          level={1}>
          <CodeOutlined /> Build API's without a line of code{" "}
          <span
            style={{
              fontSize: "2.2rem",
              color: "darkGray",
            }}>
            Build API's without a line of code
          </span>
        </Title>
        <br />
        <br />
        <br />
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          Vicaty allows you to create, modify and delete data{" "}
        </Title>
        <Title
          style={{
            fontSize: "2rem",
            color: "#50648A",
          }}
          level={1}>
          directly from the dashboard or using your API's endpoints{" "}
        </Title>
        <br />
        <br />
        <br />
        <Title
          style={{
            fontSize: "4.2rem",
            color: "#50648A",
          }}
          level={1}>
          <Link to="/signup" style={{ color: "#364D78" }}>
            <UserAddOutlined /> Join Now!
          </Link>
        </Title>
        <br />
        <br />
        <br />
      </div>
    </center>
  );
};

export default Home;
