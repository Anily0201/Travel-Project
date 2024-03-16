import React from 'react';
import { Table, Button, Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { HotProductsData } from '../../shop/utils/Items';

const { confirm } = Modal;

const ToShip = () => {
  const dataSource = HotProductsData.map((item, index) => ({
    key: index.toString(),
    orderId: `ORD${index + 1}`,
    customerName: 'Anil',
    orderItems: item.name,
    shippingAddress: '123 Main St, City, Country',
    estimatedDelivery: '2024-02-28',
    status: 'Pending',
    image: item.image,
  }));

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
      title: 'Order Items',
      dataIndex: 'orderItems',
      key: 'orderItems',
      render: (text, record) => (
        <div>
          <img src={record.image} alt={record.orderItems} style={{ width: '50px', marginRight: '10px' }} />
          {text}
        </div>
      ),
    },
    {
      title: 'Shipping Address',
      dataIndex: 'shippingAddress',
      key: 'shippingAddress',
    },
    {
      title: 'Estimated Delivery',
      dataIndex: 'estimatedDelivery',
      key: 'estimatedDelivery',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button onClick={() => handleShipOrder(record)}>
          Ship Now
        </Button>
      ),
    },
  ];

  // Function to handle the Ship Now action
  const handleShipOrder = (order) => {
    confirm({
      title: 'Confirm Shipment',
      icon: <ExclamationCircleOutlined />,
      content: `Do you want to proceed with shipping Order ID: ${order.orderId}?`,
      onOk() {
        // Simulate shipment processing
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Update shipment status
            const updatedDataSource = dataSource.map((item) =>
              item.key === order.key ? { ...item, status: 'Shipped' } : item
            );
            // Update dataSource state
            dataSource = updatedDataSource;
            notification.success({
              message: 'Shipment Successful',
              description: `Order ID: ${order.orderId} has been successfully shipped.`,
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
      <h1 className="text-3xl mb-4">To Ship</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ToShip;
