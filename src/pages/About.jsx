// import React from 'react';
// import { NavLink } from 'react-router-dom'

// const About = () => {
//     return (
//         <div className="container p-5 mt-12 bg-gray-100 cursor-pointer mx-auto">
//             <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">About Us</h1>
//             <p className="text-lg text-gray-700">
//                 Welcome to <NavLink to="/"
//                 ><span className="font-bold text-teal-500">Golden Care</span></NavLink>, a platform dedicated to improving the well-being of senior citizens.
//                 Our mission is to provide reliable healthcare management, volunteer support services, and wellness programs
//                 tailored to the needs of the elderly.
//             </p>

//             <h2 className="text-2xl font-bold text-teal-600 mt-5">Our Mission</h2>
//             <p className="text-gray-700">
//                 We aim to create a supportive environment where seniors can access healthcare, medication reminders,
//                 and social services to enhance their quality of life.
//             </p>

//             <h2 className="text-2xl font-bold text-teal-600 mt-5">Why Choose Us?</h2>
//             <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
//                 <li>Comprehensive healthcare management for seniors.</li>
//                 <li>Telemedicine appointments and exercise routines.</li>
//                 <li>Strong community support and volunteer programs.</li>
//                 <li>Simple and user-friendly interface.</li>
//             </ul>

//             <h2 className="text-2xl font-bold text-teal-600 mt-5">Our Team</h2>
//             <p className="text-gray-700">
//                 Our team consists of healthcare professionals, software engineers, and volunteers dedicated
//                 to making senior care more accessible and effective.
//             </p>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImage from '../assets/GC_logo.webp';
import teamImage from '../assets/teamImg.png';
import missionImage from '../assets/mission.png';

const About = () => {
    return (
        <div className="w-full bg-gradient-to-b from-teal-50 to-gray-100 min-h-screen">
            {/* Hero Section */}
            <div className=" relative text-center py-16 px-6 bg-cover rounded-md  bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white w-full mx-auto">
                    <h1 className="text-5xl font-extrabold">About Us</h1>
                    <p className="text-lg mt-4">
                        Welcome to <NavLink to="/" className="font-bold text-yellow-400">Golden Care</NavLink>, a platform dedicated to enhancing the lives of senior citizens through innovative healthcare, volunteer support, and wellness programs.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-teal-700">Our Mission</h2>
                    <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                        Our mission is to create a nurturing space where seniors can access healthcare, medication reminders, and community-driven services to enhance their quality of life.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-xl w-full max-w-lg" />
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white py-12 px-6 text-center shadow-lg">
                <h2 className="text-4xl font-bold text-teal-700">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
                    {['Comprehensive Healthcare', 'Telemedicine & Exercise Routines', 'Volunteer & Community Support', 'User-Friendly & Accessible'].map((item, index) => (
                        <div key={index} className="bg-teal-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-teal-800">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Team Section */}
            <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <img src={teamImage} alt="Our Team" className="rounded-lg shadow-xl w-full max-w-lg" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-teal-700">Meet Our Team</h2>
                    <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                        Our dedicated team consists of healthcare professionals, software engineers, and volunteers who work tirelessly to make elderly care more accessible and effective.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;