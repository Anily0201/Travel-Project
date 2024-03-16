import React from "react";
import { Card, List } from "antd";

const { Meta } = Card;

const Reward = () => {
  const rewardsData = [
    {
      title: "25 % Diccount on pokhara ",
      description: "Win a vacation package to your dream destination! Take a break and relax.",
      imageUrl: "https://source.unsplash.com/1600x900/?pokhara,nepal",
    },
    {
      title: "Explore Pokhara's Beauty",
      description: "Experience the breathtaking landscapes and serene beauty of Pokhara. Book now and get 25% off your stay!",
      imageUrl: "https://source.unsplash.com/1600x900/?nepal,pokhara"
    },
    
    {
      title: "Free Vacation Package",
      description: "Win a vacation package to your dream destination! Take a break and relax.",
      imageUrl: "https://source.unsplash.com/1600x900/?vacation",
    },
    {
      title: "Discount Voucher",
      description: "Get 50% off on your next booking! Save money while planning your next trip.",
      imageUrl: "https://source.unsplash.com/1600x900/?voucher",
    },
    {
      title: "Luxury Escape to Dubai",
      description: "Indulge in luxury with our exclusive Dubai getaway package. Enjoy lavish accommodations, gourmet dining, and VIP experiences.",
      imageUrl: "https://source.unsplash.com/1600x900/?dubai,luxury"
    },
    {
      title: "Discover the Maldives",
      description: "Escape to a tropical paradise in the Maldives. Experience crystal-clear waters, white sandy beaches, and unforgettable sunsets.",
      imageUrl: "https://source.unsplash.com/1600x900/?maldives,beach"
    },
    {
      title: "Cultural Journey in Kyoto",
      description: "Immerse yourself in the rich cultural heritage of Kyoto, Japan. Explore ancient temples, traditional tea houses, and serene gardens.",
      imageUrl: "https://source.unsplash.com/1600x900/?kyoto,japan"
    },
    {
      title: "Thrilling Adventure in the Swiss Alps",
      description: "Embark on an adrenaline-pumping adventure in the majestic Swiss Alps. Experience skiing, snowboarding, and breathtaking mountain views.",
      imageUrl: "https://source.unsplash.com/1600x900/?switzerland,alps"
    },
    {
      title: "Romantic Escape to Paris",
      description: "Celebrate love in the City of Lights with our romantic getaway package. Enjoy candlelit dinners, scenic boat cruises, and iconic landmarks.",
      imageUrl: "https://source.unsplash.com/1600x900/?paris,romantic"
    }
    
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative" style={{  backgroundImage: 'url("https://source.unsplash.com/1600x900/?reward")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px' }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-aos="fade-down">Get Rewarded</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white" data-aos="fade-up">Earn rewards points and unlock exclusive offers and discounts when booking travel packages.</p>
        </div>
      </div>

      {/* How to Get Rewards Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6" data-aos="fade-right">How to Get Rewards</h2>
          <p className="text-lg mb-6" data-aos="fade-left">
            Earn rewards points by participating in various activities on our website. Here's how you can earn rewards:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-4" data-aos="fade-right">Play games, quizzes, and more.</li>
            <li className="mb-4" data-aos="fade-left">Book travel packages and earn points for every booking.</li>
            {/* Add more ways to earn rewards here */}
          </ul>
        </div>
      </div>

      {/* Rewards Display */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-semibold text-center mb-6" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" >Unlock your Rewards</h2>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={rewardsData}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                className="w-full" data-aos="fade-up"
                cover={<img alt={item.title} src={item.imageUrl} className="h-64 object-cover" />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Reward;
