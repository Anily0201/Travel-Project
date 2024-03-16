import { Button, Card, DatePicker, Form, Input } from "antd";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-100 bg-white">
        <div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Sign up</h3>
          </div>
          <div>
            <Form layout="vertical">
              <Form.Item
                name={"full_name"}
                rules={[
                  {
                    required: "true",
                    message: "Please enter your Full Name!",
                  },
                ]}
              >
                <Input
                  placeholder="Your Full Name"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item
                name={"email"}
                rules={[
                  {
                    required: "true",
                    type: "email",
                    message: "The enter is not Valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={"contact"}
                rules={[
                  {
                    pattern: "a1$/",
                    message: "Please enter value not Valid!",
                  },
                  {
                    required: true,
                    message: "Please enter Phone Number!",
                  },
                ]}
              >
                <Input placeholder="Contact" />
              </Form.Item>
              {/* <Form.Item label={"Date Of Birth"} name={"dob"}>
                <DatePicker />
              </Form.Item> */}

              <Form.Item
                name={"password"}
                rules={[
                  {
                    required: "true",
                    message: "Please enter your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name={"re-password"}
                rules={[
                  {
                    required: "true",
                    message: "Please enter your Password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Conform Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <div className="flex justify-between">
                <Button
                  htmlType="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                >
                  Create Account
                </Button>
              </div>

            </Form>
            <div className="text-sm">
              Already have an account?
              <Link to="/auth/login" className="text-blue-500 hover:underline">Login</Link>
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;