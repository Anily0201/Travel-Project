import React, { useEffect, useState } from 'react';
// import AnnapurnaImage from '../../component/assets/anna1.jpg';
import { SmileOutlined, GlobalOutlined, EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';
import Location from '../../component/others/Location';

const About = () => {

  const [ About , setAbouts] = useState([]);
  const [error , setError] =useState(null) ;

  useEffect(() => {
    fetch('https://localhost:7292/api/About/7')
      .then(response => response.json())
      .then(data => {
       

          setAbouts(data);
          console.log(data , 'iff')
          // console.log(About ,"u")
        
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">{About.headerText}</h1>
          <p className="text-lg text-white mb-10">
            <span className="text-blue-200 font-semibold">{About.introText}</span> 
          </p>
          <div className="flex justify-center items-center mb-12">
            <img src={About.annapurnaImageUrl} alt="Annapurna Range" className="w-64 h-64 rounded-full border-4 border-white shadow-xl mr-8" />
            <div className="text-left">
              <p className="text-lg text-white mb-4">{About.detailedText}</p>
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
          backgroundImage: `url(${About.backgroundImageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Hello! I’m Anil...</h1>
        <p className="text-lg  p-8 text-center leading-7 my-4 mx-auto max-w-2xl">
         {About.paragraph1}
        </p>
        <h2 className="text-4xl font-bold mb-4">Buuuut….</h2>
        <p className="text-lg  p-8">
        {About.paragraph2}
        </p>
      </div>
      <div className="mb-3 pt-6 ">
        <h2 className="text-2xl font-bold mb-8 flex items-center justify-center text-gray-800">Breathtaking Destinations</h2>
        <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
        {About.paragraph3}
        </p>

      </div>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center flex-col text-white text-center p-20"
        style={{
          backgroundImage: `url(${About.background2ImageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Hello! I’m Anil...</h1>
        <p className="text-lg p-8 text-center leading-7 my-4 mx-auto max-w-2xl ">
        {About.paragraph4}
        </p>
        <h2 className="text-4xl font-bold mb-4">Buuuut….</h2>
        <p className="text-lg p-8 ">
        {About.paragraph5}
        </p>
      </div>

      <Location />
    </div>
  );
};

export default About;
