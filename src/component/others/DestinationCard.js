// import React from 'react';
// import { Card, Carousel } from 'antd';
// import destination1 from '../component/assets/anna1.jpg';
// import destination2 from '../component/assets/places/tajmahal.jpg';
// import destination3 from '../component/assets/places/boat.jpg';
// import Meta from 'antd/es/card/Meta';
// import { HiOutlineLocationMarker } from 'react-icons/hi';

// const DestinationCard = () => {
//     const destinations = [
//         { id: 1, title: 'Rio de Janeiro', location: 'Brazil', about: 'Feel the rhythm of samba in your soul', image: destination1 },
//         { id: 2, title: 'Mt. Everest', location: 'Nepal', about: 'apple', image: destination2 },
//         { id: 3, title: 'Santorini', location: 'Greece', about: 'Picture-perfect sunsets, whitewashed buildings cascading down cliffsides', image: destination3 },
//         { id: 4, title: 'Kyoto', location: 'Japan', about: 'Timeless tradition meets modern marvels in Kyoto', image: destination1 },
//         { id: 5, title: 'Machu Picchu', location: 'Peru', about: 'Venture into the mist-shrouded peaks of the Andes', image: destination2 },
//         { id: 6, title: 'Serengeti National Park', location: 'Tanzania', about: 'Experience the untamed beauty of the African wilderness in Serengeti National Park', image: destination3 },
//         { id: 7, title: 'Paris', location: 'France', about: 'Paris – the city of love, lights, and eternal romance', image: destination2 },
//         { id: 8, title: 'New York City', location: 'USA', about: 'The concrete jungle where dreams are made – New York City ', image: destination1 },
//         { id: 9, title: 'Cappadocia', location: 'Turkey', about: 'Surrender to the otherworldly allure of Cappadocia', image: destination2 },
//         { id: 10, title: 'Venice', location: 'Italy', about: 'Embark on a voyage through the floating city of Venice', image: destination1 },

//     ];

//     return (
//         <Carousel autoplay dots={true} className="destination-carousel">
//             {destinations.map((destination) => (
//                 <div key={destination.id} className="relative">
//                     <Card
//                         className="destination-card overflow-hidden"
//                         hoverable
//                         cover={<img src={destination.image} alt={destination.title} className="w-full h-3/4 object-cover" />}
//                     >
//                         <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 opacity-0 transition-opacity">
//                             <h2 className="text-2xl mb-2">
//                                 <span className="mr-2"  >
//                                     {destination.title}
//                                 </span>
//                             </h2>
//                             <div className="flex items-center">
//                                 < HiOutlineLocationMarker className="mr-2" />
//                                 <p>{destination.location}</p>
//                             </div>
//                         </div>
//                         <Meta className="ant-card-meta-description"
//                             title={destination.about}
//                         />
//                     </Card>
//                 </div>
//             ))}
//         </Carousel>
//     );
// };

// export default DestinationCard;
