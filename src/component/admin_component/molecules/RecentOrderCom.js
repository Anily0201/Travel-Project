import React from "react";
import { Table, Avatar, Tag } from "antd";
import { motion } from "framer-motion";
import { recentOrders } from "../data/Data"; // Import the data

const RecentOrderCom = () => {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <Avatar shape="square" src={record.image} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Delivered" ? "green" : "volcano"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="shadow-md rounded-lg bg-white p-6"
    >
      <Table
        columns={columns}
        dataSource={recentOrders}
        pagination={{ pageSize: 8 }}
        title={() => (
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        )}
      />
    </motion.div>
  );
};

export default RecentOrderCom;
