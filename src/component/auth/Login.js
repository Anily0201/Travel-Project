import { Button, Card, Form, Input, notification } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LeftCircleFilled } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("https://localhost:7292/api/Auth/login", {
        username: values.UserName,
        password: values.Password,
      });

      if (response.data) {
        notification.success({ message: "Login successfully!" });
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/"); 
      } else {
        notification.error({
          message: "Invalid username or password!",
          placement: "top",
        });
      }
    } catch (error) {
      notification.error({
        message: "Login failed! Please try again later.",
        placement: "top",
      });
    }
  };

  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-80 bg-white">
        <div>
          <div>
            <LeftCircleFilled onClick={() => navigate(-1)} />
          </div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Login</h3>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name={"UserName"}
              label={"User Name"}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"Password"}
              label={"Password"}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <div className="flex justify-between">
              <Button
                htmlType="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
                style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
              >
                Login
              </Button>
            </div>
          </Form>
          <div>
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
