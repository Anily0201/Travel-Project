import React, { useEffect } from 'react';
import { Typography, Card, Row, Col } from 'antd';
import AOS from 'aos';

const { Title, Text } = Typography;

const TripSchedule = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8" data-aos="fade-down">Trip Schedule</Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} lg={8} data-aos="fade-up">
          <Card className="rounded-lg shadow-md p-4">
            <Title level={4}>Day 1</Title>
            <Text strong>10:00 AM - Departure from Home</Text>
            <br />
            <Text strong>12:00 PM - Lunch Stop</Text>
            <br />
            <Text strong>03:00 PM - Check-in at Hotel</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} data-aos="fade-up">
          <Card className="rounded-lg shadow-md p-4">
            <Title level={4}>Day 2</Title>
            <Text strong>09:00 AM - Breakfast</Text>
            <br />
            <Text strong>10:00 AM - Sightseeing Tour</Text>
            <br />
            <Text strong>01:00 PM - Lunch</Text>
            <br />
            <Text strong>05:00 PM - Return to Hotel</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8} data-aos="fade-up">
          <Card className="rounded-lg shadow-md p-4">
            <Title level={4}>Day 3</Title>
            <Text strong>08:00 AM - Checkout from Hotel</Text>
            <br />
            <Text strong>09:00 AM - Adventure Activities</Text>
            <br />
            <Text strong>01:00 PM - Lunch</Text>
            <br />
            <Text strong>04:00 PM - Return Journey</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TripSchedule;
