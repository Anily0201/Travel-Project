import React, { useState } from 'react';
import anil2 from '../../component/assets/anil2.jpg';
import anil3 from '../../component/assets/anil3.jpg';

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'ANIL',
            role: 'Founder & CEO',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/johndoe/',
                twitter: 'https://twitter.com/johndoe',
                website: 'https://www.johndoe.com',
            },
            image: anil2,
        },
        {
            id: 2,
            name: 'Jay prakash',
            role: 'Chief Operating Officer',
            bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/janesmith/',
                instagram: 'https://www.instagram.com/janesmith/',
                website: 'https://www.janesmith.com',
            },
            image: anil2,
        },
        {
            id: 3,
            name: 'ANIL',
            role: 'Chief Operating Officer',
            bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/janesmith/',
                instagram: 'https://www.instagram.com/janesmith/',
                website: 'https://www.janesmith.com',
            },
            image: anil3,
        },
        {
            id: 4,
            name: 'ANIL',
            role: 'Chief Operating Officer',
            bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/janesmith/',
                instagram: 'https://www.instagram.com/janesmith/',
                website: 'https://www.janesmith.com',
            },
            image: anil3,
        },
    ];
    const [expandedBios, setExpandedBios] = useState({});

    const toggleBio = (index) => {
        setExpandedBios((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    return (
        <>
            <div className="mt-12 bg-gray-100 p-6 rounded-md">
                <h1 className="flex items-center justify-center text-4xl font-bold mb-8 text-blue-600">
                    EXPLORE NEPIc Team
                </h1>
                <div className="text-center">
                    <i className="text-pink-500 font-semibold mx-auto">
                        We are a team of professionals who share a common devotion to the outdoors and are committed to world travel.
                    </i>
                </div>
                {' '}
                <p className="text-gray-700 text-center leading-7 my-4 mx-auto max-w-2xl">

                    Our team consists of committed people who are involved with operations, finance, and sales, and it is through
                    their professionalism that Himalayan Glacier has been able to provide such high-quality services to their
                    clients over the years. Ours is a team of nature enthusiasts who are committed to world travel and share a
                    common devotion to the outdoors.
                </p>
            </div>

            <div className="container mx-auto p-8">
                <h1 className="flex items-center justify-center text-4xl font-bold mb-8 text-blue-600">
                    Meet Our Team
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={member.id} className="bg-white p-6 rounded-md shadow-lg">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-40 object-cover mb-4 rounded-md"
                            />

                            <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                            <p className="text-gray-600 mb-2">{member.role}</p>
                            <p className="text-gray-700">
                                {expandedBios[index] ? member.bio : `${member.bio.slice(0, 200)}...`}
                                <button
                                    onClick={() => toggleBio(index)}
                                    className="text-blue-500 hover:underline ml-2"
                                >
                                    {expandedBios[index] ? 'Read Less' : 'Read More'}
                                </button>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold mb-2">Connect with {member.name}:</h3>
                                <ul className="flex space-x-2">
                                    <li>
                                        <a
                                            href={member.socialLinks.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            LinkedIn
                                        </a>
                                    </li>

                                    {member.socialLinks.twitter && (
                                        <li>
                                            <a
                                                href={member.socialLinks.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Twitter
                                            </a>
                                        </li>
                                    )}
                                    {member.socialLinks.instagram && (
                                        <li>
                                            <a
                                                href={member.socialLinks.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-pink-500 hover:underline"
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                    )}
                                    {member.socialLinks.website && (
                                        <li>
                                            <a
                                                href={member.socialLinks.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-500 hover:underline"
                                            >
                                                Website
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurTeam;




