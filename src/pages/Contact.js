import React from 'react';
import { Form, Input, Button, Typography, Space, Divider } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Contact.css';
import ChatBox from '../component/Chat/ChatBox';
import InteractiveMap from '../component/InteractiveMap';
import emailjs from 'emailjs-com';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    // Send email using EmailJS
    emailjs.send('service_9qpn1le', 'template_ndt65x8', values, 'EPogKW2Sv5aBAmXXR')
      .then((response) => {
        console.log('Email sent successfully:', response)

      })
      .catch((error) => {

        console.error('Email sending failed:', error);
      });
  };

  return (
    <div>
      <div className="contact-container">
        <Title level={2}>Get in Touch</Title>
        <Paragraph>
          Have questions or ready to start your next adventure with ExploreNepic? Reach out to us!
        </Paragraph>
        <Divider />
        <Space size={24} className="contact-info">
          <Space align="center">
            <EnvironmentOutlined style={{ fontSize: '1.5rem', color: '#e1b811' }} />
            <Paragraph type="secondary">New Road Steet, Kathmandu, Nepal</Paragraph>
          </Space>
          <Space align="center">
            <MailOutlined style={{ fontSize: '1.5rem', color: '#e1b811' }} />
            <Paragraph type="secondary">info@explorenepic.com</Paragraph>
          </Space>
          <Space align="center">
            <PhoneOutlined style={{ fontSize: '1.5rem', color: '#e1b811' }} />
            <Paragraph type="secondary">+977 9825360201</Paragraph>
          </Space>
        </Space>
        <Divider />
        <Paragraph>
          Visit our office or drop us a message using the form below. We look forward to hearing from you!
        </Paragraph>
        <Form name="contactForm" onFinish={onFinish} className="contact-form">
          <Form.Item label="Your Name" name="from_name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item label="Your Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" placeholder="Your Email" />
          </Form.Item>
          <Form.Item label="Your Message" name="message" rules={[{ required: true, message: 'Please enter your message' }]}>
            <Input.TextArea rows={4} placeholder="Type your message here..." />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" size="large"
            className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-1 px-4 rounded-full mt-4 block mx-auto"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
 


      <div className="flex items-center justify-center  ">
        <div className="text-center">
          <div className="max-w-md mx-auto rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat with Us</h2>
            <ChatBox />
          </div>
        </div>
      </div>
      <div className="container my-4 ">
        <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl  ml-20">
          Location 
        </h1>
        <InteractiveMap />
      </div>
    </div>
  );
};

export default Contact;
