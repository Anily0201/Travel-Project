import React from 'react';
import AnnapurnaImage from '../../component/assets/anna1.jpg'; // Import an image for Annapurna
import { SmileOutlined, GlobalOutlined, EnvironmentOutlined, HeartOutlined } from '@ant-design/icons'; // Import Ant Design icons
import Location from '../../component/Location';

const About = () => {

  const backgroundImageUrl = 'https://assets-global.website-files.com/60394056d54b5a8033fd50c3/604b6438871507f2da4e18a5_photo_1545411312-p-1080.jpeg';
  const background2ImageUrl = 'https://images.trvl-media.com/lodging/19000000/18160000/18153500/18153427/cfa83c34.jpg?impolicy=resizecrop&rw=1200&ra=fit';

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Welcome to ExploreNepic</h1>
          <p className="text-lg text-white mb-10">
            <span className="text-blue-200 font-semibold">ExploreNepic</span> is your gateway to unforgettable adventures in the heart of the Himalayas. Immerse yourself in breathtaking landscapes, vibrant cultures, and extraordinary experiences.
          </p>
          <div className="flex justify-center items-center mb-12">
            <img src={AnnapurnaImage} alt="Annapurna Range" className="w-64 h-64 rounded-full border-4 border-white shadow-xl mr-8" />
            <div className="text-left">
              <p className="text-lg text-white mb-4">Behold the majestic Annapurna Range, one of the most iconic mountain landscapes in the world. Our expertly crafted trekking packages will take you on a journey through lush forests, charming villages, and awe-inspiring mountain vistas.</p>
              <p className="text-lg text-white mb-4">Our commitment to sustainable tourism ensures that your adventure not only leaves you with unforgettable memories but also contributes positively to local communities and the environment.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <SmileOutlined className="text-white text-3xl mr-4" />
              <p className="text-white text-lg">Experience unforgettable moments</p>
            </div>
            <div className="flex items-center">
              <GlobalOutlined className="text-white text-3xl mr-4" />
              <p className="text-white text-lg">Explore diverse cultures</p>
            </div>
            <div className="flex items-center">
              <EnvironmentOutlined className="text-white text-3xl mr-4" />
              <p className="text-white text-lg">Connect with nature</p>
            </div>
            <div className="flex items-center">
              <HeartOutlined className="text-white text-3xl mr-4" />
              <p className="text-white text-lg">Create lasting memories</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center flex-col text-white text-center p-20"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Hello! I’m Anil...</h1>
        <p className="text-lg  p-8 text-center leading-7 my-4 mx-auto max-w-2xl">
          ... I am here for the same reason you are. I am a Tourist -an Explorer -a Wanderer. And whether you’ve taken your first trip yet or not, you are at least one (probably all) of those things at heart. You wouldn’t be reading this if you weren’t. So, let’s see the World together, pick up some handy tips and have some fun.
          In my early days in Culinary School, I was fortunate enough to attend a discounted two week program in Northern Europe, driving from Paris to Rome, by way of Lyon, Parma, Modera and Tuscany and learning the importance and tradition of the local foods of each (and stupidly not taking many pictures).
          A few years later, as an Executive Chef in South Florida, about to be the father of my second child and just kinda making ends meet, I made a very similar acknowledgement to the one you made to bring you here. I wanted to have many, many more of those types of Cultural experiences. More importantly, I wanted my children to have them. From that point on, I made it my mission to prioritize travel in a way that would force me to leverage it with whatever budget and/or schedule I was afforded.
        </p>
        <h2 className="text-4xl font-bold mb-4">Buuuut….</h2>
        <p className="text-lg  p-8">
          OK, OK…Granted, it is not going to look the same for everyone, that is what all the other sites forget to mention. Travel is not “one size fits all”.
          But, that’s kind of the point, right?
          My father, bless him, will spend tens of thousands of dollars to go to Mexico and sit on a beach resort that might as well be in the US. That works for him, and there’s nothing wrong with it. Leena (my Player 2, and regular travel partner) and I (with or without my kids) can get a generational experience out of a 3 day car camping trip to Santa Fe that will cost us $300 total in gas and food as well as a $5000 trip overseas and everything in between. We have learned how to do exponentially more, with quite a bit less. And if we are going to spend those tens of thousands, it is going to be on something that is completely unique.
        </p>
      </div>
      <div className="mb-3 pt-6 ">
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center text-gray-800">Breathtaking Destinations</h2>
        <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
          ExploreNepic offers a curated selection of breathtaking destinations in Nepal and around the world.
          From majestic mountains to serene beaches, we ensure your travel experience is nothing short of spectacular.
        </p>

      </div>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center flex-col text-white text-center p-20"
        style={{
          backgroundImage: `url(${background2ImageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Hello! I’m Anil...</h1>
        <p className="text-lg p-8 text-center leading-7 my-4 mx-auto max-w-2xl ">
          ... I am here for the same reason you are. I am a Tourist -an Explorer -a Wanderer. And whether you’ve taken your first trip yet or not, you are at least one (probably all) of those things at heart. You wouldn’t be reading this if you weren’t. So, let’s see the World together, pick up some handy tips and have some fun.
          In my early days in Culinary School, I was fortunate enough to attend a discounted two week program in Northern Europe, driving from Paris to Rome, by way of Lyon, Parma, Modera and Tuscany and learning the importance and tradition of the local foods of each (and stupidly not taking many pictures).
          A few years later, as an Executive Chef in South Florida, about to be the father of my second child and just kinda making ends meet, I made a very similar acknowledgement to the one you made to bring you here. I wanted to have many, many more of those types of Cultural experiences. More importantly, I wanted my children to have them. From that point on, I made it my mission to prioritize travel in a way that would force me to leverage it with whatever budget and/or schedule I was afforded.
        </p>
        <h2 className="text-4xl font-bold mb-4">Buuuut….</h2>
        <p className="text-lg p-8 ">
          OK, OK…Granted, it is not going to look the same for everyone, that is what all the other sites forget to mention. Travel is not “one size fits all”.
          But, that’s kind of the point, right?
          My father, bless him, will spend tens of thousands of dollars to go to Mexico and sit on a beach resort that might as well be in the US. That works for him, and there’s nothing wrong with it. Leena (my Player 2, and regular travel partner) and I (with or without my kids) can get a generational experience out of a 3 day car camping trip to Santa Fe that will cost us $300 total in gas and food as well as a $5000 trip overseas and everything in between. We have learned how to do exponentially more, with quite a bit less. And if we are going to spend those tens of thousands, it is going to be on something that is completely unique.
        </p>
      </div>

      <Location />
    </div>
  );
};

export default About;
