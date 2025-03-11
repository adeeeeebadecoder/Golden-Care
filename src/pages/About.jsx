import React from 'react';

const About = () => {
    return (
        <div className="p-5 mt-12 bg-gray-100  mx-auto">
            <h1 className="text-3xl font-bold text-teal-600 text-center mb-6">About Us</h1>
            <p className="text-lg text-gray-700">
                Welcome to <span className="font-bold text-teal-500">Golden Care</span>, a platform dedicated to improving the well-being of senior citizens.
                Our mission is to provide reliable healthcare management, volunteer support services, and wellness programs
                tailored to the needs of the elderly.
            </p>

            <h2 className="text-2xl font-bold text-teal-600 mt-5">Our Mission</h2>
            <p className="text-gray-700">
                We aim to create a supportive environment where seniors can access healthcare, medication reminders,
                and social services to enhance their quality of life.
            </p>

            <h2 className="text-2xl font-bold text-teal-600 mt-5">Why Choose Us?</h2>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                <li>Comprehensive healthcare management for seniors.</li>
                <li>Telemedicine appointments and exercise routines.</li>
                <li>Strong community support and volunteer programs.</li>
                <li>Simple and user-friendly interface.</li>
            </ul>

            <h2 className="text-2xl font-bold text-teal-600 mt-5">Our Team</h2>
            <p className="text-gray-700">
                Our team consists of healthcare professionals, software engineers, and volunteers dedicated
                to making senior care more accessible and effective.
            </p>
        </div>
    );
};

export default About;
