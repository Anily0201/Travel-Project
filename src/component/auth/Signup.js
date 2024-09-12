import { Button, Card, Form, Input , notification } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://localhost:7292/api/Auth/signup', {
        userName: values.UserName,
        password: values.password,
        email: values.Email,
        fullName: values.FullName,
        contactNumber: values.ContactNumber,
      });
      if (response.data) {
        notification.success({ message: "Account Created successfully!" });
      }
      console.log('Signup successful:', response.data);
      navigate('/auth/login');
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('There was an error!', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 h-auto m-auto pt-20">
      <Card className="opacity-100 bg-white">
        <div>
          <div className="text-center font-bold text-xl pb-2.5">
            <h3>Sign up</h3>
          </div>
          <div>
            <Form layout="vertical" onFinish={handleSignUp}>
              <Form.Item
                name={"FullName"}
                rules={[
                  {
                    required: true,
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
                name={"UserName"}
                rules={[
                  {
                    required: true,
                    message: "Please input a valid unique Username!",
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                name={"Email"}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "The input is not a valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={"ContactNumber"}
                rules={[
                  {
                    required: true,
                    message: "Please enter your Contact Number!",
                  },
                ]}
              >
                <Input placeholder="Contact Number" />
              </Form.Item>
              <Form.Item
                name={"password"}
                rules={[
                  {
                    required: true,
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
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your Password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex justify-between">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                >
                  Create Account
                </Button>
              </div>
            </Form>

            <div className="text-sm mt-2">
              Already have an account? <Link to="/auth/login" className="text-blue-500 hover:underline">Login</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
