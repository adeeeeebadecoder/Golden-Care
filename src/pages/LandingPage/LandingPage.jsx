import React from 'react';
import {
    FaUserFriends,
    FaMedkit,
    FaDumbbell,
    FaUsers,
    FaHandsHelping,
    FaUtensils,
    FaBirthdayCake,
    FaExclamationTriangle,
    FaTags,
} from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-200 text-teal-900">
            <div className="text-center mt-2 py-10 text-black">
                <h1 className="text-4xl font-bold mt-6">Welcome to Golden Care</h1>
                <p className="text-lg mt-4">Your Elderly Assistance Platform</p>
            </div>

            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <feature.icon className="text-4xl font-bold text-blue-600" />
                        <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
                        <p className="mt-2 text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>

            <footer className="bg-teal-700 text-white py-6 text-center mt-10">
                <h3 className="text-xl font-semibold">Contact Us</h3>
                <p>Email: support@goldencare.com</p>
                <p>Phone: +91 1213232322121</p>
                <p>Address: Hyderabad</p>
            </footer>
        </div>
    );
};

const features = [
    { icon: FaMedkit, title: 'Medical Support', description: 'Receive medication reminders and health tips.' },
    { icon: FaDumbbell, title: 'Health & Fitness', description: 'Explore health blogs, diet tips, and yoga resources.' },
    { icon: FaUsers, title: 'Volunteer Assistance', description: 'Volunteers can help and connect with the elderly.' },
    { icon: FaUtensils, title: 'Home Care Services', description: 'NGOs provide cooking, washing, and home assistance.' },
    { icon: FaExclamationTriangle, title: 'Fall Detection', description: 'Monitor falls with advanced detection systems.' },
    { icon: FaTags, title: 'Special Discounts', description: 'Enjoy exclusive offers from local businesses.' }
];

export default LandingPage;

