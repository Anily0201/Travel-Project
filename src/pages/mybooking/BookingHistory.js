import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Typography } from 'antd';
import BookingItem from './BookingItem';

const { Text } = Typography;

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const mockBookings = [
    {
      id: 'B001',
      destination: 'Paris, France',
      date: '2023-08-15',
      passengers: ['Anil', 'MOhan sah', 'jp yadav'],
      totalPrice: 1200,
    },
    {
      id: 'B002',
      destination: 'Tokyo, Japan',
      date: '2023-09-20',
      passengers: ['Anil', 'jay yadav'],
      totalPrice: 1800,
    },
  ];

  useEffect(() => {
   
    setBookings(mockBookings);
  }, []);

  const columns = [
    {
      title: 'Booking ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Passengers',
      dataIndex: 'passengers',
      key: 'passengers',
      render: (passengers) => (
        <Text>{passengers.join(', ')}</Text>
      ),
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (totalPrice) => (
        <Text>${totalPrice}</Text>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button  onClick={() => viewBookingDetails(record)}>
          View Details
        </Button>
      ),
    },
  ];

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedBooking(null);
    setModalVisible(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Booking History</h1>
      <Table
        dataSource={bookings}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <Modal
        title="Booking Details"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        {selectedBooking && <BookingItem booking={selectedBooking} />}
      </Modal>
    </div>
  );
};

export default BookingHistory;
