import React from 'react';
import { Link } from 'react-router-dom';

const TransServices = () => {
  // Define transportation options data
  const transportationOptions = [
    {
      id: 1,
      name: 'Private Car',
      description: 'Travel in comfort and privacy with our chauffeur-driven private car service.',
      imageUrl: 'https://source.unsplash.com/800x600/?car',
      price: '$50/day',
      bookingLink: '/booking/private-car',
    },
    {
      id: 2,
      name: 'Cycle Rental',
      description: 'Explore the city at your own pace with our convenient cycle rental service.',
      imageUrl: 'https://source.unsplash.com/800x600/?cycle',
      price: '$10/day',
      bookingLink: '/booking/cycle-rental',
    },
    {
      id: 3,
      name: 'Scooter Rental',
      description: 'Navigate through narrow streets and alleys with ease on our scooter rentals.',
      imageUrl: 'https://source.unsplash.com/800x600/?scooter',
      price: '$25/day',
      bookingLink: '/booking/scooter-rental',
    },
    {
      id: 4,
      name: ' Flight Tour ',
      description: 'Affordable and convenient shuttle service to and from the airport.',
      imageUrl: 'https://source.unsplash.com/800x600/?shuttle',
      price: '$20/ride',
      bookingLink: '/booking/airport-shuttle',
    },
    {
      id: 5,
      name: 'Bike Rental',
      description: 'Pedal through scenic trails and countryside with our bike rental service.',
      imageUrl: 'https://source.unsplash.com/800x600/?bike',
      price: '$15/day',
      bookingLink: '/booking/bike-rental',
    },
    {
      id: 6,
      name: 'Train Pass',
      description: 'Efficient and eco-friendly travel across regions with our train pass service.',
      imageUrl: 'https://source.unsplash.com/800x600/?train',
      price: '$100/week',
      bookingLink: '/booking/train-pass',
    },
    {
      id: 7,
      name: 'Scooter Rental',
      description: 'Navigate through narrow streets and alleys with ease on our scooter rentals.',
      imageUrl: 'https://source.unsplash.com/800x600/?scooter',
      price: '$25/day',
      bookingLink: '/booking/scooter-rental',
    },
    {
      id: 8,
      name: 'Helicopter Tour',
      description: 'Get a bird\'s eye view of stunning landscapes with our thrilling helicopter tours.',
      imageUrl: 'https://source.unsplash.com/800x600/?helicopter',
      price: '$1000/person',
      bookingLink: '/booking/helicopter-tour',
    },
    {
      id: 9,
      name: 'Helicopter Tour',
      description: 'Get a bird\'s eye view of stunning landscapes with our thrilling helicopter tours.',
      imageUrl: 'https://source.unsplash.com/800x600/?helicopter',
      price: '$1000/person',
      bookingLink: '/booking/helicopter-tour',
    },

  ];

  return (
    <div>
      {/* Hero section with background image */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?transportation")' }}>
        <h1 className="text-4xl font-bold text-white text-center">Transportation Services</h1>
      </div>

      {/* Transportation options section */}
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Explore Your Transportation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transportationOptions.map((option) => (
            <div key={option.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={option.imageUrl} alt="Transportation" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{option.name}</h2>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <p className="text-gray-600 mb-4">{option.price}</p>
                <Link
                  to={option.bookingLink}
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

export default TransServices;
