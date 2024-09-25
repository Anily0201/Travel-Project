import React from 'react';
import { Link } from 'react-router-dom';

const TripPlanning = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="bg-cover bg-center py-32 px-6"
        style={{ backgroundImage: 'url("https://worldtourismforum.wordpress.com/wp-content/uploads/2016/11/800px-x-500px-e28093-womens-wear.png")' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Plan Your Dream Trip</h1>
        <p className="text-lg text-white max-w-xl mb-8">
          Start planning your next adventure with our comprehensive trip planning tools and resources.
        </p>
        <Link
          to="/services/service"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md font-semibold transition duration-300"
        >
          Get Started
        </Link>
      </div>

      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Popular Planning Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Create Your Itinerary</h3>
            <p className="text-gray-600 mb-4">
              Plan your trip day-by-day with our customizable itinerary builder. Add destinations, activities, and more.
            </p>
            <Link
              to="/services/TripPlanning"
              className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
            >
              Start Planning
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Find Accommodations</h3>
            <p className="text-gray-600 mb-4">
              Browse through a wide range of accommodations, from luxury resorts to budget-friendly hostels.
            </p>
            <Link
              to="/services/HotelReservations"
              className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
            >
              Explore Options
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Discover Activities</h3>
            <p className="text-gray-600 mb-4">
              Find exciting activities and tours to enhance your travel experience. Book directly and save.
            </p>
            <Link
              to="/services/TransServices"
              className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
            >
              Find Activities
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">Find Local Guides</h3>
    <p className="text-gray-600 mb-4">
      Enhance your travel experience by hiring knowledgeable local guides who can show you the hidden gems of your destination.
    </p>
    <Link
      to="/services/TourPackages"
      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
    >
      Explore Guides
    </Link>
  </div>

  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">Book Transportation</h3>
    <p className="text-gray-600 mb-4">
      Secure reliable transportation for your trip, including airport transfers, car rentals, and private chauffeurs.
    </p>
    <Link
      to="/services/TourPackages"
      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
    >
      Reserve Now
    </Link>
  </div>

  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">Explore Dining Options</h3>
    <p className="text-gray-600 mb-4">
      Discover the best restaurants, cafes, and street food stalls at your travel destination. Taste local flavors and cuisines.
    </p>
    <Link
      to="/services/TourPackages"
      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
    >
      View Restaurants
    </Link>
  </div>

  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold mb-4">Pack Your Bags</h3>
    <p className="text-gray-600 mb-4">
      Get expert packing tips and advice to ensure you have everything you need for a comfortable and enjoyable trip.
    </p>
    <Link
      to="/services/TripPlanning"
      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
    >
      Read More
    </Link>
  </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlanning;
