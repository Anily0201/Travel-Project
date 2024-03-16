import React from 'react';
import { useParams } from 'react-router-dom';
// import './ServiceDetailPlaceholder'
const ServiceDetail = () => {
  const { id } = useParams();

  // Dummy data for service details
  const serviceDetails = {
    13: {
      title: 'Trip Planning',
      description: 'Let us help you plan your dream vacation! From finding the perfect destination to creating a detailed itinerary, our trip planning service takes the stress out of travel planning.',
      imageUrl: 'https://source.unsplash.com/1600x900/?trip-planning',
    },
    14: {
      title: 'Tour Packages',
      description: 'Discover our curated tour packages designed to provide you with unforgettable travel experiences. From cultural tours to adventure trips, we have something for everyone.',
      imageUrl: 'https://source.unsplash.com/1600x900/?tour-packages',
    },
    15: {
      title: 'Hotel Reservations',
      description: 'Book your accommodations hassle-free with our hotel reservation service. Choose from a wide selection of hotels worldwide and enjoy exclusive discounts.',
      imageUrl: 'https://source.unsplash.com/1600x900/?hotel-reservations',
    },
    16: {
      title: 'Transportation Services',
      description: 'Simplify your travel logistics with our transportation services. From airport transfers to private chauffeur services, we ensure a smooth journey from start to finish.',
      imageUrl: 'https://source.unsplash.com/1600x900/?transportation-services',
    },
    17: {
      title: 'Travel Insurance',
      description: 'Protect your trip with our comprehensive travel insurance plans. Enjoy peace of mind knowing that you\'re covered for unexpected events during your travels.',
      imageUrl: 'https://source.unsplash.com/1600x900/?travel-insurance',
    }
  };

  const service = serviceDetails[id];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
