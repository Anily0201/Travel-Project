import React from 'react';
import { Typography, Button, Card, Table } from 'antd';

const { Title } = Typography;

const PrintTickets = () => {
  const tickets = [
    { id: 1, destination: 'Paris', departureDate: '2022-12-20', departureTime: '09:00 AM', seat: 'A12' },
    { id: 2, destination: 'Tokyo', departureDate: '2023-01-05', departureTime: '10:30 AM', seat: 'B05' },
  ];

  const columns = [
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
    },
    {
      title: 'Departure Date',
      dataIndex: 'departureDate',
      key: 'departureDate',
    },
    {
      title: 'Departure Time',
      dataIndex: 'departureTime',
      key: 'departureTime',
    },
    {
      title: 'Seat',
      dataIndex: 'seat',
      key: 'seat',
    },
  ];

  const downloadTextFile = (ticket) => {
    const ticketInfo = `Ticket Information:
    Destination: ${ticket.destination}
    Departure Date: ${ticket.departureDate}
    Departure Time: ${ticket.departureTime}
    Seat: ${ticket.seat}`;

    const blob = new Blob([ticketInfo], { type: 'text/plain' });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `ticket_${ticket.id}.txt`; // Set the download filename
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Generate table data
  const tableData = tickets.map((ticket) => ({
    key: ticket.id,
    destination: ticket.destination,
    departureDate: ticket.departureDate,
    departureTime: ticket.departureTime,
    seat: ticket.seat,
  }));

  return (
    <div className="container mx-auto p-8">
      <Title level={2} className="text-center mb-8">Print Tickets</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tableData.map((ticket) => (
          <Card key={ticket.key} className="rounded-lg shadow-lg w-96 lg:w-full">
            <Table
  columns={columns}
  dataSource={[ticket]}
  pagination={false}
  bordered
  size="large"
  scroll={{ x: 'max-content' }}
/>
            <div className="flex justify-center mt-4">
              <Button type="primary" onClick={downloadTextFile} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Print
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrintTickets;
