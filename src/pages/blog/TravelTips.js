import React, { useState } from 'react';
import { Card, Tag } from 'antd';

const TravelTips = () => {


  const [travelTips, setTravelTips] = useState([
    {
      "id": 1,
      "title": "Pack Light: Tips for Minimalist Travel",
      "category": "Packing",
      "content": "Choose versatile clothing items, pack only the essentials, and avoid overpacking to save space and weight."
    },
    {
      "id": 2,
      "title": "Budget Travel Tips: How to Save Money on Your Trip",
      "category": "Budget",
      "content": "Book flights and accommodations in advance, travel during off-peak seasons, and use public transportation."
    },
    {
      "id": 3,
      "title": "Stay Safe: Essential Travel Safety Tips",
      "category": "Safety",
      "content": "Keep your belongings secure, be aware of your surroundings, and have emergency contacts handy to ensure a safe trip."
    },
    {
      "id": 4,
      "title": "Maintain Health: Tips for Staying Healthy While Traveling",
      "category": "Health",
      "content": "Stay hydrated, protect yourself from the sun and insects, wash your hands frequently, and carry necessary medications."
    },
    {
      "id": 5,
      "title": "Explore: Adventure Travel Tips for Thrill Seekers",
      "category": "Adventure",
      "content": "Research local adventures, dress appropriately, stay informed about weather conditions, and follow safety instructions for a thrilling experience."
    },
    {
      "id": 6,
      "title": "Cultural Immersion: Tips for Experiencing Local Culture",
      "category": "Culture",
      "content": "Learn about local customs and traditions, try regional cuisines, interact with locals, and participate in cultural activities."
    },
    {
      "id": 7,
      "title": "Eco-Friendly Travel: Tips for Sustainable Tourism",
      "category": "Sustainability",
      "content": "Reduce waste, minimize energy consumption, support local businesses, and respect wildlife and natural habitats."
    },
    {
      "id": 8,
      "title": "Solo Travel: Tips for Exploring the World Alone",
      "category": "Solo Travel",
      "content": "Plan ahead, stay connected with loved ones, trust your instincts, and embrace the freedom and independence of solo travel."
    },
    {
      "id": 9,
      "title": "Family Travel: Tips for Stress-Free Vacations with Kids",
      "category": "Family Travel",
      "content": "Pack strategically, plan kid-friendly activities, be flexible with schedules, and involve children in decision-making to create memorable family adventures."
    },
    {
      "id": 10,
      "title": "Road Trip Essentials: Tips for an Epic Journey on the Open Road",
      "category": "Road Trip",
      "content": "Plan your route, pack snacks and entertainment, perform vehicle maintenance, and take breaks to enjoy scenic views and attractions along the way."
    },
    {
      "id": 11,
      "title": "Travel Photography: Tips for Capturing Memories",
      "category": "Photography",
      "content": "Research photography spots, experiment with different angles and lighting, pack necessary equipment, and focus on capturing candid moments and unique perspectives."
    },
    {
      "id": 12,
      "title": "Digital Nomad: Tips for Working Remotely While Traveling",
      "category": "Digital Nomad",
      "content": "Establish a productive workspace, manage your time effectively, stay connected with reliable internet access, and balance work and leisure activities for a successful remote work experience."
    },
    {
      "id": 13,
      "title": "Luxury Travel: Tips for Indulgent Experiences",
      "category": "Luxury Travel",
      "content": "Research luxury accommodations and experiences, splurge on personalized services, prioritize relaxation and pampering, and savor every moment of opulence and comfort."
    },
    {
      "id": 14,
      "title": "Backpacking Adventures: Tips for Budget-Friendly Exploration",
      "category": "Backpacking",
      "content": "Travel light, stay in budget accommodations, cook your meals, use public transportation, and embrace the adventure of exploring on foot."
    },
    {
      "id": 15,
      "title": "Travel Hacks: Tips and Tricks for Smooth Travel",
      "category": "Travel Hacks",
      "content": "Pack a power strip for multiple device charging, bring a portable luggage scale, roll your clothes to save space, and use apps for navigation and language translation."
    },
    {
      "id": 16,
      "title": "Travel Etiquette: Tips for Being a Respectful Traveler",
      "category": "Etiquette",
      "content": "Respect local customs and traditions, dress modestly when visiting religious sites, avoid loud or disruptive behavior, and be mindful of cultural differences."
    },
    {
      "id": 17,
      "title": "Airport Tips: Tricks for Navigating Airports Like a Pro",
      "category": "Airport",
      "content": "Arrive early, check in online, pack carry-on essentials, stay hydrated, and familiarize yourself with airport layouts and security procedures."
    },
    {
      "id": 18,
      "title": "Travel Security: Tips for Protecting Yourself and Your Belongings",
      "category": "Security",
      "content": "Keep your valuables secure, avoid displaying expensive items, use luggage locks, and stay vigilant in crowded or unfamiliar environments."
    },
    {
      "id": 19,
      "title": "Travel Apps: Must-Have Apps for Every Traveler",
      "category": "Travel Apps",
      "content": "Use navigation apps, language translation apps, currency converters, travel booking apps, and offline maps to enhance your travel experience."
    },
    {
      "id": 20,
      "title": "Adventure Sports: Tips for Thrilling Outdoor Activities",
      "category": "Adventure",
      "content": "Research safety guidelines, wear appropriate gear, warm up before activities, and follow instructions from trained instructors to enjoy adrenaline-pumping adventures safely."
    }
   
  ]);

  const [filteredTips, setFilteredTips] = useState(travelTips); // Define filteredTips state


  const filterByCategory = (category) => {
    const filteredTips = travelTips.filter(tip => tip.category === category);
    setFilteredTips(filteredTips);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Travel Tips</h1>
      <div className="flex justify-center mb-8">
        <Tag onClick={() => filterByCategory("Packing")} className="cursor-pointer">Packing</Tag>
        <Tag onClick={() => filterByCategory("Budget")} className="cursor-pointer">Budget</Tag>
        <Tag onClick={() => filterByCategory("Adventure")} className="cursor-pointer">Adventure</Tag>
        <Tag onClick={() => filterByCategory("Culture")} className="cursor-pointer">Culture</Tag>
        <Tag onClick={() => filterByCategory("Airport")} className="cursor-pointer">Airport</Tag>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTips.map(tip => (
          <Card key={tip.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{tip.title}</h2>
              <p className="text-gray-600 mb-4">Category: {tip.category}</p>
              <p className="text-gray-800">{tip.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelTips;
