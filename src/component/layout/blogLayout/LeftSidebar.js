import React from 'react';
import { UserOutlined, AppstoreOutlined, TeamOutlined, SettingOutlined, MessageOutlined, FileTextOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className="lg:w-80 w-60 bg-white p-6 shadow-lg min-h-screen flex flex-col justify-between">
      <div className="space-y-6">
        {/* Profile */}
        <Link to="/profile" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <UserOutlined className="text-xl" />
          <span className="text-lg font-semibold">My Profile</span>
        </Link>

        {/* Blog Dashboard */}
        <Link to="/blog/blog" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <AppstoreOutlined className="text-xl" />
          <span className="text-lg font-semibold">Blog Dashboard</span>
        </Link>

        {/* Groups */}
        <Link to="/groups" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <TeamOutlined className="text-xl" />
          <span className="text-lg font-semibold">Groups</span>
        </Link>

        {/* Settings */}
        <Link to="/settings" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <SettingOutlined className="text-xl" />
          <span className="text-lg font-semibold">Settings</span>
        </Link>

        {/* Messages */}
        <Link to="/messages" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <MessageOutlined className="text-xl" />
          <span className="text-lg font-semibold">Messages</span>
        </Link>

        {/* Documents */}
        <Link to="/documents" className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-300 ease-in-out">
          <FileTextOutlined className="text-xl" />
          <span className="text-lg font-semibold">Documents</span>
        </Link>
      </div>

      
    </div>
  );
};

export default LeftSidebar;
