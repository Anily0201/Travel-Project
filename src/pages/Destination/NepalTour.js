import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaMapMarkerAlt } from 'react-icons/fa';


const swiperInfo = [
  {
    "id": 1,
    "name": "Mount Everest Base Camp",
    "location": "Solukhumbu, Nepal",
    "image": "https://media.gadventures.com/media-server/cache/4d/07/4d0772ffb7cfbf12c6079ddf8037bbdc.jpg"
  },
  {
    "id": 2,
    "name": "Annapurna Circuit Trek",
    "location": "Annapurna, Nepal",
    "image": "https://images.ctfassets.net/m5us57n7qfgl/3N7ZkWSPqTlPjidQk823RC/9769ecb01921b791cc4990b23294299d/AnnapurnaSanctuary_client_lee.bethell.peg.jpeg?w=1200&h=630&fm=jpg&q=70&f=center"
  },
  {
    "id": 3,
    "name": "Kathmandu Valley",
    "location": "Kathmandu, Nepal",
    "image": "https://media.istockphoto.com/id/469532554/photo/bahakapur-nepal.jpg?s=612x612&w=0&k=20&c=9RHmLtdaPTJdtzpz86DQDW98X-WrT5FaUdas6mXKEHM="
  },
  {
    "id": 4,
    "name": "Pokhara",
    "location": "Gandaki, Nepal",
    "image": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRpKGaiEd0CcyE8j4EcMFrGgYiFjhNKUFb4Q9pEw6Yi5MZEBnW2z0JPOhv4e8SjEWCMtHjeuRsvwGjNJlgpw619bMPVpNbRgaPuSkMKhQ"
  },
  {
    "id": 5,
    "name": "Chitwan National Park",
    "location": "Chitwan, Nepal",
    "image": "https://www.wendywutours.co.uk/resource/upload/914/banner-chitwan-national-park.jpg.webp"
  },
  {
    "id": 6,
    "name": "Lumbini",
    "location": "Rupandehi, Nepal",
    "image": "https://img.freepik.com/free-photo/statue-buddha-with-word-buddha-it_1340-28533.jpg"
  },
  {
    "id": 7,
    "name": "Bhaktapur",
    "location": "Bhaktapur, Nepal",
    "image": "https://watermark.lovepik.com/photo/20211125/large/lovepik-bhaktapur-durbar-square-duba-square-bhaktapur-picture_501050772.jpg"
  },
  {
    "id": 8,
    "name": "Nagarkot",
    "location": "Bhaktapur, Nepal",
    "image": "https://www.visittnt.com/images/nagarkot.jpg"
  },
  {
    "id": 9,
    "name": "Langtang National Park",
    "location": "Rasuwa, Nepal",
    "image": "https://www.natureloverstrek.com/pagegallery/all-you-need-to-know-about-horse-riding-in-langtang-%7C-interesting-things-about-horse-riding-in-langtang-region34.jpg"
  },
  {
    "id": 10,
    "name": "Gosaikunda Lake",
    "location": "Rasuwa, Nepal",
    "image": "https://asahitreks.com/wp-content/uploads/2017/05/Langtang-Gosaikunda-Trekking-6.jpg"
  },
  {
    "id": 11,
    "name": "Rara Lake",
    "location": "Mugu, Nepal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8gvYoGIgMkNTqBoEi9dywr27WoVHka2VrA&usqp=CAU"
  },
  {
    "id": 12,
    "name": "Mustang",
    "location": "Mustang, Nepal",
    "image": "https://www.enepaltreks.com/wp-content/uploads/2018/04/umustang.jpg"
  },

]
  ;
