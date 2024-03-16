import React, { useState } from 'react';
import { Card, Button } from 'antd';

const AdvDiaries = () => {
  
  const [adventureDiaries, setAdventureDiaries] = useState([
    {
      id: 1,
      title: "Hiking the Inca Trail to Machu Picchu",
      image: "https://source.unsplash.com/800x600/?inca-trail",
      author: "John Doe",
      date: "February 10, 2023",
      content: "Embark on an epic journey through the rugged Andes Mountains on the historic Inca Trail. Experience breathtaking scenery, ancient ruins, and the awe-inspiring beauty of Machu Picchu.",
    },
    {
      id: 2,
      title: "Climbing Mount Kilimanjaro: Roof of Africa",
      image: "https://source.unsplash.com/800x600/?mount-kilimanjaro",
      author: "Jane Smith",
      date: "March 20, 2023",
      content: "Challenge yourself to summit the tallest peak in Africa and witness the stunning sunrise from Uhuru Peak. Explore diverse ecosystems, from lush rainforests to barren alpine deserts, on this unforgettable adventure.",
    },
    {
      "id": 3,
      "title": "Exploring the Grand Canyon: Nature's Masterpiece",
      "image": "https://source.unsplash.com/800x600/?grand-canyon",
      "author": "Michael Johnson",
      "date": "April 5, 2023",
      "content": "Embark on a journey into the depths of the Grand Canyon, one of the world's most magnificent natural wonders. Traverse rugged trails, marvel at towering cliffs, and experience the raw beauty of this iconic landscape.",
    },
    {
      "id": 4,
      "title": "Rafting the Rapids of the Colorado River",
      "image": "https://source.unsplash.com/800x600/?colorado-river",
      "author": "Emily Davis",
      "date": "May 15, 2023",
      "content": "Experience the thrill of white-water rafting on the mighty Colorado River. Navigate through exhilarating rapids, surrounded by stunning canyon walls and pristine wilderness, on this adrenaline-fueled adventure.",
    },
    {
      "id": 5,
      "title": "Trekking the Annapurna Circuit: Himalayan Odyssey",
      "image": "https://source.unsplash.com/800x600/?annapurna-circuit",
      "author": "David Brown",
      "date": "June 25, 2023",
      "content": "Embark on an epic trek around the Annapurna Massif, traversing high mountain passes, picturesque villages, and breathtaking landscapes. Discover the rich culture and warm hospitality of the Himalayan people on this unforgettable journey.",
    },
    {
      "id": 6,
      "title": "Diving into the Underwater Paradise of the Great Barrier Reef",
      "image": "https://source.unsplash.com/800x600/?great-barrier-reef",
      "author": "Sophia Roberts",
      "date": "July 10, 2023",
      "content": "Immerse yourself in the vibrant marine life of the Great Barrier Reef, the world's largest coral reef system. Dive into crystal-clear waters, encounter colorful coral gardens, and swim alongside majestic sea creatures on this bucket-list adventure.",
    },
    {
      "id": 7,
      "title": "Exploring the Lost City of Petra: Rose-Red Wonder",
      "image": "https://source.unsplash.com/800x600/?petra",
      "author": "William Anderson",
      "date": "August 20, 2023",
      "content": "Embark on a journey back in time to the ancient city of Petra, carved into the rose-red cliffs of Jordan. Wander through narrow sandstone canyons, marvel at intricately carved facades, and uncover the secrets of this UNESCO World Heritage Site.",
    },
    {
      "id": 8,
      "title": "Cycling the Camino de Santiago: Pilgrim's Path",
      "image": "https://source.unsplash.com/800x600/?camino-de-santiago",
      "author": "Emma Wilson",
      "date": "September 5, 2023",
      "content": "Follow in the footsteps of pilgrims on the historic Camino de Santiago, a network of ancient pilgrimage routes leading to the shrine of the apostle St. James in Santiago de Compostela. Cycle through picturesque countryside, charming villages, and medieval towns on this spiritual journey.",
    },
    {
      "id": 9,
      "title": "Skiing the Slopes of the Swiss Alps: Winter Wonderland",
      "image": "https://source.unsplash.com/800x600/?swiss-alps",
      "author": "Oliver Taylor",
      "date": "October 15, 2023",
      "content": "Experience the thrill of skiing in the breathtaking landscapes of the Swiss Alps, home to some of the world's most renowned ski resorts. Glide down pristine slopes, soak in panoramic views, and indulge in après-ski delights in this alpine paradise.",
    }
  ]);


  const adventureDiaries1 = [
    {
      "id": 1,
      "title": "Trekking to Everest Base Camp: Roof of the World",
      "image": "https://source.unsplash.com/800x600/?everest-base-camp",
      "author": "Emma Roberts",
      "date": "November 5, 2023",
      "content": "Embark on an unforgettable journey to the base of the world's highest peak, Mount Everest. Trek through remote mountain villages, dense forests, and rugged terrain, while soaking in breathtaking views of snow-capped peaks and glaciers along the way."
    },
    {
      "id": 2,
      "title": "White Water Rafting on the Trishuli River: Adrenaline Rush",
      "image": "https://source.unsplash.com/800x600/?trishuli-river",
      "author": "James Anderson",
      "date": "December 10, 2023",
      "content": "Experience the thrill of white water rafting on the exhilarating rapids of the Trishuli River in Nepal. Navigate through challenging rapids, cascading waterfalls, and breathtaking gorges, while enjoying the stunning natural beauty of the Himalayas."
    },
    {
      "id": 3,
      "title": "Paragliding Over Pokhara Valley: Bird's Eye View",
      "image": "https://source.unsplash.com/800x600/?pokhara-paragliding",
      "author": "Sophia Johnson",
      "date": "January 15, 2024",
      "content": "Soar like a bird above the picturesque Pokhara Valley on an exhilarating paragliding adventure. Enjoy panoramic views of serene lakes, lush valleys, and towering mountains, while experiencing the freedom of flight in one of the world's premier paragliding destinations."
    }
    
  ];

  
  const sortByDate = () => {
    const sortedDiaries = [...adventureDiaries].sort((a, b) => new Date(b.date) - new Date(a.date));
    setAdventureDiaries(sortedDiaries);
  };

  return (
   <div>
     <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Adventure Diaries</h1>
      <div className="flex justify-end mb-4">
        <Button onClick={sortByDate} className="mr-2">Sort by Date</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventureDiaries.map(diary => (
          <Card key={diary.id} className="relative">
            <img src={diary.image} alt={diary.title} className="w-full h-64 object-cover object-center" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold mb-2">{diary.title}</h2>
              <p className="text-gray-300 text-sm">By {diary.author} | {diary.date}</p>
              <p className="text-gray-200">{diary.content}</p>
              <Button type="primary" className="mt-4">Read More</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div>
    <div className="container mx-auto py-8">
    <h2 className="text-4xl font-bold text-center mb-8">Nepal's Adventure Diaries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adventureDiaries1.map(diary => (
          <Card key={diary.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={diary.image} alt={diary.title} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{diary.title}</h2>
              <p className="text-gray-600 text-sm mb-4">By {diary.author} | {diary.date}</p>
              <p className="text-gray-800">{diary.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
    </div>
   </div>
  );
};

export default AdvDiaries;
