import React, { useState } from 'react';
import { Avatar, Button, Input, Layout, message, Upload } from 'antd';
import { UserOutlined, PictureOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const YourBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlogContent, setNewBlogContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handlePostBlog = () => {
    if (newBlogContent.trim() !== '' || imageFile || videoFile) {
      const newBlog = {
        id: blogs.length + 1,
        content: newBlogContent.trim(),
        author: 'User',
        date: new Date().toLocaleDateString(),
        image: imageFile ? URL.createObjectURL(imageFile) : null,
        video: videoFile ? URL.createObjectURL(videoFile) : null,
      };
      setBlogs([newBlog, ...blogs]);
      setNewBlogContent('');
      setImageFile(null);
      setVideoFile(null);
      message.success('Blog posted successfully!');
    } else {
      message.error('Please enter some content or upload a photo/video before posting.');
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sider width={250} className=" p-4">
        <div className="flex flex-col h-full justify-between">
          <div class="mb-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block">Post Blogs</button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full block mt-2">Profile</button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full block mt-2">Settings</button>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full block mt-2">Change Password</button>

          </div>

        </div>
      </Sider>
      <Content className="p-6 flex flex-col">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <Input.TextArea
            value={newBlogContent}
            onChange={(e) => setNewBlogContent(e.target.value)}
            placeholder="What's on your mind?"
            autoSize={{ minRows: 3, maxRows: 6 }}
            className="mb-4"
          />
          <div className="mb-4">
            <Upload
              accept="image/*"
              onChange={(info) => setImageFile(info.file.originFileObj)}
              showUploadList={false}
            >
              <Button icon={<PictureOutlined />} className="mr-2">Upload Photo</Button>
            </Upload>
            <Upload
              accept="video/*"
              onChange={(info) => setVideoFile(info.file.originFileObj)}
              showUploadList={false}
            >
              <Button icon={<VideoCameraOutlined />}>Upload Video</Button>
            </Upload>
          </div>
          <div className="flex justify-end">
            <Button onClick={handlePostBlog} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Post
            </Button>
            <Button onClick={() => { setNewBlogContent(''); setImageFile(null); setVideoFile(null); }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Avatar icon={<UserOutlined />} className="mr-4" />
                <div>
                  <p className="font-semibold">{blog.author}</p>
                  <p className="text-gray-500">{blog.date}</p>
                </div>
              </div>
              <p className="mt-4">{blog.content}</p>
              {blog.image && <img src={blog.image} alt="Blog" className="mt-4 rounded-lg" />}
              {blog.video && (
                <video controls className="mt-4 rounded-lg">
                  <source src={blog.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
};

export default YourBlog;
