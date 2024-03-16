import React, { useState } from 'react';
import { Typography, Form, Input, Button, message, Select } from 'antd';
import { useParams } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const CancelOrder = () => {
  const { orderId } = useParams();
  const [cancellationReason, setCancellationReason] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCancellationReasonChange = (e) => {
    setCancellationReason(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedProduct) {
      message.error('Please select the product to cancel.');
    } else if (cancellationReason.trim() === '') {
      message.error('Please provide a cancellation reason.');
    } else {
      message.success('Cancellation request submitted successfully.');
      setCancellationReason('');
      setSelectedProduct(null);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8">
        Cancel Order
      </Title>
      <div className="bg-white p-6 rounded-lg shadow">
        <Title level={3}>Cancellation Policy</Title>
        <Paragraph>
          Our cancellation policy allows customers to cancel their orders under certain conditions.
          Please review the following information before submitting a cancellation request:
        </Paragraph>
        <ul className="list-disc ml-6 mb-4">
          <li>Cancellations must be made within 24 hours of placing the order.</li>
          <li>A cancellation fee may apply depending on the product and timing of cancellation.</li>
          <li>Refunds will be processed within 3-5 business days after cancellation approval.</li>
        </ul>
        <Title level={3}>Cancellation Request Form</Title>
        <Form layout="vertical">
          <Form.Item
            label="Select Product to Cancel"
            name="selectedProduct"
            rules={[{ required: true, message: 'Please select a product to cancel.' }]}
          >
            <Select
              placeholder="Select product"
              onChange={setSelectedProduct}
              value={selectedProduct}
            >
              <Option value="product1">Product 1</Option>
              <Option value="product2">Product 2</Option>
              <Option value="product3">Product 3</Option>
              <Option value="product3">Product 4</Option>
              <Option value="product3">Product 5</Option>
              <Option value="product3">Product 6</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Reason for Cancellation"
            name="cancellationReason"
            rules={[{ required: true, message: 'Please provide a reason for cancellation.' }]}
          >
            <Input.TextArea
              rows={4}
              value={cancellationReason}
              onChange={handleCancellationReasonChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              
              onClick={handleSubmit}
              
            >
              Submit Cancellation Request
            </Button>
          </Form.Item>
        </Form>
        <Title level={3}>Need Help?</Title>
        <Paragraph>
          If you have any questions or need assistance with cancelling your order,
          please contact our customer support team at support@example.com or call us at +977- 9825360201.
        </Paragraph>
      </div>
    </div>
  );
};

export default CancelOrder;
