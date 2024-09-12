import React, { useState } from 'react';
import { Layout, Input, Button, message, Avatar, Modal, Upload, Card } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import TopBar from '../../component/layout/blogLayout/TopBar';
import LeftSidebar from '../../component/layout/blogLayout/LeftSidebar';
import RightSidebar from '../../component/layout/blogLayout/RightSidebar';

const { Content } = Layout;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePostBlog = () => {
    if (newBlogTitle.trim() !== '' && newBlogContent.trim() !== '') {
      const newBlog = {
        id: blogs.length + 1,
        title: newBlogTitle.trim(),
        content: newBlogContent.trim(),
        author: 'Jay Yadav',
        date: new Date().toLocaleDateString(),
        image: imageFile ? URL.createObjectURL(imageFile) : null,
      };
      setBlogs([newBlog, ...blogs]);

      // Reset the form fields for the next post
      setNewBlogTitle('');
      setNewBlogContent('');
      setImageFile(null);
      setIsModalVisible(false);

      message.success('Blog posted successfully!');
    } else {
      message.error('Please enter a title and some content before posting.');
    }
  };

  const handleImageUpload = ({ file }) => {
    setImageFile(file);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // Ensure form resets when the modal closes
    setNewBlogTitle('');
    setNewBlogContent('');
    setImageFile(null);
  };

  return (
    <Layout className="min-h-screen bg-gray-100">
      <TopBar className="fixed bg-white shadow-md" />
      <div className="flex pt-2">
        <LeftSidebar className="w-1/4 h-screen bg-gray-100 fixed left-0 top-16" />
        <Content className="flex-grow p-4 ml-2 mr-2 bg-gray-100">
          <div className="bg-white p-2 rounded-lg shadow-md mb-4">
            <Input.TextArea
              value={newBlogContent}
              onClick={() => setIsModalVisible(true)}
              placeholder="What's on your mind?"
              autoSize={{ minRows: 2, maxRows: 6 }}
              className="mb-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center mb-4">
                  <Avatar icon={<UserOutlined />} className="mr-4" />
                  <div>
                    <p className="font-semibold">{blog.author}</p>
                    <p className="text-gray-500">{blog.date}</p>
                  </div>
                </div>  
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-800">{blog.content}</p>
                </div>
              </Card>
              // <div key={blog.id} className="bg-white rounded-lg shadow-md p-6 max-h-64 ">
              //   <div className="flex items-center mb-4">
              //     <Avatar icon={<UserOutlined />} className="mr-4" />
              //     <div>
              //       <p className="font-semibold">{blog.author}</p>
              //       <p className="text-gray-500">{blog.date}</p>
              //     </div>
              //   </div>
              //   <h2 className="font-bold text-xl">{blog.title}</h2>
              //   <p className="mt-4 text-ellipsis overflow-hidden">{blog.content}</p>
              //   {blog.image && <img src={blog.image} alt={blog.title} className="mt-2 max-h-72 object-cover" />}
              // </div>
            ))}
          </div>
        </Content>
        <RightSidebar className="w-1/4 h-screen bg-gray-100 fixed right-0" />
      </div>

      <Modal
        title="Create Post"
        visible={isModalVisible}
        onOk={handlePostBlog}
        onCancel={handleCancel}
        okText="Post"
        cancelText="Cancel"
        okButtonProps={{
          className: "bg-green-500 hover:bg-green-600 text-white"
        }}
      >
        <Input
          value={newBlogTitle}
          onChange={(e) => setNewBlogTitle(e.target.value)}
          placeholder="Title"
          className="mb-4"
        />
        <Input.TextArea
          value={newBlogContent}
          onChange={(e) => setNewBlogContent(e.target.value)}
          placeholder="What's on your mind?"
          autoSize={{ minRows: 3, maxRows: 6 }}
          className="mb-4"
        />
        <Upload beforeUpload={() => false} onChange={handleImageUpload}>
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Modal>
    </Layout>
  );
};

export default Blog;
