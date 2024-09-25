import React from 'react';
import { Link } from 'react-router-dom';

const TourPackages = () => {
  // Define tour packages data
  const tourPackages = [
    {
      id: 1,
      title: 'Classic Europe Tour',
      description: 'Experience the charm of Europe with our Classic Europe Tour. Visit iconic landmarks, explore historic cities, and immerse yourself in rich culture.',
      imageUrl: 'https://worldtourismforum.wordpress.com/wp-content/uploads/2016/11/800px-x-500px-e28093-womens-wear.png',
      bookingLink: '/booking/classic-europe',
    },
    {
      id: 2,
      title: 'Adventure Safari Expedition',
      description: 'Embark on an unforgettable adventure with our Safari Expedition. Discover diverse wildlife, stunning landscapes, and thrilling experiences.',
      imageUrl: 'https://worldtourismforum.wordpress.com/wp-content/uploads/2016/11/800px-x-500px-e28093-womens-wear.png',
      bookingLink: '/booking/safari-expedition',
    },
    {
      id: 3,
      title: 'Tropical Paradise Getaway',
      description: 'Relax and unwind in a tropical paradise with our Getaway package. Enjoy pristine beaches, crystal-clear waters, and luxurious accommodations.',
      imageUrl: 'https://worldtourismforum.wordpress.com/wp-content/uploads/2016/11/800px-x-500px-e28093-womens-wear.png',
      bookingLink: '/booking/tropical-getaway',
    },
  ];

  return (
    <div>
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://www.holytreetravel.com/IMAGE/First%20Timer.jpg")' }}>
        <h1 className="text-4xl font-bold text-white text-center">Discover Your Next Adventure</h1>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Explore Our Tour Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tourPackage) => (
            <div key={tourPackage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={tourPackage.imageUrl} alt="Tour Package" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{tourPackage.title}</h2>
                <p className="text-gray-600 mb-4">{tourPackage.description}</p>
                <Link
                  to={tourPackage.bookingLink}
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

export default TourPackages;
