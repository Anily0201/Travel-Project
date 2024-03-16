import React, { useState } from 'react';
import { Form, Input, Table, Button, Modal, Tabs, notification } from 'antd';

const { TabPane } = Tabs;


const Trackorder = () => {
    const [orderData, setOrderData] = useState(null);

    const onFinish = (values) => {

        // yaha chahi real API use gare paxi yo dummy data hataune .
    
        fetchOrderData(values.orderNumber);
      };
    
      const fetchOrderData = (orderNumber) => {
        // yaha chahi real API use gare paxi yo dummy data hataune .
        const orders = {
          '0201anil': {
            orderId: '0201anil',
            status: 'In Transit',
            trackingNumber: 'TRK0201',
            estimatedDelivery: '2024-02-25',
            // Add more order details here
          },
        };
    
        if (orderNumber in orders) {
          // If the order number exists, set the fetched order data
          setOrderData(orders[orderNumber]);
        } else {
          // If the order number does not exist, show an error message
          notification.error({
            message: 'Order Not Found',
            description: `The order with number ${orderNumber} does not exist. Please enter a valid order number.`,
          });
          // Clear the order data
          setOrderData(null);
        }
      };
      const Trackcolumns = [
        {
          title: 'Order ID',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Tracking Number',
          dataIndex: 'trackingNumber',
          key: 'trackingNumber',
        },
        {
          title: 'Estimated Delivery',
          dataIndex: 'estimatedDelivery',
          key: 'estimatedDelivery',
        },
      ];


  return (
    <div>
     
          <h1 className="orders-title">Track Order</h1>
          <Form
            name="trackOrderForm"
            onFinish={onFinish}
            layout="inline"
          >
            <Form.Item
              name="orderNumber"
              rules={[{ required: true, message: 'Please enter your order number!' }]}
            >
              <Input placeholder="Enter your order number" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">
                Track Order
              </Button>
            </Form.Item>
          </Form>
          {orderData && (
            <div>
              <h2>Order Details</h2>
              <Table dataSource={[orderData]} columns={Trackcolumns} />
            </div>
          )}
        
    </div>
  )
}

export default Trackorder
