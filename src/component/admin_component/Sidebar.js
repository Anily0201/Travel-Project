import React, { useState } from 'react';
import { HomeOutlined, ShoppingCartOutlined, SettingOutlined, BellOutlined, MessageOutlined, MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';
import { Layout, Switch } from 'antd'; 
import { FaBlog } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { Link } from 'react-router-dom';
// import 'antd/dist/antd.css';
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home"); 

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName); 
  };
  

  return (
    <Layout>
    <div className={`bg-gray-800 text-white h-screen ${isCollapsed ? 'w-16' : 'w-56'} transition-width duration-300`}>
      <div className="p-4">
        <button onClick={toggleCollapse} className="focus:outline-none text-white">
          {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>

      <ul className="mt-4">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <HomeOutlined /> {!isCollapsed && <span><Link to="/AdminDashboard">Home</Link></span>}
        </li>

        <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSubMenu('ecommerce')}>
          <ShoppingCartOutlined /> {!isCollapsed && <span>E-commerce</span>}
        </li>
        {activeMenu === 'ecommerce' && !isCollapsed && (
          <ul className="ml-6">
            <li className="p-2 hover:bg-gray-600 cursor-pointer">
              <Link to="/eCommerce/Edashboard" > E-commerce Dashboard </Link>
            </li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Products</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Create Product</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Edit Product</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Orders</li>
          </ul>
        )}

        <li className=" flex p-4 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSubMenu('travel')}>
          <MdTravelExplore /> {!isCollapsed && <span>Travel</span>}
        </li>
        {activeMenu === 'travel' && !isCollapsed && (
          <ul className="ml-6">
            
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Travel Dashboard</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Destination</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Services</li>
          </ul>
        )}

        <li className="flex p-4 hover:bg-gray-700 cursor-pointer" onClick={() => toggleSubMenu('blogs')}>
          <FaBlog /> {!isCollapsed && <span>Blogs</span>}
        </li>
        {activeMenu === 'blogs' && !isCollapsed && (
          <ul className="ml-6">
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Blogs Dashboard</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Add Blogs</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Edit Blogs</li>
            <li className="p-2 hover:bg-gray-600 cursor-pointer">Delete Blogs</li>
          </ul>
        )}

        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <BellOutlined /> {!isCollapsed && <span>Notification</span>}
        </li>

        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <MessageOutlined /> {!isCollapsed && <span>Message</span>}
        </li>

        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <SettingOutlined /> {!isCollapsed && <span>Setting</span>}
        </li>

        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          {!isCollapsed && (
            <div className="flex justify-between items-center">
              <span>Mode</span>
              <Switch defaultChecked />
            </div>
          )}
        </li>
      </ul>
    </div>
    </Layout>
  );
};

export default Sidebar;
