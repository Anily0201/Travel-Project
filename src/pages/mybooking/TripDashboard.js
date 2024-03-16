import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Title, Text } = Typography;

const TripDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [tripStatistics, setTripStatistics] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { title: 'Total Trips', value: 150 },
        { title: 'Upcoming Trips', value: 25 },
        { title: 'Completed Trips', value: 100 },
        { title: 'Cancelled Trips', value: 25 },
      ];
      setTripStatistics(mockData);
      setLoading(false);
    }, 2000);

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8" data-aos="fade-down">Trip Dashboard</Title>
      {loading ? (
        <div className="text-center" data-aos="fade-up">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {tripStatistics.map((statistic, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} data-aos="fade-up">
              <Card className="rounded-lg shadow-md p-4">
                <Title level={4}>{statistic.title}</Title>
                <Text strong>{statistic.value}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <div className="text-center mt-8" data-aos="fade-up">
        <Button type="primary">
          <Link to="/MyBooking">View Bookings</Link>
        </Button>
      </div>
    </div>
  );
};

export default TripDashboard;
