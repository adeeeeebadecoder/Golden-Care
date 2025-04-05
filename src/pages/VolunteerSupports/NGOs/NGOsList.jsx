import React from "react";
import { useNavigate } from "react-router-dom";

const ngos = [
    {
        name: "Senior Care Foundation",
        services: "Medical aid, companionship programs, wellness activities.",
        contact: "info@seniorcare.org | +1 234 567 890",
        location: "New York, USA",
    },
    {
        name: "Golden Hearts NGO",
        services: "Meal deliveries, financial aid, emergency support.",
        contact: "goldenhearts@gmail.com | +1 456 789 123",
        location: "Chicago, USA",
    },
    {
        name: "Hope for Seniors",
        services: "Free medical checkups, mental health support, legal aid.",
        contact: "hopeforseniors@gmail.com | +1 654 321 789",
        location: "Boston, USA",
    },
];

const NGOsList = () => {
    const navigate = useNavigate(); 

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-red-600 mb-6">List of NGOs Supporting Seniors</h2>

            <div className="space-y-4">
                {ngos.map((ngo, index) => (
                    <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
                        <h3 className="font-semibold text-red-600">{ngo.name}</h3>
                        <p className="text-gray-600"><strong>Services:</strong> {ngo.services}</p>
                        <p className="text-gray-600"><strong>Location:</strong> {ngo.location}</p>
                        <p className="text-gray-600"><strong>Contact:</strong> {ngo.contact}</p>
                    </div>
                ))}
            </div>

            {/* ✅ Fix: `useNavigate` works correctly now */}
            <button
                onClick={() => navigate(-1)}
                className="mt-4 w-full font-bold bg-gray-200 text-teal-700 p-2 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
            >
                Go Back
            </button>
        </div>
    );
};

export default NGOsList;
