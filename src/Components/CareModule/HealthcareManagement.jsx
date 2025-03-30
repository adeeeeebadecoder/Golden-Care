// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaPills, FaUserMd, FaDumbbell } from 'react-icons/fa';

// const features = [
//     { path: "medication", icon: FaPills, title: 'Medication Reminder', description: 'Receive medication reminders to stay on track with your prescriptions.' },
//     { path: "consultation", icon: FaUserMd, title: 'Doctor Consultation', description: 'Schedule appointments and get doctor information easily.' },
//     { path: "exercise-nutrition", icon: FaDumbbell, title: 'Exercise & Nutrition', description: 'Get workout routines and diet plans tailored for seniors.' },
// ];

// const HealthcareManagement = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     return (
//         <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//             <h2 className="text-3xl font-bold text-center mt-10 text-teal-600 mb-6">HealthCare Management</h2>

//             <div className="container mx-auto px-4 py-10 h-[320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {features.map((feature, index) => {
//                     const isActive = location.pathname.includes(`/care/healthcare/${feature.path}`);

//                     return (
//                         <div
//                             key={index}
//                             className={`p-6 rounded-lg mt-12 shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300
//                                 ${isActive ? "bg-teal-100 border border-teal-500" : "bg-white hover:bg-gray-100"}`}
//                             onClick={() => navigate(`/care/healthcare/${feature.path}`)}
//                         >
//                             {React.createElement(feature.icon, { className: `text-4xl ${isActive ? "text-teal-700" : "text-blue-600"} mb-3` })}
//                             <h3 className="text-2xl font-semibold">{feature.title}</h3>
//                             <p className="mt-2 text-gray-700">{feature.description}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default HealthcareManagement;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPills, FaUserMd, FaDumbbell } from 'react-icons/fa';

const features = [
    { path: "consultation", icon: FaUserMd, title: 'Doctor Consultation', description: 'Schedule appointments and get doctor information easily.' },
    { path: "medication", icon: FaPills, title: 'Medication Reminder', description: 'Receive medication reminders to stay on track with your prescriptions.' },
    { path: "exercise-nutrition", icon: FaDumbbell, title: 'Exercise & Nutrition', description: 'Get workout routines and diet plans tailored for seniors.' },
];

const HealthcareManagement = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-600 mb-8 underline">HealthCare Management</h2>

            {/* ✅ Responsive Grid Layout */}
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const isActive = location.pathname.includes(`/care/healthcare/${feature.path}`);

                    return (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300
                                ${isActive ? "bg-teal-100 border border-teal-500" : "bg-white hover:bg-gray-100"}`}
                            onClick={() => navigate(`/care/healthcare/${feature.path}`)}
                        >
                            {React.createElement(feature.icon, { className: `text-4xl ${isActive ? "text-teal-700" : "text-blue-600"} mb-3` })}
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HealthcareManagement;
