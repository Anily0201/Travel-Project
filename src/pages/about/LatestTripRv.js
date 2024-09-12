import React, { useState } from 'react';
import { Rate, Button, List, Avatar, Modal, Form, Input } from 'antd';
import { StarFilled, FormOutlined } from '@ant-design/icons';

const latestTripReviews = [
  {
    id: 1,
    name: 'Anil',
    location: 'Lahan, NEPAL',
    rating: 4.5,
    review: 'Had an amazing experience with the tour packages. The guides were knowledgeable and the accommodations were top-notch.',
    date: 'February 10, 2023',
    avatar: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-1/358573380_1455018055286148_8639572447215361285_n.jpg?stp=c0.9.320.320a_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=11e7ab&_nc_eui2=AeFmKhxQ61IXjpQKZuTkOgJzizBhpHxpx1-LMGGkfGnHX8DMmhvfDQh1fHds7tWZP5pi8N39baVurzYdacx2EOFQ&_nc_ohc=UObp0ifT4eUAX_f9BoK&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBQ0HbTqEH4I3f7ksXox7W9GchZ2W0TWqHuoOyfjo2eUw&oe=65DC33B7',
  },
  {
    id: 2,
    name: 'Virat kohli',
    location: 'delhi, INDIA',
    rating: 5,
    review: 'Absolutely loved the adventure activities! It was an adrenaline-packed experience that I will never forget.',
    date: 'January 25, 2023',
    avatar: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/325730374_665535615258281_3951742485601467888_n.jpg?stp=c110.0.306.307a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFhC_C24tvKO1x1n_wwRveNqVp7MvTwWa2pWnsy9PBZrUgAKlnjMoWoMlWT_Bcch2jlNc3ufU7-3x2d3Bps-Mjx&_nc_ohc=CGvvoeAfGycAX_c2CuA&_nc_ht=scontent.fktm20-1.fna&oh=00_AfCwNAT03A8nkvP3YdbzKVYq2CvBIBAv1gcLU3QMLfOCzg&oe=65DCDA2E',
  },
];

const LatestTripRv = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setReviews([...reviews, values]);
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?travel-reviews")' }}>
        <h1 className="text-4xl font-bold text-white text-center">Customer Reviews</h1>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Explore Our Latest Trip Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestTripReviews.map(review => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar size={64} src={review.avatar} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{review.name}</h3>
                    <p className="text-gray-600">{review.location}</p>
                    <Rate disabled allowHalf defaultValue={review.rating} />
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Feedback and Reviews</h2>
        <Button
          type="primary"
          icon={<FormOutlined />}
          onClick={showModal}
          className="mb-6 bg-blue-500 hover:bg-blue-600"
        >
          Add Review
        </Button>
        <List
          itemLayout="vertical"
          dataSource={reviews}
          renderItem={(item, index) => (
            <List.Item className="mb-4 p-6 bg-white rounded-lg shadow-md">
              <List.Item.Meta
                avatar={<Avatar icon={<StarFilled />} className="bg-yellow-400" />}
                title={`Review ${index + 1}`}
                description={
                  <div>
                    <Rate disabled defaultValue={item.rating} className="mb-2" />
                    <p className="text-gray-700">{item.comment}</p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
        <Modal
          title="Add Review"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="text-center"
        >
          <Form form={form} layout="vertical">
          <Form.Item
              label="Rating"
              name="rating"
              
              rules={[{ required: true, message: 'Please give a rating' }]}
            >
            
            
             <Rate />
            </Form.Item>
            <Form.Item
              label="Comment"
              name="comment"
              rules={[{ required: true, message: 'Please enter a comment' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default LatestTripRv;

