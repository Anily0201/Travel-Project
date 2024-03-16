import { Button, Card, Form, Input, notification } from "antd";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../pages/shop/utils/Items";
import { LeftCircleFilled } from "@ant-design/icons";

const Login = () => {
  const data = auth?.[0];

  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values?.user_name === data.type) {
      navigate("/");
      notification.info({ message: "Login successfully!" });
      localStorage.setItem("token", JSON.stringify(data));
    } else if (values?.user_name === "admin") {
      const admindata = auth?.map((item) => {
        return { ...item, name: values.user_name, type: "admin" };
      });
      notification.info({ message: "Login successfully!" });
      localStorage.setItem("token", JSON.stringify(admindata?.[0]));
      navigate("/admin");
    } else {
      notification.info({
        message: "Something want to wrong!",
        placement: "top",
      });
    }
  };
  // React.useEffect(() => {
  //   if (logindata?.token) {
  //     localStorage.setItem("token", JSON.stringify(logindata?.token));
  //     navigate("/");
  //   }
  // }, [logindata]);
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
              name={"user_name"}
              label={"User Name"}
              rules={[
                {
                  required: "true",

                  message: "The input  Valid email!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name={"password"}
              label={"Password"}
              rules={[
                {
                  required: "true",
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
                <span className="absolute right-0 top-0 -mt-1 -mr-2 h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs animate-ping"></span>
                <span className="absolute right-0 top-0 -mt-1 -mr-2 h-4 w-4 rounded-full bg-red-500 opacity-75 flex items-center justify-center text-white font-bold text-xs"></span>
              </Button>
            </div>


          </Form>
          <div>
            Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;