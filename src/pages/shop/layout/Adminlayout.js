// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import {  Layout, } from 'antd';

// import AdminHeader from './header/AdminHeader';

// const { Header, Content, Footer, Sider, colorBgContainer, borderRadiusLG } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

// const Adminlayout = () => {
//   return (
//     <div>
//     <div>This is Adminlayout.</div>
//     <Layout>
//       <Header
//         style={{
//           color:'white',
//           fontSize:'medium'
//         }}
//       >
//         <AdminHeader/>
//       </Header>
//       <Content
//         style={{
//           padding: '0 48px',
//         }}
//       >
//         {/* <Breadcrumb
//           style={{
//             margin: '16px 0',
//           }}
//         >
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb> */}
//         <Layout
//           style={{
//             padding: '24px 0',
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Sider
//             style={{
//               background: colorBgContainer,
//             }}
//             width={200}
//           >
//             {/* <Menu
//               mode="inline"
//               defaultSelectedKeys={['1']}
//               defaultOpenKeys={['sub1']}
//               style={{
//                 height: '100%',
//               }}
//               items={items2}
//             /> */}
//           </Sider>
//           <Content
//             style={{
//               padding: '0 24px',
//               minHeight: 280,
//             }}
//           >
        
//     <Outlet/>
//           </Content>
//         </Layout>
//       </Content>
      
//     </Layout>
//     </div>
//   )
// }

// export default Adminlayout