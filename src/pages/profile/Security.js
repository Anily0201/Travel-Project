import React, { useState } from 'react';
import { Form, Input, Button, notification, Modal, } from 'antd';
import { LockOutlined, ExclamationCircleOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Security = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            notification.success({
                message: 'Password Changed',
                description: 'Your password has been successfully updated.',
            });
        }, 2000);
    };

    const showChangePasswordModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleChangePassword = () => {
        confirm({
            title: 'Change Password',
            icon: <ExclamationCircleOutlined />,
            content: (
                <Form name="change-password-form" onFinish={onFinish}>
                    <Form.Item
                        name="currentPassword"
                        rules={[{ required: true, message: 'Please enter your current password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Current Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="newPassword"
                        rules={[{ required: true, message: 'Please enter your new password!' }]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="New Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your new password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Confirm New Password"
                        />
                    </Form.Item>
                </Form>
            ),
            
            onOk() {
                onFinish(); 
            },
            onCancel() {
                handleCancel (); 
            },
        });
    };

    return (
        <div >
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center text-gray-800">Security Settings</h1>
            <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl" >
                At ExploreNepic, we prioritize the security and privacy of our users above all else. We understand the importance of safeguarding your personal information and ensuring a secure browsing experience throughout your journey on our platform.
            </p>
            <div className=" flex items-center justify-center text-gray-800">
                <Button onClick={showChangePasswordModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                
                >
                    Change Your Password
                </Button>
            </div>

            <Modal
                title="Do you want to change your password ?"
                visible={visible}
                
                onCancel={handleCancel}
                
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                       No
                    </Button>,
                    <Button
                    key="change"
                    loading={loading}
                    onClick={handleChangePassword}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                >
                   Yes
                </Button>,
                ]}
            >
                
            </Modal>
            <div className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                To uphold these standards, we employ state-of-the-art encryption technologies to protect your sensitive data, including personal details and payment information. Our dedicated security team continuously monitors and updates our systems to mitigate any potential risks and vulnerabilities, ensuring that your information remains safe and confidential.
                Furthermore, we adhere to strict privacy policies and industry best practices to ensure that your data is handled responsibly and in compliance with relevant regulations. You can explore the world with peace of mind, knowing that your security and privacy are our top priorities at ExploreNepic.
            </div>
        </div>
    );
};

export default Security;
