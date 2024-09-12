// import React, { useState } from 'react';
// import { StarFilled, FormOutlined } from '@ant-design/icons';
// import { Modal, Rate, Button, Form, Input, List, Avatar } from 'antd';

// const FeedbackSection = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [reviews, setReviews] = useState([]);
//   const [form] = Form.useForm();

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     form.validateFields().then((values) => {
//       setReviews([...reviews, values]);
//       form.resetFields();
//       setIsModalVisible(false);
//     });
//   };

//   const handleCancel = () => {
//     form.resetFields();
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="my-8">
//       <h2 className="text-3xl font-bold mb-6 text-blue-700">Feedback and Reviews</h2>

//       <Button
//         type="primary"
//         icon={<FormOutlined />}
//         onClick={showModal}
//         className="mb-6 bg-blue-500 hover:bg-blue-600"
//       >
//         Add Review
//       </Button>

//       <List
//         itemLayout="vertical"
//         dataSource={reviews}
//         renderItem={(item, index) => (
//           <List.Item className="mb-4 p-6 bg-white rounded-lg shadow-md">
//             <List.Item.Meta
//               avatar={<Avatar icon={<StarFilled />} className="bg-yellow-400" />}
//               title={`Review ${index + 1}`}
//               description={
//                 <div>
//                   <Rate disabled defaultValue={item.rating} className="mb-2" />
//                   <p className="text-gray-700">{item.comment}</p>
//                 </div>
//               }
//             />
//           </List.Item>
//         )}
//       />

//       <Modal
//         title="Add Review"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         className="text-center"
//       >
//         <Form form={form} layout="vertical">
//           <Form.Item
//             label="Rating"
//             name="rating"
//             rules={[{ required: true, message: 'Please give a rating' }]}
//           >
//             <Rate/>
//           </Form.Item>
//           <Form.Item
//             label="Comment"
//             name="comment"
//             rules={[{ required: true, message: 'Please enter a comment' }]}
//           >
//             <Input.TextArea rows={4} />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default FeedbackSection;
