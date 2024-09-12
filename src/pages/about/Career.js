import React from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Option } = Select;

const Career = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?careers")' }}>
                <h1 className="text-4xl font-bold text-white text-center">Work With Us</h1>
            </div>

            <div className="container mx-auto my-8">
                <h2 className="text-3xl font-semibold mb-6">Explore Career Opportunities</h2>


                <Modal title="Apply for a Position" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                        <Form.Item name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                            <Input prefix={<UserOutlined />} placeholder="Your Name" />
                        </Form.Item>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
                            <Input prefix={<MailOutlined />} type="email" placeholder="Your Email" />
                        </Form.Item>
                        <Form.Item name="phone" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                            <Input prefix={<PhoneOutlined />} type="tel" placeholder="Your Phone" />
                        </Form.Item>
                        <Form.Item name="position" rules={[{ required: true, message: 'Please select a position!' }]}>
                            <Select placeholder="Select a Position">
                              
                                <Option value="frontend-dev">Frontend Developer</Option>
                                <Option value="backend-dev">Backend Developer</Option>
                                <Option value="designer">UI/UX Designer</Option>
                                <Option value="marketing">Digital Marketer</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType="submit"
                                block
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                            >
                                Submit Application
                                <span className="absolute right-0 top-0 -mt-1 -mr-2 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs animate-ping"></span>
                                <span className="absolute right-0 top-0 -mt-1 -mr-2 h-4 w-4 rounded-full bg-red-500 opacity-75 flex items-center justify-center text-white font-bold text-xs"></span>
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <div className="flex justify-center">
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                        onClick={showModal}>
                        Apply Now
                        <span className="absolute right-0 top-0 -mt-1 -mr-2 h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs animate-ping"></span>
                        <span className="absolute right-0 top-0 -mt-1 -mr-2 h-4 w-4 rounded-full bg-red-500 opacity-75 flex items-center justify-center text-white font-bold text-xs"></span>
                    </Button>
                </div>
            </div>
            <div className="container mx-auto my-8">
                <h2 className="text-3xl font-semibold mb-6">Why Join Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                        <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                        <p className="text-gray-600 mb-4">We provide opportunities for professional development and growth.</p>
                        <img src="https://source.unsplash.com/400x300/?career-growth" alt="Career Growth" className="w-full h-auto rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                        <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                        <p className="text-gray-600 mb-4">We value your well-being and promote a healthy work-life balance.</p>
                        <img src="https://source.unsplash.com/400x300/?work-life-balance" alt="Work-Life Balance" className="w-full h-auto rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                        <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                        <p className="text-gray-600 mb-4">Join a supportive team environment where collaboration thrives.</p>
                        <img src="https://source.unsplash.com/400x300/?collaborative-culture" alt="Collaborative Culture" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
