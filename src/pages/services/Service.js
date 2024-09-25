import React from 'react';
import './ServiceDetail'
const services = [
  {
    id: 1,
    title: 'Tour Packages',
    description: 'Explore our curated tour packages covering the best destinations in Nepal.',
    link: '/services/TourPackages',
    buttonText: 'Explore Packages',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 2,
    title: 'Trip Planning',
    description: 'Let us help you plan your dream vacation! From finding the perfect destination to creating a detailed itinerary, our trip planning service takes the stress out of travel planning.',
    link: '/services/TripPlanning',
    buttonText: 'Explore More',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jj8A_pqMHBwNCXhUmTEnb0mycp-r2uAbOw&s',
  },
  {
    id: 3,
    title: 'Hotel Reservations',
    description: 'Book your accommodations hassle-free with our hotel reservation service. Choose from a wide selection of hotels worldwide and enjoy exclusive discounts.',
    link: '/services/HotelReservations',
    buttonText: 'Book Now',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 4,
    title: 'Transportation Services',
    description: 'Simplify your travel logistics with our transportation services. From airport transfers to private chauffeur services, we ensure a smooth journey from start to finish.',
    link: '/services/TransServices',
    buttonText: 'Book Now',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 5,
    title: 'Travel Insurance',
    description: 'Protect your trip with our comprehensive travel insurance plans. Enjoy peace of mind knowing that you\'re covered for unexpected events during your travels.',
    link: '/services/TravelInsurance',
    buttonText: 'Get a Quote',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 6,
    title: 'Adventure Activities',
    description: 'Embark on thrilling adventures with our range of exciting activities.',
    link: '/services/adventureactivities',
    buttonText: 'Explore Activities',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 7,
    title: 'Cultural Tours',
    description: 'Immerse yourself in the rich cultural experiences Nepal has to offer.',
    link: '/services/cultural-tours',
    buttonText: 'Explore Tours',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 8,
    title: 'Mountain Trekking',
    description: 'Embark on a thrilling journey through the breathtaking mountain landscapes of Nepal.',
    link: '/services/mountain-trekking',
    buttonText: 'Explore Trekking',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 9,
    title: 'Wildlife Safari',
    description: 'Experience the diverse wildlife of Nepal through exciting safari adventures.',
    link: '/services/wildlife-safari',
    buttonText: 'Explore Safari',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 10,
    title: 'Luxury Retreats',
    description: 'Indulge in the lap of luxury with our exclusive retreats offering world-class amenities.',
    link: '/services/luxury-retreats',
    buttonText: 'Explore Retreats',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  {
    id: 11,
    title: 'Yoga and Meditation',
    description: 'Rejuvenate your mind and body with serene yoga and meditation sessions in tranquil settings.',
    link: '/services/yoga-meditation',
    buttonText: 'Explore Yoga',
    imageUrl: 'https://www.holytreetravel.com/IMAGE/First%20Timer.jpg',
  },
  
  

];

const Service = () => {
  return (
    <div>
    <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://symbioticconsultinggroup.com/Images/Our-Services2.jpg")' }}>
      <h1 className="text-4xl font-bold text-white text-center">Our Services</h1>
    </div>

    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Explore Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '350px' }}>
            <div className="flex flex-col justify-end h-full p-6 bg-black bg-opacity-50">
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-200 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300 text-center"
              >
                {service.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Service;
