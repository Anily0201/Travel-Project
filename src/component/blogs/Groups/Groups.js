import React from 'react';
import { Layout, Typography, Button, List } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Groups = () => {
  const groups = [
    { id: 1, name: "React Developers", members: 120 },
    { id: 2, name: "Web Designers", members: 80 },
    { id: 3, name: "Full-Stack Developers", members: 150 },
  ];

  return (
    <Layout className="min-h-screen">
      <Content className="p-6">
        <Title level={2} className="mb-4">Groups</Title>
        <Button type="primary" className="mb-4">Create New Group</Button>
        <List
          itemLayout="horizontal"
          dataSource={groups}
          renderItem={group => (
            <List.Item>
              <List.Item.Meta
                title={group.name}
                description={`${group.members} members`}
              />
            </List.Item>
          )}
          className="bg-white p-4 rounded-lg shadow-md"
        />
      </Content>
    </Layout>
  );
};

export default Groups;
