
import React, { useState } from 'react';
import { Card, Typography, Button, Modal } from 'antd';
import {
  LikeOutlined,
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import {
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  WeiboShareButton,
  LineShareButton,
  TelegramShareButton,
  RedditShareButton,
  VKShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookShareButton,
} from 'react-share';

const { Title, Paragraph } = Typography;
const Blog = () => {
  const [likes, setLikes] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [hearts, setHearts] = React.useState(0);
  const [isHearted, setIsHearted] = React.useState(false);
  const [shares, setShares] = React.useState(0);
  const [shareModalVisible, setShareModalVisible] = React.useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);

  };
 

  const handleHeart = () => {
    setHearts(isHearted ? hearts - 1 : hearts + 1);
    setIsHearted(!isHearted);
  };

  const handleShare = () => {
    setShares(shares + 1);
    setShareModalVisible(true);
  };

  const closeShareModal = () => {
    setShareModalVisible(false);
  };

  const blogs = [
    {
      id:1,
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
    {
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
    {
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
    {
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
    {
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
    {
      title: 'Everest Base Camp: A Journey to the Top of the World',
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/432263105_904668681661505_5211106915794798958_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p-zLOHYgOUYAX-KHyyq&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBpd598yDjpcWqFuH_4vTA1kfBoHx96wdCjYti6pX_vYw&oe=65F68E74',
      content:
        'Embark on a thrilling trek to the Everest Base Camp, surrounded by towering peaks and breathtaking landscapes. Experience the ultimate adventure at the roof of the world.',
    },
  ];

  return (
    <div className="blog-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {blogs.map((blog, index) => (
        <Card key={index} className="blog-card p-4 shadow-lg bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <img className="rounded-md mb-4" src={blog.image} alt={blog.title} />
        <Title level={4} className="mb-2 text-white">
          {blog.title}
        </Title>
        <Paragraph className="mb-4 text-white">{blog.content}</Paragraph>
        <div className="blog-actions flex space-x-4">
            <Button
              icon={<LikeOutlined />}
              onClick={handleLike}
              type={isLiked? 'primary' : 'default'}
              className="flex items-center"
            >
              {likes} Likes
            </Button>
            <Button
              icon={<HeartOutlined />}
              onClick={handleHeart}
              type={isHearted ? 'danger' : 'default'}
              className="flex items-center"
            >
              {hearts} Hearts
            </Button>
            <Button className="flex items-center">
              {shares} Shares
            </Button>
            <Button icon={<ShareAltOutlined />} onClick={handleShare} className="flex items-center">
              Share
            </Button>
          </div>
        </Card>
      ))}

      <Modal
       title={<Title level={4} className="text-white">Share on Social Media</Title>}
       visible={shareModalVisible}
       onCancel={closeShareModal}
       footer={null}
       bodyStyle={{ padding: 0 }}
     >
        <div className="flex flex-wrap gap-4 p-8">
          <FacebookShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-facebook-f mr-2"></i>
              Facebook
            </Button>
          </FacebookShareButton>
          <FacebookMessengerShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-facebook-messenger mr-2"></i>
              Messenger
            </Button>
          </FacebookMessengerShareButton>
          <TwitterShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-twitter mr-2"></i>
              Twitter
            </Button>
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp
            </Button>
          </WhatsappShareButton>
         
          <TelegramShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-telegram-plane mr-2"></i>
              Telegram
            </Button>
          </TelegramShareButton>
          <WeiboShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-weibo mr-2"></i>
              Weibo
            </Button>
          </WeiboShareButton>
          <LineShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-line mr-2"></i>
              Line
            </Button>
          </LineShareButton>
          <RedditShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-reddit-alien mr-2"></i>
              Reddit
            </Button>
          </RedditShareButton>
          <VKShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-vk mr-2"></i>
              VK
            </Button>
          </VKShareButton>
          <PocketShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-get-pocket mr-2"></i>
              Pocket
            </Button>
          </PocketShareButton>
          <InstapaperShareButton url={window.location.href}>
            <Button>
              <i className="fab fa-instapaper mr-2"></i>
              Instapaper
            </Button>
          </InstapaperShareButton>
         
        </div>
      </Modal>
    </div>
  );
};

export default Blog;

