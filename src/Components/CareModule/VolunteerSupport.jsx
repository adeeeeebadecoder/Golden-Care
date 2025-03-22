// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { FaMedkit, FaUsers, FaHandsHelping } from 'react-icons/fa';

// const features = [
//     { path: 'groups', icon: FaUsers, title: 'Associated Groups', description: 'Find and connect with local senior support groups.' },
//     { path: 'NGOs', icon: FaHandsHelping, title: 'Associated NGOs', description: 'Explore NGOs offering senior citizen assistance.' },
//     // { path: 'medical', icon: FaMedkit, title: 'Medical Assistance', description: 'Receive medication reminders and health support.' },
// ];

// const VolunteerSupport = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     return (
//         <div className="container mx-auto p-6 bg-gray-50 rounded shadow-md">
//             <h2 className="text-3xl font-bold text-center mt-10 mb-12 text-teal-600 mb-6">Volunteer & Support Services</h2>

//             <div className="container mx-auto px-4 py-6 h-[20rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {features.map((feature, index) => {
//                     const isActive = location.pathname.endsWith(`/care/volunteer/${feature.path}`);

//                     return (
//                         <div
//                             key={index}
//                             className={`p-6 rounded-lg mt-12  shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300 ${isActive ? 'bg-teal-100 border border-teal-500' : 'bg-white hover:bg-gray-100'
//                                 }`}
//                             onClick={() => navigate(`/care/volunteer/${feature.path}`)}
//                         >
//                             {React.createElement(feature.icon, { className: `text-4xl ${isActive ? 'text-teal-700' : 'text-blue-600'} mb-3` })}
//                             <h3 className="text-2xl font-semibold">{feature.title}</h3>
//                             <p className="mt-2 text-gray-700">{feature.description}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default VolunteerSupport;


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUsers, FaHandsHelping } from 'react-icons/fa';

const features = [
    { path: 'groups', icon: FaUsers, title: 'Associated Groups', description: 'Find and connect with local senior support groups.' },
    { path: 'NGOs', icon: FaHandsHelping, title: 'Associated NGOs', description: 'Explore NGOs offering senior citizen assistance.' },
];

const VolunteerSupport = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="container mx-auto p-6">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-600 mb-8 underline">
                Volunteer & Support Services
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const isActive = location.pathname.includes(feature.path);

                    return (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300 
                                ${isActive ? "bg-teal-100 border border-teal-500" : "bg-white hover:bg-gray-100"}`}
                            onClick={() => navigate(`/care/volunteer/${feature.path}`)}
                        >
                            {React.createElement(feature.icon, { className: `text-4xl ${isActive ? "text-teal-700" : "text-blue-600"} mb-3` })}
                            <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm sm:text-base">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VolunteerSupport;
