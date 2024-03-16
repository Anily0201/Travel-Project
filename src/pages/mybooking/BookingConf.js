import React, { useState } from 'react';
import { Steps, Button, Typography, Result, Table } from 'antd';
import { Link } from 'react-router-dom';

const { Step } = Steps;
const { Title, Paragraph } = Typography;

const BookingConf = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const bookingDetails = {
    destination: 'Paris, France',
    date: 'August 15, 2023',
    passengers: ['Anil', 'jp yadav', 'mohan'],
    totalPrice: 1200,
  };

  const columns = [
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const data = [
    { key: 'destination', attribute: 'Destination', value: bookingDetails.destination },
    { key: 'date', attribute: 'Date', value: bookingDetails.date },
    {
      key: 'passengers',
      attribute: 'Passengers',
      value: bookingDetails.passengers.join(', '),
    },
    { key: 'totalPrice', attribute: 'Total Price', value: `$${bookingDetails.totalPrice}` },
  ];

  const steps = [
    {
      title: 'Booking Details',
      content: (
        <div>
          <Result
            status="success"
            title="Your booking is confirmed!"
            subTitle="Thank you for choosing our services."
          />
          <div className="mt-6">
            <Title level={4}>Booking Summary</Title>
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              size="small"
              bordered
            />
          </div>
          <div className="mt-6">
            <Button className="mr-4">
              <Link to="/MyBooking">View Bookings</Link>
            </Button>
            <Button>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Payment',
      content: (
        <Result
          status="success"
          title="Payment Successful"
          subTitle="Your payment has been processed successfully."
          extra={[
            <Button key="next" onClick={nextStep}>
              Next
            </Button>,
          ]}
        />
      ),
    },
    {
      title: 'Confirmation',
      content: (
        <Result
          status="success"
          title="Confirmation Email Sent"
          subTitle="A confirmation email has been sent to your registered email address."
          extra={[
            <Button key="done">
              <Link to="/">Done</Link>
            </Button>,
          ]}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8">Booking Confirmation</Title>
      <Steps current={currentStep} direction="vertical">
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div className="steps-content mt-8">
        {steps[currentStep].content}
      </div>
      <div className="steps-action mt-8">
        {currentStep > 0 && (
          <Button style={{ marginRight: 8 }} onClick={prevStep}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button onClick={nextStep}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingConf;
