import React, { useState, useEffect } from 'react';
import { Typography, Form, Input, Button, message, Select } from 'antd';
import { useParams } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const CancelRefund = () => {
  const { bookingId } = useParams();
  const [cancelationReason, setCancelationReason] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleCancelationReasonChange = (e) => {
    setCancelationReason(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedBooking) {
      message.error('Please select your booking .');
    } else if (cancelationReason.trim() === '') {
      message.error('Please provide a cancelation reason.');
    } else {
      message.success('Cancelation request submitted successfully.');
      setCancelationReason('');
      setSelectedBooking(null);
    }
  };

  useEffect(() => {

  }, [bookingId]);

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8">
        <span className="text-purple-500">C</span>
        <span className="text-purple-600">a</span>
        <span className="text-purple-700">n</span>
        <span className="text-purple-800">c</span>
        <span className="text-purple-900">e</span>
        <span className="text-green-500">l</span>
        <span className="text-green-600">a</span>
        <span className="text-green-700">t</span>
        <span className="text-green-800">i</span>
        <span className="text-green-900">o</span>
        <span className="text-blue-500">&nbsp;&amp;&nbsp;</span>
        <span className="text-blue-600">R</span>
        <span className="text-blue-700">e</span>
        <span className="text-blue-800">f</span>
        <span className="text-blue-900">u</span>
        <span className="text-indigo-500">n</span>
        <span className="text-indigo-600">d</span>
        <span className="text-indigo-700">s</span>
      </Title>
      <div className="bg-white p-6 rounded-lg shadow">
        <Title level={3}>Cancelation Policy</Title>
        <Paragraph>
          Our cancelation policy allows customers to cancel their bookings under certain conditions.
          Please review the following information before submitting a cancelation request:
        </Paragraph>
        <ul className="list-disc ml-6 mb-4">
          <li>Cancelations must be made at least 24 hours prior to the scheduled departure.</li>
          <li>A cancelation fee may apply based on the type of booking and timing of cancelation.</li>
          <li>Refunds will be processed within 7-10 business days after cancelation approval.</li>
        </ul>
        <Title level={3}>Refund Procedure</Title>
        <Paragraph>
          Refunds for canceled bookings will be processed according to the following procedure:
        </Paragraph>
        <ol className="list-decimal ml-6 mb-4">
          <li>Submit a cancelation request using the form below.</li>
          <li>Wait for approval from our team.</li>
          <li>Refunds will be issued to the original payment method within the specified timeframe.</li>
        </ol>
        <Title level={3}>Cancelation Request Form</Title>
        <Form layout="vertical">
          <Form.Item
            label="Select Your Booking"
            name="selectedBooking"
            rules={[{ required: true, message: 'Please select a booking option.' }]}
          >
            <Select
              placeholder="Select booking option"
              onChange={setSelectedBooking}
              value={selectedBooking}
            >

            </Select>
          </Form.Item>
          <Form.Item
            label="Reason for Cancelation"
            name="cancelationReason"
            rules={[{ required: true, message: 'Please provide a reason for cancelation.' }]}
          >
            <Input.TextArea
              rows={4}
              value={cancelationReason}
              onChange={handleCancelationReasonChange}
            />
          </Form.Item>
          <Form.Item>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit Cancellation Request
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CancelRefund;
