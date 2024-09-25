import React, { useState } from 'react';

const TravelInsurance = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send data to backend, display confirmation message)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero section with background image */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url("https://static.toiimg.com/photo/106630696.cms")' }}>
        <h1 className="text-4xl font-bold text-white text-center">Travel Insurance</h1>
      </div>

      {/* Travel insurance information section */}
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-6">Why You Need Travel Insurance</h2>
        <p className="text-gray-600 mb-6">
          Travel insurance provides peace of mind and financial protection in case of unexpected events such as trip cancellations, medical emergencies, or lost luggage. It's essential for any traveler to ensure a worry-free journey.
        </p>

        {/* Quote request form */}
        <h2 className="text-3xl font-semibold mb-4">Get a Travel Insurance</h2>
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700 font-semibold mb-1">Destination</label>
            <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-gray-700 font-semibold mb-1">Start Date</label>
              <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-gray-700 font-semibold mb-1">End Date</label>
              <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
          </div>
          <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition duration-300">Get a Offer</button>
        </form>
      </div>
    </div>
  );
};

export default TravelInsurance;
