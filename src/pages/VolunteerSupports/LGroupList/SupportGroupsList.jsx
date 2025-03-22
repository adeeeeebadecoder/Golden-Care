import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Fix: Import useNavigate

const supportGroups = [
    {
        name: "Elderly Assistance Network",
        services: "Home visits, legal support, and mental health counseling.",
        contact: "help@elderlyassist.net | +1 987 654 321",
        location: "Los Angeles, USA",
    },
    {
        name: "Happy Aging Club",
        services: "Recreational activities, yoga sessions, social gatherings.",
        contact: "contact@happyaging.org | +1 789 123 456",
        location: "San Francisco, USA",
    },
    {
        name: "Golden Years Community",
        services: "Social events, wellness programs, volunteer support.",
        contact: "goldenyears@gmail.com | +1 567 890 234",
        location: "Houston, USA",
    },
];

const SupportGroupsList = () => {
    const navigate = useNavigate(); // ✅ Fix: Initialize navigate

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">List of Local Support Groups</h2>

            <div className="space-y-4">
                {supportGroups.map((group, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
                        <h3 className="font-semibold text-blue-600">{group.name}</h3>
                        <p className="text-gray-600"><strong>Services:</strong> {group.services}</p>
                        <p className="text-gray-600"><strong>Location:</strong> {group.location}</p>
                        <p className="text-gray-600"><strong>Contact:</strong> {group.contact}</p>
                    </div>
                ))}
            </div>

            {/* ✅ Fix: useNavigate added to Go Back button */}
            <button
                onClick={() => navigate(-1)}
                className="mt-4 w-full font-bold bg-gray-200 text-teal-700 p-2 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
            >
                Go Back
            </button>
        </div>
    );
};

export default SupportGroupsList;
