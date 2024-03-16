import React from "react";
import { Tabs } from "antd";
import UserProfile from "./UserProfile";
import Histry from "./History";
import Record from "./Record";
import Security from "./Security";
import Notifications from "./Notifications";
import Orders from "./Orders";
import PaymentMethods from "./PaymentMethods";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Profile",
    children: <UserProfile />,
  },
  
  {
    key: "2",
    label: "History",
    children: <Histry />,
  },
  {
    key: "3",
    label: "Notifications",
    children: <Notifications />,
  },
  {
    key: "4",
    label: "Record",
    children: <Record />,
  },
  {
    key: "5",
    label: "Security",
    children: <Security />,
  },
  {
    key: "6",
    label: "Orders",
    children: <Orders />,
  },
  {
    key: "7",
    label: "PaymentMethods",
    children: <PaymentMethods />,
  },
  
];

const Profile = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Profile;