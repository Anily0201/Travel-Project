import React from 'react';
import { Table } from 'antd';

const BookingItem = ({ booking }) => {
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
    { key: 'destination', attribute: 'Destination', value: booking.destination },
    { key: 'id', attribute: 'Booking ID', value: booking.id },
    { key: 'date', attribute: 'Date', value: booking.date },
    {
      key: 'passengers',
      attribute: 'Passengers',
      value: booking.passengers.map((passenger, index) => (
        <div key={index} className="text-black rounded-full py-1 px-2 mr-2">
          {passenger}
        </div>
      )),
    },
    { key: 'totalPrice', attribute: 'Total Price', value: `$${booking.totalPrice}` },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      size="small"
      className="border rounded-lg shadow-lg bg-white"
    />
  );
};

export default BookingItem;
