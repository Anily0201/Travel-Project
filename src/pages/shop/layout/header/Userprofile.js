import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const key = Number(e.key);

    if (key === 1) {
      navigate('/pages/profile/Profile');
    } else if (key === 2) {
      navigate('/pages/mybooking/BookingLayout');
    } else if (key === 3) {
      navigate('/pages/playwin/PlayLayout');
    }else if (key === 4) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className='flex justify-between items-center p-4 bg-#001529 text-white'>
      <div className='text-xl font-bold'></div>
      <div>
        <Dropdown
          overlay={menu}
          placement="bottomRight">
          <Avatar shape="square"
            size="small" className="bg-blue-500">
            <UserOutlined className="text-white" />
          </Avatar>
        </Dropdown>
      </div>
    </div>
  );
};

export default UserProfile;

const items = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'My Booking',
  },
  {
    key: '3',
    label: 'Rewards & Offers',
  },
  {
    key: '4',
    label: 'Logout',
  },

];