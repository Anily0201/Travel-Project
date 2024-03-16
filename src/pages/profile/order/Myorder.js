import React, { useState } from 'react';
import { Form, Input, Table, Button, Modal, Tabs, notification } from 'antd';


const Myorder = () => {
  const [currentTab, setCurrentTab] = useState('1');



  const dataSource = [
    {
      key: '1',
      orderId: 'ORD123456',
      customerName: 'Anil',
      status: 'Processing',
      totalAmount: 150.25,
    },
    {
      key: '2',
      orderId: 'ORD789012',
      customerName: 'Rame',
      status: 'Shipped',
      totalAmount: 230.50,
    },
  ];

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount) => `${amount.toFixed(2)}`,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button type="link" onClick={() => handleViewOrder(record)}>
          View Details
        </Button>
        
      ),
    },
  ];

  const handleViewOrder = (order) => {
    Modal.info({
      title: 'Order Details',
      content: (
        <div>
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Customer Name:</strong> {order.customerName}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
        </div>
      ),
      onOk() { },
    });
  };
  return (
    <div>
          <h1 className="orders-title">Orders</h1>
          <Table dataSource={dataSource} columns={columns} />
       
    </div>
  )
}

export default Myorder
