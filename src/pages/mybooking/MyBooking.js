import React, { useState, useEffect } from 'react';
import BookingItem from './BookingItem';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  const mockBookings = [
    {
      id: 'B001',
      destination: 'Paris, France',
      date: '2023-08-15',
      passengers: ['Anil', 'Ram bhurtel', 'Virat kohli'],
      totalPrice: 1200
    },
    {
      id: 'B002',
      destination: 'Tokyo, Japan',
      date: '2023-09-20',
      passengers: ['Jay yadav', 'Anil'],
      totalPrice: 1800
    },
  ];

  useEffect(() => {
    setBookings(mockBookings);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="text-lg text-center">You have no bookings.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking, index) => (
            <BookingItem key={index} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
