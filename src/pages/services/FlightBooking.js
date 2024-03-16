import React, { useState } from 'react';
import { Input, Select, DatePicker, Button, Row, Col, Card } from 'antd';
import { ArrowRightOutlined, ExclamationCircleFilled, GlobalOutlined, SafetyCertificateOutlined, SearchOutlined, SmileOutlined, } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import { BsAirplaneEngines } from "react-icons/bs";

const { Option } = Select;
const { RangePicker } = DatePicker;

const FlightBooking = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const [travelClass, setTravelClass] = useState('economy');
  const [numTravelers, setNumTravelers] = useState('1');
  const [flightOptions, setFlightOptions] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // Dummy flight options for demonstration
  const dummyOptions = [
    { id: 1, airline: 'Nepal Airline', departure: 'Kathmandu', destination: 'Pokhara', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },
    { id: 2, airline: 'Nepal Airline', departure: 'ktm', destination: 'Bhutan', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },
    { id: 3, airline: 'Nepal Airline', departure: 'Kathmandu', destination: 'Kolkata', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },
    { id: 4, airline: 'Nepal Airline', departure: 'Kathmandu', destination: 'Biratnagar', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },
    { id: 5, airline: 'India Airway', departure: 'Nepal', destination: 'India', departureTime: '14:00', arrivalTime: '16:00', price: '$250' },
    { id: 6, airline: 'India Airway', departure: 'KTM', destination: 'Delhi', departureTime: '18:00', arrivalTime: '20:00', price: '$300' },
    { id: 7, airline: 'Nepal Airline', departure: 'ktm', destination: 'Bhutan', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },
    { id: 8, airline: 'Nepal Airline', departure: 'ktm', destination: 'Bhutan', departureTime: '10:00', arrivalTime: '12:00', price: '$200' },



  ];

  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: 'Airline Name',
      origin: 'New York',
      destination: 'Los Angeles',
      departureTime: '10:00 AM',
      arrivalTime: '12:00 PM',
      price: '$250',
      bookingLink: '/booking/flight-1',
    },
    {
      id: 2,
      airline: 'Another Airline',
      origin: 'Los Angeles',
      destination: 'Chicago',
      departureTime: '2:00 PM',
      arrivalTime: '5:00 PM',
      price: '$180',
      bookingLink: '/booking/flight-2',
    },
    {
      id: 3,
      airline: 'Yet Another Airline',
      origin: 'Chicago',
      destination: 'Miami',
      departureTime: '8:00 AM',
      arrivalTime: '11:00 AM',
      price: '$300',
      bookingLink: '/booking/flight-3',
    },
  ]);

  const handleSearch = () => {
    if (!departure || !destination || !dateRange || dateRange.length === 0) {
      // If any of the search fields are empty, do not perform the search
      setSearchResult([]);
      return;
    }

    // Filter flights based on search criteria
    const filteredFlights = dummyOptions.filter(flight => {
      return (
        flight.departure.toLowerCase().includes(departure.toLowerCase()) &&
        flight.destination.toLowerCase().includes(destination.toLowerCase())
      );
    });

    if (filteredFlights.length === 0) {
      // If no matching flights are found, display a message
      setSearchResult([{ id: -1, message: 'Sorry, there are no flights available for the selected criteria.' }]);
    } else {
      setSearchResult(filteredFlights);
    }
  };

  return (
    <div>
      <div
        className="hero bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?airplane,flight')" }}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Ready to Travel?</h1>
          <p className=' text-2xl mb-4 text-center'> We’ve Got Great Flight Deals!</p>
          <div className="bg-lime-300 bg-opacity-50 text-black rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-4">Book Your Flights</h1>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Input placeholder="From" value={departure} onChange={(e) => setDeparture(e.target.value)} />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Input placeholder="To" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <DatePicker.RangePicker
                  placeholder={['Departure', 'Return']}
                  value={dateRange}
                  onChange={(dates) => setDateRange(dates)}
                />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Select value={travelClass} style={{ width: '100%' }} onChange={(value) => setTravelClass(value)}>
                  <Option value="economy">Economy Class</Option>
                  <Option value="business">Business Class</Option>
                  <Option value="first">First Class</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Select
                  defaultValue="1"
                  style={{ width: '100%' }}
                  onChange={(value) => setNumTravelers(value)}
                >
                  <Option value="1">1 Traveller</Option>
                  <Option value="2">2 Travellers</Option>
                  <Option value="3">3 Travellers</Option>
                  <Option value="4">4 Travellers</Option>
                </Select>
              </Col>
            </Row>
            <div className="mt-4">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mt-4 block mx-auto" icon={<SearchOutlined />} onClick={handleSearch}>
                Search Flights
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {searchResult.length > 0 ? (


          <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold mb-8 text-center">Available Flights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {searchResult.map((flight) => (
                <div key={flight.id}>
                  <Card
                    title={<span><BsAirplaneEngines /> {flight.id !== -1 ? `${flight.airline} - ${flight.price}` : ''}</span>}
                    className="rounded-lg shadow-md"
                  >
                    {flight.id !== -1 ? (
                      <>
                        <p className="text-xl font-semibold mb-4">{flight.airline} - {flight.price}</p>
                        <div className="flex flex-wrap mb-2">
                          <p className="w-full sm:w-1/2"><strong>Departure:</strong> {flight.departure}</p>
                          <p className="w-full sm:w-1/2"><strong>Destination:</strong> {flight.destination}</p>
                        </div>
                        <div className="flex flex-wrap mb-2">
                          <p className="w-full sm:w-1/2"><strong>Departure Time:</strong> {flight.departureTime}</p>
                          <p className="w-full sm:w-1/2"><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
                        </div>
                        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full mt-4 block mx-auto">Book Now</Button>
                      </>
                    ) : (
                      <p className="text-red-500 ">{flight.message}</p>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-8">
        <div className="container mx-auto">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold ml-6">
              <span className="text-yellow-500">ExploricNepic.com</span> your Trusted Travel Company
            </h2>
            <a href="/signup" >Register now <ArrowRightOutlined /></a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className='text-center'>
                <SafetyCertificateOutlined style={{ fontSize: '4em' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Save & Earn</h3>
              <p className="text-center">Become a member to get exclusive discounts and earn Trip Coins which can be used just like cash.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className='text-center'>
                <GlobalOutlined style={{ fontSize: '4em' }} />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-center">We're Global</h3>
              <ul className="text-center">
                <li>Trusted by 300 thousand travelers.</li>
                <li>Cooperation with over 680 international airlines.</li>
                <li>Covering more than 40 countries.</li>
              </ul>
            </div>

            {/* Third Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className='text-center'>
                <SmileOutlined style={{ fontSize: '4em' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Support in Approx. 30s</h3>
              <p className="text-center">We usually answer phone calls within 30 seconds.</p>
            </div>

            {/* Fourth Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className='text-center'>
                <ExclamationCircleFilled style={{ fontSize: '4em' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Great Deals on the App</h3>
              <p className="text-center">Get instant savings by booking with the app.</p>
              <p className="text-center"> Download the <span className=' text-blue-700'> ExploricNepic.com </span> app</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 p-4 text-center">Get a Glimpse of What's Trending Now</h3>
          <h2 className="text-3xl font-bold ml-6">Fly With Our Partner Airlines</h2>
        </div>
      </div>
      <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flights.map((flight) => (
          <div key={flight.id} className="flex items-center justify-center">
            <div className="w-56 h-56 bg-white rounded-full shadow-lg overflow-hidden flex flex-col items-center justify-center transition duration-300 transform hover:scale-105">
              <h2 className="text-xl font-semibold mb-2">{flight.airline}</h2>
              <p className="text-gray-600 mb-2">{`${flight.origin} to ${flight.destination}`}</p>
              <p className="text-gray-600 mb-2">{`Departure: ${flight.departureTime}`}</p>
              <p className="text-gray-600 mb-2">{`Arrival: ${flight.arrivalTime}`}</p>
              <p className="text-gray-600 mb-2">{`Price: ${flight.price}`}</p>
              <button
                to={flight.bookingLink}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold text-center transition duration-300"
                >
                Book Now
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div >
  );
};

export default FlightBooking;
