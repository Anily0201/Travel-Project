import React, { useState } from 'react';
import { Badge, List, Button } from 'antd';
import { BellOutlined, CloseOutlined } from '@ant-design/icons';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New message from anil',
      content: 'you have recived new voucher for your shooping. enjoy your voucher and shop here.',
    },
    {
      id: 2,
      title: 'Payment received',
      content: 'You have received a payment of $50 from Jane.',
    },
    
  ]);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h1 >Notifications</h1>
      {notifications.length === 0 ? (
        <div className="no-notifications">No new notifications</div>
      ) : (
        <div>
          <Button

            className="clear-all-btn"
            onClick={clearAllNotifications}
            icon={<CloseOutlined />}
          >
            Clear All
          </Button>
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item) => (
              <List.Item key={item.id} className="notification-item">
                <List.Item.Meta
                  avatar={<Badge dot />}
                  title={<span className="notification-title">{item.title}</span>}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Notifications;
