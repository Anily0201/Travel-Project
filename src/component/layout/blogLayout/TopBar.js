import React from 'react';
import { HomeOutlined, UsergroupAddOutlined, TeamOutlined } from '@ant-design/icons';

const TopBar = () => {
  return (
    <div className="flex justify-center items-center h-16  shadow-md">
      <div className="flex space-x-8">
        <HomeOutlined className="text-2xl font-bold cursor-pointer" />
        <UsergroupAddOutlined className="text-2xl font-bold cursor-pointer" />
        <TeamOutlined className="text-2xl font-bold cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
