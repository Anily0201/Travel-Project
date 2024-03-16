import React from 'react';
import { Typography, Card, Row, Col, Divider } from 'antd';
import { PhoneOutlined, WhatsAppOutlined, MailOutlined, UserOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CustomerSupport = () => {
  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8">Customer Support</Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <PhoneOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Title level={5}>24/7 Helpline</Title>
            <Text strong>Toll-Free:</Text>
            <Text>1-800-123-4567</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <WhatsAppOutlined style={{ fontSize: '24px', color: '#25D366' }} />
            <Title level={5}>WhatsApp</Title>
            <Text>+1 123 456 7890</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <MailOutlined style={{ fontSize: '24px', color: '#FFD700' }} />
            <Title level={5}>Email</Title>
            <Text>support@example.com</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <UserOutlined style={{ fontSize: '24px', color: '#8A2BE2' }} />
            <Title level={5}>Agent</Title>
            <Text>Name: John Doe</Text>
            <Text>Phone: +1 234 567 8901</Text>
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <TwitterOutlined style={{ fontSize: '24px', color: '#1DA1F2' }} />
            <Title level={5}>Twitter</Title>
            <Text>@example_twitter</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <InstagramOutlined style={{ fontSize: '24px', color: '#C13584' }} />
            <Title level={5}>Instagram</Title>
            <Text>@example_instagram</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card className="rounded-lg shadow-md p-4">
            <FacebookOutlined style={{ fontSize: '24px', color: '#1877F2' }} />
            <Title level={5}>Facebook</Title>
            <Text>@example_facebook</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerSupport;
