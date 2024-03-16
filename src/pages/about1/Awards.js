import React from 'react';

const awardsStyles = `
  @keyframes moveLine {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .animate-move-line {
    animation: moveLine 2s infinite;
  }
`;

const Awards = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="flex items-center justify-center text-4xl font-bold mb-8 text-blue-600">
        Awards and Recognitions
      </h1>

      <div className="mb-8">
        <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
          ExploreNepic has been honored with various awards and recognitions for our commitment to providing exceptional travel experiences. These accolades are a testament to our dedication to excellence in the travel industry.
        </p>
      </div>

<div className="mb-8 flex flex-col items-center">
  <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Awards</h1>

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    <div className="lg:w-1/2 mb-4 lg:mb-0 pr-4">
      <strong className="text-2xl text-blue-500">Certificate of Excellence from Trip Advisor, 2019</strong><br />
      For meeting every criterion as promised and delivering great services consistently to all our valuable guests. And for putting untiring efforts to live up to the expectations and satisfaction of our clients.
    </div>
    <div className="lg:w-1/3">
      <img src="https://cdn.himalayanglacier.com/wp-content/uploads/2020/06/Certificate-of-excellence-tripadvisor-2019-for-Himalayan-Glacier.jpg" alt="Award 1" className="w-full h-auto rounded-md shadow-md" />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-8">
    <div className="lg:w-1/2">
      <img src="https://cdn.himalayanglacier.com/wp-content/uploads/2020/06/Certificate-of-excellence-tripadvisor-2019-for-Himalayan-Glacier.jpg" alt="Award 2" className="w-full h-auto rounded-md shadow-md" />
    </div>
    <div className="lg:w-2/3 mb-4 lg:mb-0 pl-4">
      <strong className="text-2xl text-blue-500">Mount Everest Tourism Promotion Ambassador Awards, 2016</strong><br />
      Awarded by “Women Creative Center, Nepal” for responsible tourism and excelling in promoting Mt. Everest tourism as the Best Trekking Agency in Nepal.
    </div>
  </div>
</div>




<div className="mb-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Recognitions</h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-4 lg:mb-0 pr-4">
            <strong className="text-2xl text-blue-500">“Top 10 Best Trekking Agencies”, NMA</strong><br />
            Nepal Mountaineering Association (NMA) appreciated our eco-friendly efforts and for being able to provide a large number of climbing permits. NMA awarded this token of gratitude for being “Top 10 Best Trekking Agencies of Nepal” for the following year.
          </div>
          <div className="lg:w-1/2 relative overflow-hidden">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a4/46/c7/amazing-spread-and-tastes.jpg?w=1200&h=-1&s=1"
              alt="Recognition 1" className="w-full h-auto rounded-md shadow-md transition-transform transform hover:scale-105" />
            <div className="absolute inset-0 border-4 overflow-hidden rounded-md animate-pulse">
              <div className="absolute inset-y-0 left-0 w-2 h-full bg-blue-500 animate-move-line"></div>
              <div className="absolute inset-y-0  w-2 h-full bg-green-500 animate-move-line"></div>
              <div className="absolute inset-y-0 right-0 w-2 h-full bg-red-500 animate-move-line"></div>
            </div>
            <div className="absolute inset-0 border-4 border-blue-500 rounded-md animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-6 bg-blue-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-2 h-9 bg-blue-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-2 h-6 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-8">
          <div className="lg:w-1/2 relative">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a4/46/c7/amazing-spread-and-tastes.jpg?w=1200&h=-1&s=1" alt="Recognition 2" className="w-full h-auto rounded-md shadow-md transition-transform transform hover:scale-105" />

            <div className="absolute inset-0 border-4 border-blue-600 rounded-md animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-6 bg-blue-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-2 h-10 bg-blue-500 rounded-full mr-1 animate-bounce"></div>
              <div className="w-2 h-6 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-4 lg:mb-0 pl-4">
            <strong className="text-2xl text-blue-500">Certificate of Excellence from TJF-NEPAL</strong><br />
            Nepal Tourism Journalist Forum (TJF-NEPAL) awarded this trophy for excellence to HGT for our dedicated and excellent service in the run-up to promoting Nepal’s tourism by doing hard work, and imparting voluntary social services, contributing to the betterment of society and striving to eradicate poverty and improve the lives of impoverished people.
          </div>
        </div>
      </div>

<div className="text-center mt-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-md">
  <p className="text-white leading-7 my-4 mx-auto max-w-2xl">
    ExploreNepic is proud to be acknowledged for our contributions to the travel industry. Contact us to plan your next award-winning adventure!
  </p>
  <div className="flex justify-center">
  <button className="mt-6 bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600">
      Contact Us
    </button>
  </div>
</div>

    </div>
  );
};

export default Awards;
