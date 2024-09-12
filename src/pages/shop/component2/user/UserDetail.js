import React, { useState } from 'react';
import { Button, Card, Form, Input, Rate, Tabs } from 'antd';
import { EyeOutlined, HeartOutlined } from '@ant-design/icons';
import { useAppContext } from '../../../../component/context/ContextApi';
import { Token } from "../../../../jwt/authentication/Storage";
import { useNavigate } from "react-router-dom";
import Order from './Order';

const { TabPane } = Tabs;

const UserDetail = () => {
  const { appState, updateState } = useAppContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = Token();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = () => {
    const updatedReviews = [
      ...(appState.detail.reviews || []),
      { rating, review }
    ];
    const updatedDetail = {
      ...appState.detail,
      reviews: updatedReviews
    };
    updateState({ detail: updatedDetail });
    setRating(0);
    setReview('');
  };

  const handleByNow = (value) => {
    if (token) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center gap-2.5">
      <div>
        <Card
          hoverable
          style={{ width: 440 }}
          cover={<img alt="example" src={appState.detail.image} />}
        >
          <div className="text-right">
            <Button type="link" icon={<HeartOutlined />} />
          </div>

        </Card>
      </div>
      <div className="border-2 border-gray w-1/4 p-3">
        <div className="text-xl font-bold">{appState.detail.name}</div>

        <div>Price: {appState.detail.price}</div>
        <div>Brand: {appState.detail.brand}</div>
        <div>View: {appState.detail.view}</div>
        <div>Stock Available: {appState.detail.stockItem}</div>
        <Form onFinish={handleByNow}>
          <Form.Item name="Qty" initialValue={1} rules={[{ required: true, message: 'Please enter quantity!' }]}>
            <input type="number" />
          </Form.Item>
          <div className="flex justify-between items-center">
            <div>
              <Button type="primary" htmlType="submit" className="bg-black text-white w-full">
                Buy Now
              </Button>
            </div>
            <div>
              <Button type="primary" htmlType="submit" className="bg-black text-white w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </Form>
        <Tabs defaultActiveKey="1" className="mt-4">
          <TabPane tab="Description" key="1">
            {appState.detail.description}
          </TabPane>
          <TabPane tab="Features" key="2">
          </TabPane>
          <TabPane tab="Reviews" key="3">
            <div className="mb-4">
              Rating: {appState.detail.reviews?.length > 0 ? (
                (appState.detail.reviews.reduce((acc, cur) => acc + cur.rating, 0) / appState.detail.reviews.length).toFixed(1)
              ) : 'N/A'}
            </div>
            {appState.detail.reviews?.map((review, index) => (
              <div key={index} className="mb-2">
                <Rate disabled defaultValue={review.rating} /> - {review.review}
              </div>
            ))}
            <Form onFinish={handleSubmitReview}>
              <Form.Item>
                <Rate allowHalf value={rating} onChange={handleRatingChange} />
              </Form.Item>
              <Form.Item>
                <Input.TextArea rows={4} value={review} onChange={handleReviewChange} />
              </Form.Item>
              <Form.Item>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit Review
                </button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>


      </div>
      {isModalOpen && (
        <Order
          isModalOpen={isModalOpen}
          setIsModalOpen={(e) => setIsModalOpen(e)}
          sumNetTotal={appState.detail.price}
          sumQtyTotal={1}
          myOrder={[appState.detail]}
        />
      )}
    </div>
  );
}

export default UserDetail;
