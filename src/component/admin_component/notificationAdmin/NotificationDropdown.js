// import React, { useState } from 'react';
// import { BellOutlined } from '@ant-design/icons';
// import { Badge, Dropdown, List } from 'antd';
// import { motion } from 'framer-motion';

// const notifications = [
//   { id: 1, title: 'New Order Received', time: '2 min ago' },
//   { id: 2, title: 'New Message from John', time: '5 min ago' },
//   { id: 3, title: 'Server Maintenance at 10 PM', time: '1 hour ago' },
// ];

// const NotificationDropdown = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpenChange = (flag) => {
//     setOpen(flag);
//   };

//   const dropdownContent = (
//     <List
//       itemLayout="horizontal"
//       dataSource={notifications}
//       renderItem={(item) => (
//         <List.Item key={item.id}>
//           <List.Item.Meta
//             title={item.title}
//             description={item.time}
//           />
//         </List.Item>
//       )}
//     />
//   );

//   return (
//     <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//       <Dropdown
//         overlay={dropdownContent}
//         trigger={['click']}
//         onOpenChange={handleOpenChange}
//         open={open}
//         placement="bottomRight"
//       >
//         <Badge count={notifications.length}>
//           <BellOutlined style={{ fontSize: '24px', cursor: 'pointer', color: 'white' }} />
//         </Badge>
//       </Dropdown>
//     </motion.div>
//   );
// };

// export default NotificationDropdown;