const NepalTour = () => {

  const activities = [
    {
      title: 'Trekking and Hiking',
      description: 'Explore the stunning landscapes of Nepal on foot.',
      color: 'bg-blue-500',
      icon: '🥾',
    },
    {
      title: 'Climbing and Expedition',
      description: 'Challenge yourself with mountain climbing and expeditions.',
      color: 'bg-green-500',
      icon: '🧗‍♂️',
    },
    {
      title: 'Cultural and Historical Tours',
      description: 'Discover the rich cultural heritage of Nepal.',
      color: 'bg-purple-500',
      icon: '🏛️',
    },
    {
      title: 'Nature and Wildlife',
      description: 'Experience the diverse wildlife and natural beauty of Nepal.',
      color: 'bg-yellow-500',
      icon: '🐅',
    },
    {
      title: 'Religious and Spiritual Tours',
      description: 'Visit sacred sites and immerse yourself in spiritual experiences.',
      color: 'bg-red-500',
      icon: '🙏',
    },
    {
      title: 'Pedal the Hidden Trails Recklessly',
      description: 'Explore off-the-beaten-path trails on a thrilling biking adventure.',
      color: 'bg-indigo-500',
      icon: '🚴‍♂️',
    },
    {
      title: 'Heli Tours',
      description: 'Take a helicopter tour for a bird\'s eye view of Nepal\'s stunning landscapes.',
      color: 'bg-pink-500',
      icon: '🚁',
    },
    {
      title: 'Adventure Sports in Nepal',
      description: 'Experience adrenaline-pumping adventure sports activities.',
      color: 'bg-orange-500',
      icon: '⛷️',
    },
    {
      title: 'Multiple Activities in Nepal',
      description: 'Explore a variety of activities and experiences in Nepal.',
      color: 'bg-teal-500',
      icon: '🎭',
    },
  ];

  // Render each activity as a card
  const renderActivityCards = () => {
    return (
      activities.map((activity, index) => (
        <div key={index} className={`rounded-lg overflow-hidden shadow-md p-6 text-center ${activity.color}`}>
          <span className="text-4xl mb-2">{activity.icon}</span>
          <h3 className="text-white text-xl font-semibold mb-4">{activity.title}</h3>
          <p className="text-white">{activity.description}</p>
        </div>
      )));
  };



  return (
    <div>
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d6/96/36/photo4jpg.jpg?w=1400&h=1400&s=1")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Nepal</h1>
            <h3 className="text-4xl  mb-2">Land of the Himalayas</h3>
            <p className="text-lg">Experience the vibrant culture, breathtaking landscapes, and adventure of Nepal.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <p className="text-lg text-gray-800 mb-6">Nepal, the Land of the Himalayas, is a diverse and exotic travel destination renowned for its vibrant culture, breathtaking mountain sceneries, and religious heritage. It is home to the world's highest mountain, Mt. Everest, and boasts 10 UNESCO World Heritage Sites.</p>
        <p className="text-lg text-gray-800 mb-6">Nestled between India and China, Nepal offers unparalleled trekking experiences, with popular regions including Everest, Annapurna, and Langtang. Beyond trekking, visitors can enjoy a range of adventure activities such as white water rafting, paragliding, and wildlife safaris.</p>
        <p className="text-lg text-gray-800 mb-6">With countless spectacular things to do, Nepal is a must-visit destination for any adventure-seeking traveler.</p>
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Nepal Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First tour card on left */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img src="https://media.gadventures.com/media-server/cache/4d/07/4d0772ffb7cfbf12c6079ddf8037bbdc.jpg" alt="Mount Everest" className="w-full h-96 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-semibold mb-4">Mount Everest Base Camp Trek</h2>
              <p className="text-lg mb-4">Embark on an unforgettable journey to the base camp of the world's highest peak.</p>
              <p className="text-lg mb-4">Duration: 12 days</p>
              <p className="text-lg mb-4">Difficulty: Moderate</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore More</button>
            </div>
          </div>
          {/* First tour description on right */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-xl">Designed for cultural and historical sightseeing in Nepal with its extended history, alluring art and unique architecture, explore the diversities through Nepal cultural tour holidays. A rich variety of unspoiled beauty, holy pilgrimage sites, historical monuments and UNESCO sites reflect the richness of Nepali culture. Hand picked from other Nepal tour packages, the cultural and historical tour takes you to places of monumental importance such as Patan and Bhaktapur. Eye-catching designs of Kathmandu Durbar Square, the infamous Pashupatinath temple and the hilltop Swayambhunath temple (monkey temple) offers you invaluable insights of a rich cultural and religious heritage.</p>
            <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">A typical cultural tour in Nepal refreshes your body, mind, and soul and enchants you making your holiday a memorable one. Your tour is incomplete without a visit to one of the world’s most important spiritual sites and home to the birthplace of Lord Buddha in Lumbini. Rejoice in the diverse ethnicities, castes and religions, unique festivals, traditions and beliefs, languages and the people, and experience the cultural delights of Nepal.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Second tour description on left */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-xl">Designed for cultural and historical sightseeing in Nepal with its extended history, alluring art and unique architecture, explore the diversities through Nepal cultural tour holidays. A rich variety of unspoiled beauty, holy pilgrimage sites, historical monuments and UNESCO sites reflect the richness of Nepali culture. Hand picked from other Nepal tour packages, the cultural and historical tour takes you to places of monumental importance such as Patan and Bhaktapur. Eye-catching designs of Kathmandu Durbar Square, the infamous Pashupatinath temple and the hilltop Swayambhunath temple (monkey temple) offers you invaluable insights of a rich cultural and religious heritage.</p>
            <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">A typical cultural tour in Nepal refreshes your body, mind, and soul and enchants you making your holiday a memorable one. Your tour is incomplete without a visit to one of the world’s most important spiritual sites and home to the birthplace of Lord Buddha in Lumbini. Rejoice in the diverse ethnicities, castes and religions, unique festivals, traditions and beliefs, languages and the people, and experience the cultural delights of Nepal.</p>
          </div>
          {/* Second tour card on right */}
          <div className="relative rounded-lg overflow-hidden shadow-md order-1 md:order-2">
            <img src="https://www.muchbetteradventures.com/magazine/content/images/2019/05/23144138/Annapurna-Circuit-4-1600x928.jpeg" alt="Mount Everest" className="w-full h-96 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-semibold mb-4">Annapurna Circuit Trek</h2>
              <p className="text-lg mb-4">Experience the breathtaking landscapes of the Annapurna region on this iconic trek.</p>
              <p className="text-lg mb-4">Duration: 15 days</p>
              <p className="text-lg mb-4">Difficulty: Moderate to Difficult</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explore More</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Things to Do in Nepal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {renderActivityCards()}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-0">Top 10 Destination </h1>
        <p className="text-lg mb-4 text-green-500"> you must have to visit</p>
      </div>
      <div >
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiperInfo.map(swiperInfo => (
            <SwiperSlide key={swiperInfo.id}>
              <img src={swiperInfo.image} alt={swiperInfo.name} />
              <div className="swiperInfo-info">
                <h3>{swiperInfo.name}</h3>
                <p><FaMapMarkerAlt /> {swiperInfo.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NepalTour;
