import React from 'react';
import { Avatar, Layout, Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;

const UserProfile = () => {
  const user = {
    name: "Anil Vadey",
    bio: "Web Developer | Tech Enthusiast | Blogger",
    profilePicture: null, // Replace with actual image URL if available
    joinedDate: "Joined on January 15, 2021"
  };

  return (
    <Layout className="min-h-screen">
      <Content className="p-6 flex flex-col items-center">
        <Avatar 
          size={128} 
          icon={<UserOutlined />} 
          src={user.profilePicture} 
          className="mb-4"
        />
        <Title level={2}>{user.name}</Title>
        <Text className="mb-4">{user.bio}</Text>
        <Text type="secondary" className="mb-4">{user.joinedDate}</Text>
        <Button type="primary" className="mb-4">Edit Profile</Button>
        <div className="w-full bg-white p-4 rounded-lg shadow-md">
          <Title level={4}>User's Blogs</Title>
          {/* Placeholder for user's blog posts */}
          <div className="mt-4">User's blog posts will be displayed here...</div>
        </div>
      </Content>
    </Layout>
  );
};

export default UserProfile;
