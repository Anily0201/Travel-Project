

import React from "react";
import { Tabs } from "antd";
import Myorder from "../order/Myorder"
import Trackorder from "../order/Trackorder";
import ToShip from "../order/ToShip";
import ToPay from "../order/ToPay";
import ToReceive from "../order/ToReceive";
import CancelOrder from "../order/CancelOrder";
import CancledRefund from "../order/CancledRefund";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "My order",
    children: <Myorder />,
  },
  
  {
    key: "2",
    label: "Track order",
    children: <Trackorder />,
  },
  {
    key: "3",
    label: "To Ship",
    children: <ToShip />,
  },
  {
    key: "4",
    label: "To Pay",
    children: <ToPay />,
  },
  {
    key: "5",
    label: "To Receive",
    children: <ToReceive />,
  },
  {
    key: "6",
    label: " Cancelle Order",
    children: <CancelOrder />,
  },
  {
    key: "7",
    label: " Cancelled & Refund",
    children: <CancledRefund />,
  },
 
  
];

const Profile = () => {
  return (
    <div>
      <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Profile;

