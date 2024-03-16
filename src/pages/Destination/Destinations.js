import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../../component/DestinationCard';
import { Button } from 'antd';

const Destinations = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Explore Destinations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link to="/Destination/NepalTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://www.adventurealternative.com/media/200635/parchamo-rolwaling-trek.jpg?height=700&width=1519&quality=&mode=Crop&center=0.5,0.5&format=webp&bgcolor="
              alt="Nepal" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Nepal Tours</h2>
              <p className="text-gray-900">Explore the beauty of Nepal with our exclusive tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">Explore Nepal</button>
            </div>
          </Link>
          <Link to="/Destination/BhutanTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lh5.googleusercontent.com/p/AF1QipN0okgZNaU2Hh9PL6_QoOJabt9PsG3y9MyNVeuf=w252-h160-k-no"
              alt="Bhutan" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-pink-400 to-pink-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Bhutan Tours</h2>
              <p className="text-gray-900">Discover the enchanting kingdom of Bhutan with our guided tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore Bhutan</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-green-400 to-green-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">India Tours</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-blue-400 to-green-900 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">united states of america</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/NepalTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://www.adventurealternative.com/media/200635/parchamo-rolwaling-trek.jpg?height=700&width=1519&quality=&mode=Crop&center=0.5,0.5&format=webp&bgcolor="
              alt="Nepal" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Nepal Tours</h2>
              <p className="text-gray-900">Explore the beauty of Nepal with our exclusive tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">Explore Nepal</button>
            </div>
          </Link>
          <Link to="/Destination/BhutanTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lh5.googleusercontent.com/p/AF1QipN0okgZNaU2Hh9PL6_QoOJabt9PsG3y9MyNVeuf=w252-h160-k-no"
              alt="Bhutan" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-pink-400 to-pink-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Bhutan Tours</h2>
              <p className="text-gray-900">Discover the enchanting kingdom of Bhutan with our guided tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore Bhutan</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-green-400 to-green-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">India Tours</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-blue-400 to-green-900 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">united states of america</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/NepalTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://www.adventurealternative.com/media/200635/parchamo-rolwaling-trek.jpg?height=700&width=1519&quality=&mode=Crop&center=0.5,0.5&format=webp&bgcolor="
              alt="Nepal" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Nepal Tours</h2>
              <p className="text-gray-900">Explore the beauty of Nepal with our exclusive tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">Explore Nepal</button>
            </div>
          </Link>
          <Link to="/Destination/BhutanTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lh5.googleusercontent.com/p/AF1QipN0okgZNaU2Hh9PL6_QoOJabt9PsG3y9MyNVeuf=w252-h160-k-no"
              alt="Bhutan" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-pink-400 to-pink-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Bhutan Tours</h2>
              <p className="text-gray-900">Discover the enchanting kingdom of Bhutan with our guided tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore Bhutan</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-green-400 to-green-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">India Tours</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/IndiaTour" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://lp-cms-production.imgix.net/2022-12/sylwia-bartyzel-eU4pipU_8HA.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75"
              alt="India" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-blue-400 to-green-900 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">united states of america</h2>
              <p className="text-gray-900">Experience the rich culture and heritage of India with our curated tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Explore India</button>
            </div>
          </Link>
          <Link to="/Destination/MultipleCountry" className="block rounded-lg overflow-hidden shadow-md">
            <img src="https://media.istockphoto.com/id/814184046/photo/collage-from-photos-of-italy-on-white-background.jpg?s=612x612&w=0&k=20&c=0XZkkwRdRs4pJ8vzbQZCUxT8IoofEuLzBEBm6JtzJLs="
              alt="Multiple Countries" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4 bg-gradient-to-t from-purple-400 to-purple-600 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Multiple Country Tours</h2>
              <p className="text-gray-900">Embark on an adventure across multiple countries with our exciting tours.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">Explore More</button>

            </div>
          </Link>
        </div>

      </div>
      <hr />
      <div class="bg-gray-100 py-8 grid grid-cols-2 gap-8">
        <div class="ml-10">
          <h2 class="text-3xl mb-10">Top 10 Destinations</h2>
          <DestinationCard />
        </div>
        <div class="lg:w-1/2 mb-4 lg:mb-0 pr-4 text-center pt-16">
          <strong class="text-2xl text-blue-500">Destinations</strong><br />
          <div class="destination-names mr-8">
            <div class="mb-2"><b>Rio de Janeiro</b></div>
            <div class="mb-2"><b>Mt. Everest</b></div>
            <div class="mb-2"><b>Santorini</b></div>
            <div class="mb-2"><b>Kyoto</b></div>
            <div class="mb-2"><b>Machu Picchu</b></div>
            <div class="mb-2"><b>Serengeti National Park</b></div>
            <div class="mb-2"><b>Paris</b></div>
            <div class="mb-2"><b>New York City</b></div>
            <div class="mb-2"><b>Cappadocia</b></div>
            <div class="mb-2"><b>Venice</b></div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Destinations;
