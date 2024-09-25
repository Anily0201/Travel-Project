import React from 'react';
import { Card } from 'antd';

const TravelStories = () => {
  const travelStories = [
    {
      id: 1,
      title: "Exploring the Enchanting Temples of Angkor Wat",
      image: "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      author: "John Doe",
      date: "February 10, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "A Journey Through the Serene Landscapes of Iceland",
      image: "https://interviewgirl.org/wp-content/uploads/2012/03/travel-stories-1024x683.png",
      author: "Jane Smith",
      date: "March 20, 2023",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      "id": 3,
      "title": "Discovering the Mysteries of Machu Picchu",
      "image": "https://interviewgirl.org/wp-content/uploads/2012/03/travel-stories-1024x683.png",
      "author": "David Johnson",
      "date": "April 15, 2023",
      "content": "Embark on a journey to explore the ancient ruins of Machu Picchu nestled in the Andes Mountains of Peru. Be captivated by the rich history and breathtaking landscapes of this UNESCO World Heritage Site."
    },
    {
      "id": 4,
      "title": "Safari Adventures in the Serengeti National Park",
      "image": "https://interviewgirl.org/wp-content/uploads/2012/03/travel-stories-1024x683.png",
      "author": "Emily Brown",
      "date": "May 5, 2023",
      "content": "Experience the thrill of safari adventures in the vast plains of the Serengeti National Park in Tanzania. Witness the incredible wildlife diversity including lions, elephants, and wildebeests in their natural habitat."
    },
    {
      "id": 5,
      "title": "Cultural Immersion in Kyoto's Historic Temples",
      "image": "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      "author": "Michael Williams",
      "date": "June 12, 2023",
      "content": "Immerse yourself in the rich cultural heritage of Kyoto as you wander through its historic temples, traditional tea houses, and serene gardens. Discover the essence of Japanese culture in this charming city."
    },
    {
      "id": 6,
      "title": "Trekking to the Lost City of Petra",
      "image": "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      "author": "Sophia Taylor",
      "date": "July 25, 2023",
      "content": "Embark on an unforgettable trek to the ancient city of Petra hidden amidst the desert landscapes of Jordan. Marvel at the intricate rock-cut architecture and explore the secrets of this UNESCO World Heritage Site."
    },
    {
      "id": 7,
      "title": "Island Hopping in the Greek Cyclades",
      "image": "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      "author": "Alexander Roberts",
      "date": "August 10, 2023",
      "content": "Set sail on a journey to explore the idyllic islands of the Greek Cyclades. From the whitewashed villages of Santorini to the crystal-clear waters of Mykonos, indulge in the beauty and tranquility of the Aegean Sea."
    },
    {
      "id": 8,
      "title": "Adventure Amidst the Amazon Rainforest",
      "image": "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      "author": "Emma Wilson",
      "date": "September 7, 2023",
      "content": "Embark on a thrilling adventure deep into the heart of the Amazon Rainforest, home to an incredible array of biodiversity. Explore lush jungles, spot exotic wildlife, and immerse yourself in the wonders of nature."
    },
    {
      "id": 9,
      "title": "Cruising the Fjords of Norway",
      "image": "https://jessieonajourney.com/wp-content/uploads/2020/08/crazy-travel-stories.jpg",
      "author": "William Anderson",
      "date": "October 20, 2023",
      "content": "Embark on a scenic cruise through the majestic fjords of Norway, surrounded by towering cliffs, cascading waterfalls, and picturesque villages. Experience the magic of Norway's natural beauty on this unforgettable journey."
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Travel Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {travelStories.map(story => (
          <Card key={story.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={story.image} alt={story.title} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{story.title}</h2>
              <p className="text-gray-600 text-sm mb-4">By {story.author} | {story.date}</p>
              <p className="text-gray-800">{story.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelStories;
