import React, { useState , useEffect } from 'react';
import { Layout, Input, Button, message, Avatar, Modal, Upload, Card } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import TopBar from '../../component/layout/blogLayout/TopBar';
import LeftSidebar from '../../component/layout/blogLayout/LeftSidebar';
import RightSidebar from '../../component/layout/blogLayout/RightSidebar';
import axios from 'axios';
import { Token } from '../../jwt/authentication/Storage';


const { Content } = Layout;

const Blog = () => {



  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const tokenData = Token();
  const loggedInUser = tokenData?.username || 'Guest';

  useEffect(() => {
    fetchBlogs();
  }, []);
  
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://localhost:7292/api/Blog'); // Replace with your backend API endpoint
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      message.error("Failed to load blogs.");
    }
  };

  const handlePostBlog = async () => {
    if (newBlogTitle.trim() && newBlogContent.trim()) {
      const formData = new FormData();
      formData.append('title', newBlogTitle.trim());
      formData.append('content', newBlogContent.trim());
      formData.append('author', loggedInUser); 
      formData.append('image', imageFile); // Append the image file
  
      try {
        const response = await axios.post('https://localhost:7292/api/Blog', formData, {
          headers: {
             'Content-Type': 'multipart/form-data'
          //  'Authorization': `Bearer ${tokenData?.token}` 
            }
        });
        setBlogs([response.data, ...blogs]);
        message.success('Blog posted successfully!');
        resetForm();
      } catch (error) {
        console.error("Error posting blog:", error);
        message.error('Failed to post the blog.');
      }
    } else {
      message.error('Please enter a title and some content before posting.');
    }
  };

  const handleImageUpload = ({ file }) => {
    setImageFile(file);
  };

  const resetForm = () => {
    setNewBlogTitle('');
    setNewBlogContent('');
    setImageFile(null);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
                    <p className="font-semibold">{blog.username}</p>
                    <p className="text-gray-500">{blog.createdDate}</p>
                  </div>
                </div>  
                <img src={blog.imageFile} alt={blog.title} className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-800">{blog.description}</p>
                </div>
              </Card>
             
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
