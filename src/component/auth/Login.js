import { Button, Card, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LeftCircleFilled } from "@ant-design/icons";
import {jwtDecode} from "jwt-decode"; 

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); 

  const onFinish = async (values) => {
    const trimmedValues = {
      username: values.UserName.trim(),
      password: values.Password.trim(),
    }; 

    setLoading(true); 
    try {
      const response = await axios.post("https://localhost:7292/api/Auth/login", {
        username: trimmedValues.username,
        password: trimmedValues.password,
      });

      if (response.data && response.data.token) {
        const token = response.data.token;

        
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          localStorage.setItem("token", JSON.stringify(token));
          notification.success({ message: "Login successfully!" });

          if (decodedToken.role === "admin") {
            navigate("/AdminDashboard");
          } else {
            navigate("/"); 
          }
        } else {
          notification.error({ message: "Token has expired. Please login again." });
        }
      } else {
        notification.error({
          message: "Invalid username or password!",
          placement: "top",
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        notification.error({ message: "Invalid credentials!" });
      } else {
        notification.error({
          message: "Login failed! Please try again later.",
          placement: "top",
        });
      }
    } finally {
      setLoading(false); 
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
                loading={loading} // Added loading state to the button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
                style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
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
