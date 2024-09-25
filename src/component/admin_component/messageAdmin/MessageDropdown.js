// import React, { useState } from 'react';
// import { MessageOutlined } from '@ant-design/icons';
// import { Badge, Dropdown, List } from 'antd';
// import { motion } from 'framer-motion';
// import ChatBox from './ChatBox';

// const messages = [
//   { id: 1, sender: 'John Doe', text: 'Hey, can you check my order?', time: '3 min ago' },
//   { id: 2, sender: 'Jane Smith', text: 'Any updates on the project?', time: '10 min ago' },
// ];

// const MessageDropdown = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);

//   const handleOpenChange = (flag) => {
//     setOpen(flag);
//   };

//   const handleChatClick = (chat) => {
//     setSelectedChat(chat);
//     setOpen(false);
//   };

//   const dropdownContent = (
//     <List
//       itemLayout="horizontal"
//       dataSource={messages}
//       renderItem={(item) => (
//         <List.Item key={item.id} onClick={() => handleChatClick(item)}>
//           <List.Item.Meta
//             title={item.sender}
//             description={item.text}
//           />
//         </List.Item>
//       )}
//     />
//   );

//   return (
//     <>
//       <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//         <Dropdown
//           overlay={dropdownContent}
//           trigger={['click']}
//           onOpenChange={handleOpenChange}
//           open={open}
//           placement="bottomRight"
//         >
//           <Badge count={messages.length}>
//             <MessageOutlined style={{ fontSize: '24px', cursor: 'pointer', color: 'white' }} />
//           </Badge>
//         </Dropdown>
//       </motion.div>

//       {/* Show chat box if a chat is selected */}
//       {selectedChat && <ChatBox chat={selectedChat} />}
//     </>
//   );
// };

// export default MessageDropdown;




