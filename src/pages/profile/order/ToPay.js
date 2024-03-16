import React from 'react';
import { Table, Button, Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const ToPay = () => {
  // Dummy data for orders to pay
  const dataSource = [
    {
      key: '1',
      orderId: 'ORD123456',
      customerName: 'John Doe',
      orderDate: '2024-02-20',
      deliveryAddress: '123 Main St, City, Country',
      totalAmount: 150.25,
      paymentStatus: 'Pending',
    },
    {
      key: '2',
      orderId: 'ORD789012',
      customerName: 'Jane Smith',
      orderDate: '2024-02-18',
      deliveryAddress: '456 Elm St, Town, Country',
      totalAmount: 230.50,
      paymentStatus: 'Pending',
    },
  ];

  // Columns configuration for the table
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
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Delivery Address',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress',
    },
    {
      title: 'Total Amount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button  onClick={() => handlePayNow(record)}>
          Pay Now
        </Button>
      ),
    },
  ];

  // Function to handle the Pay Now action
  const handlePayNow = (order) => {
    confirm({
      title: 'Confirm Payment',
      icon: <ExclamationCircleOutlined />,
      content: `Do you want to proceed with the payment for Order ID: ${order.orderId}?`,
      onOk() {
        // Simulate payment processing
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Update payment status
            const updatedDataSource = dataSource.map((item) =>
              item.key === order.key ? { ...item, paymentStatus: 'Paid' } : item
            );
            // Update dataSource state
            dataSource = updatedDataSource;
            notification.success({
              message: 'Payment Successful',
              description: `Payment for Order ID: ${order.orderId} has been successfully processed.`,
            });
            resolve();
          }, 1000);
        });
      },
      onCancel() {},
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">To Pay</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ToPay;
