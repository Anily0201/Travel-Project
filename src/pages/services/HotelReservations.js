import React from 'react';
import { Link } from 'react-router-dom';

const HotelReservations = () => {
  // Define hotel data
  const hotels = [
    {
      id: 1,
      name: 'Luxury Resort & Spa',
      location: 'Bora Bora, French Polynesia',
      imageUrl: 'https://www.hotelchicagowestloop.com/wp-content/uploads/2024/02/Making-Group-Hotel-Reservations-Tips-for-Large-Parties.png',
      price: '$300/Night',
      bookingLink: '/booking/luxury-resort',
    },
    {
      id: 2,
      name: 'City View Hotel',
      location: 'New York City, USA',
      imageUrl: 'https://www.hotelchicagowestloop.com/wp-content/uploads/2024/02/Making-Group-Hotel-Reservations-Tips-for-Large-Parties.png',
      price: '$200/Night',
      bookingLink: '/booking/city-view-hotel',
    },
    {
      id: 3,
      name: 'Beachfront Villa',
      location: 'Maldives',
      imageUrl: 'https://www.hotelchicagowestloop.com/wp-content/uploads/2024/02/Making-Group-Hotel-Reservations-Tips-for-Large-Parties.png',
      price: '$400/Night',
      bookingLink: '/booking/beachfront-villa',
    },
  ];

  return (
    <div>
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://www.erevmax.com/blog/wp-content/uploads/2021/09/3-Essential-Tips-to-Choose-the-Right-Hotel-Booking-System.jpg")' }}>
        <h1 className="text-4xl font-bold text-white text-center">Book Your Stay</h1>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Find Your Perfect Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={hotel.imageUrl} alt="Hotel" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
                <p className="text-gray-600 mb-2">{hotel.location}</p>
                <p className="text-gray-600 mb-4">{hotel.price}</p>
                <Link
                  to={hotel.bookingLink}
                  className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold text-center transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelReservations;
