import React from 'react';
import { Form, Input, Button, Typography, Space, Divider, Row, Col, notification } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import axios from 'axios';
import ChatBox from '../../component/Chat/ChatBox';
import InteractiveMap from '../../component/others/InteractiveMap';
// import InteractiveMap from '../component/others/InteractiveMap';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = async (values) => {
    
    try {
      await axios.post('https://localhost:7292/api/Contact', values);
      
      emailjs.send('service_9qpn1le', 'template_ndt65x8', values, 'EPogKW2Sv5aBAmXXR')
        .then((response) => {
          console.log('Email sent successfully:', response);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
        });

      notification.success({
        message: 'Message Received',
        description: 'Thank you for your message. We will contact you soon.',
        placement: 'topRight',
      });
    } catch (error) {
      console.error('Error:', error);
      notification.error({
        message: 'Submission Failed',
        description: 'There was an issue with your submission. Please try again later.',
        placement: 'topRight',
      });
    }
  };

  return (
    <div>
      <Row>
        <Col span={16}>
          <div className="mx-auto p-2 bg-gray-100 rounded-lg shadow-lg">
            <Title level={2} className="text-gray-800 text-center text-4xl font-bold mb-8">Get in Touch</Title>
            <Paragraph className="text-center text-gray-600 text-lg mb-8">
              Have questions or ready to start your next adventure with ExploreNepic? Reach out to us!
            </Paragraph>
            <Divider />
            <Space size={24} className="flex justify-around my-8">
              <Space align="center" className="flex flex-col items-center">
                <EnvironmentOutlined className="text-yellow-500 text-3xl mb-2" />
                <Paragraph className="text-gray-700 text-center">New Road Street, Kathmandu, Nepal</Paragraph>
              </Space>
              <Space align="center" className="flex flex-col items-center">
                <MailOutlined className="text-yellow-500 text-3xl mb-2" />
                <Paragraph className="text-gray-700 text-center">info@explorenepic.com</Paragraph>
              </Space>
              <Space align="center" className="flex flex-col items-center">
                <PhoneOutlined className="text-yellow-500 text-3xl mb-2" />
                <Paragraph className="text-gray-700 text-center">+977 9825360201</Paragraph>
              </Space>
            </Space>
            <Divider />
            <Paragraph className="text-center text-gray-600 text-lg mb-8">
              Visit our office or drop us a message using the form below. We look forward to hearing from you!
            </Paragraph>
            <Form name="contactForm" onFinish={onFinish} className="flex flex-col items-center">
              <Form.Item
                label="Your Name"
                name="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
                className="w-full max-w-md"
              >
                <Input placeholder="Your Name" className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
              </Form.Item>
              <Form.Item
                label="Your Email"
                name="Email"
                rules={[{ required: true, message: 'Please enter your email' }]}
                className="w-full max-w-md"
              >
                <Input type="email" placeholder="Your Email" className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
              </Form.Item>
              <Form.Item
                label="Your Message"
                name="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
                className="w-full max-w-md"
              >
                <Input.TextArea rows={4} placeholder="Type your message here..." className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 block mx-auto"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <div>
              <div>
                <ChatBox />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="my-12">
        <h1 className="text-xl font-bold sm:text-3xl text-gray-800 mb-4 text-center">Location</h1>
        <InteractiveMap />
      </div>
    </div>
  );
};

export default Contact;











// import React from 'react';
// import { Form, Input, Button, Typography, Space, Divider, Row, Col } from 'antd';
// import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
// import emailjs from 'emailjs-com';
// import ChatBox from '../component/Chat/ChatBox';
// import InteractiveMap from '../component/InteractiveMap';

// const { Title, Paragraph } = Typography;

// const Contact = () => {
//   const onFinish = (values) => {
//     emailjs.send('service_9qpn1le', 'template_ndt65x8', values, 'EPogKW2Sv5aBAmXXR')
//       .then((response) => {
//         console.log('Email sent successfully:', response);
//       })
//       .catch((error) => {
//         console.error('Email sending failed:', error);
//       });
//   };

//   return (
//     <div>
//       <Row >
//         <Col span={16}>
//     <div className=" mx-auto p-2 bg-gray-100 rounded-lg shadow-lg">
//       <Title level={2} className="text-gray-800 text-center text-4xl font-bold mb-8">Get in Touch</Title>
//       <Paragraph className="text-center text-gray-600 text-lg mb-8">
//         Have questions or ready to start your next adventure with ExploreNepic? Reach out to us!
//       </Paragraph>
//       <Divider />
//       <Space size={24} className="flex justify-around my-8">
//         <Space align="center" className="flex flex-col items-center">
//           <EnvironmentOutlined className="text-yellow-500 text-3xl mb-2" />
//           <Paragraph className="text-gray-700 text-center">New Road Steet, Kathmandu, Nepal</Paragraph>
//         </Space>
//         <Space align="center" className="flex flex-col items-center">
//           <MailOutlined className="text-yellow-500 text-3xl mb-2" />
//           <Paragraph className="text-gray-700 text-center">info@explorenepic.com</Paragraph>
//         </Space>
//         <Space align="center" className="flex flex-col items-center">
//           <PhoneOutlined className="text-yellow-500 text-3xl mb-2" />
//           <Paragraph className="text-gray-700 text-center">+977 9825360201</Paragraph>
//         </Space>
//       </Space>
//       <Divider />
//       <Paragraph className="text-center text-gray-600 text-lg mb-8">
//         Visit our office or drop us a message using the form below. We look forward to hearing from you!
//       </Paragraph>
//       <Form name="contactForm" onFinish={onFinish} className="flex flex-col items-center">
//         <Form.Item
//           label="Your Name"
//           name="Name"
//           rules={[{ required: true, message: 'Please enter your name' }]}
//           className="w-full max-w-md"
//         >
//           <Input placeholder="Your Name" className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
//         </Form.Item>
//         <Form.Item
//           label="Your Email"
//           name="Email"
//           rules={[{ required: true, message: 'Please enter your email' }]}
//           className="w-full max-w-md"
//         >
//           <Input type="email" placeholder="Your Email" className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
//         </Form.Item>
//         <Form.Item
//           label="YourMessage"
//           name="Message"
//           rules={[{ required: true, message: 'Please enter your message' }]}
//           className="w-full max-w-md"
//         >
//           <Input.TextArea rows={4} placeholder="Type your message here..." className="p-3 rounded-md border-gray-300 focus:border-yellow-500 focus:ring-yellow-500" />
//         </Form.Item>
//         <Form.Item>
//           <Button
//             htmlType="submit"
//             size="large"
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mt-4 block mx-auto"
//           >
//             Send Message
//           </Button>
//         </Form.Item>
//       </Form>
//       </div>
//       </Col>
//       <Col span={8}>
//       <div>
//         <div >
//           <div >
//             <ChatBox />
//           </div>
//         </div>
//       </div>
//       </Col>
//       </Row>
//       <div className="my-12">
//         <h1 className="text-xl font-bold sm:text-3xl text-gray-800 mb-4 text-center">Location</h1>
//         <InteractiveMap />
//       </div>
    
//     </div>
//   );
// };

// export default Contact;
