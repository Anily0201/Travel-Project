import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7292/api/Destinations')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const isUnique = data.every(
        //   (destination, index , self)=>
        //     destination.Id && self.findIndex(d=>d.Id===destination.Id)===index
        // );
       // if (isUnique){
          setDestinations(data);
          console.log(data , 'iff')
        // } else {
        //   setError(new Error('Non-unique or missing IDs detected.'));
        // }
      })
      .catch(error => {
        setError(error);
       // console.log(error , 'and')
      });
  }, []);
 
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Explore Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map(destination => (
            <Link
              to={`/Destination/${destination.countryName}`}
              key={destination.id}
              className="block rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={destination.imageUrl}
                alt={destination.countryName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 rounded-b-lg">
                <h2 className="text-xl font-semibold mb-2">{destination.countryName} Tours</h2>
                <p className="text-gray-900">{destination.description}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                Explore {destination.countryName}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Destinations;
