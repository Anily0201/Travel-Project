import React, { useState } from 'react';

const Whynepic = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="container mx-auto p-8 bg-white rounded-md shadow-lg">
                <h1 className=" flex items-center justify-center text-4xl font-bold mb-8 text-blue-600">Why Choose ExploreNepic for Your Travel Adventures?</h1>

                <div className="mb-6 ">
                    <h2 className="text-2xl font-bold mb-4 flex items-center justify-center text-gray-800">1. Breathtaking Destinations</h2>
                    <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                        ExploreNepic offers a curated selection of breathtaking destinations in Nepal and around the world.
                        From majestic mountains to serene beaches, we ensure your travel experience is nothing short of spectacular.
                    </p>

                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4 flex items-center justify-center text-gray-800">2. Tailored Travel Packages</h2>
                    <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                        Our travel packages are designed to cater to diverse interests and preferences.
                        Whether you're an adventure enthusiast, a cultural explorer, or someone seeking relaxation,
                        we have the perfect package for you.Embark on personalized journeys with ExploreNepic's Tailored
                        Travel Packages, meticulously crafted to exceed your travel aspirations.
                    </p>
                </div>

                
                    {showMore ? (
                        <>
                            <p className="text-gray-700 text-center leading-1 my-4 mx-auto max-w-xl">
                                Our expert team curates unique itineraries, ensuring every moment aligns with your desires. From awe-inspiring destinations in Nepal to captivating global adventures, we blend cultural richness, scenic wonders, and thrilling experiences. Choose ExploreNepic for an unparalleled exploration where each detail caters to your preferences, creating memories that resonate. With a commitment to quality and customization, our Tailored Travel Packages redefine travel, making us the preferred choice for those seeking distinctive and unforgettable adventures. Explore the world uniquely with ExploreNepic.
                            </p>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center">3. Himalayan Glacier Adventures</h2>
                                <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                                    ExploreNepic, formerly known as Himalayan Glacier Adventures, is the #1 guiding adventure travel company on Mount Everest Base Camp and beyond with a 98% success rate.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center">4. Unforgettable Experiences</h2>
                                <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                                    We create travel experiences that go beyond the ordinary. From cultural immersion to thrilling adventures,
                                    every moment with ExploreNepic is crafted to be unforgettable.
                                </p>
                            </div>
                            
                            <button onClick={toggleShowMore} className="text-blue-500 hover:underline block mx-auto">
                                Show less
                            </button>
                        </>
                    ) : (
                        <button onClick={toggleShowMore} className="text-blue-500 hover:underline block mx-auto">
                            Show more
                        </button>
                    )}
                
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center justify-center">Contact Us to Plan Your Next Adventure!</h2>
                    <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">
                        Ready to embark on an unforgettable journey? Contact our team today to start planning your next adventure with ExploreNepic.
                    </p>
                    <div className="flex justify-center">
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whynepic;
