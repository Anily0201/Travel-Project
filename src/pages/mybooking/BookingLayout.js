

import React from "react";
import { Tabs } from "antd";
import MyBooking from "./MyBooking";
import BookingHistory from "./BookingHistory";
import BookingConf from "./BookingConf";
import CancelRefund from "./CancelRefund";
import PrintTickets from "./PrintTickets";
import CustomerSupport from "./CustomerSupport";
import TripDashboard from "./TripDashboard";
import TripSchedule from "./TripSchedule";
import TermCond from "../playwin/TermCond";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "My Booking",
    children: <MyBooking />,
  },
  
  {
    key: "2",
    label: "Booking History",
    children: <BookingHistory />,
  },
  {
    key: "3",
    label: "Booking Confirmation",
    children: <BookingConf />,
  },
  {
    key: "4",
    label: "Cancelations & Refunds",
    children: <CancelRefund />,
  },
  {
    key: "5",
    label: "Print Tickets",
    children: <PrintTickets/>,
  },
  {
    key: "6",
    label: "Customer Support",
    children: <CustomerSupport />,
  },
  {
    key: "7",
    label: "Trip Dashboard",
    children: <TripDashboard />,
  },
  {
    key: "8",
    label: "Trip Schedule",
    children: <TripSchedule />,
  },
  {
    key: "9",
    label: "Term & Condition",
    children: <TermCond/>,
  },
 
  
];

const BookingLayout = () => {
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

export default BookingLayout;