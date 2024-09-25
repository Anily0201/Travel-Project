// import React, { useState } from 'react';
// import { Input, Button } from 'antd';
// import { motion } from 'framer-motion';

// const ChatBox = ({ chat }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     console.log('Message sent:', message);
//     setMessage('');
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed bottom-0 right-0 bg-white shadow-lg p-4 w-80 rounded-t-lg"
//     >
//       <h3 className="text-lg font-bold">{chat.sender}</h3>
//       <p>{chat.text}</p>

//       <div className="mt-4">
//         <Input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <Button className="mt-2" type="primary" onClick={handleSend}>
//           Send
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// export default ChatBox;



