// import React from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import { FaPills, FaUserMd } from 'react-icons/fa';



// const features = [
//     { path: "healthcare", icon: FaPills, title: 'Healthcare Management', description: 'Receive medication reminders to stay on track with your prescriptions.' },
//     { path: "volunteer", icon: FaUserMd, title: 'Volunteer & Support Services', description: 'Schedule appointments and get doctor information easily.' },
// ];

// const CareModule = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     return (
//         <div className="container mx-auto  mt-12 rounded shadow-lg">
//             <h1 className="text-6xl font-bold text-center text-teal-600 mb-8 underline">CARE MODULE</h1>


//             {/* Features Section with Active State Handling */}
//             <div className="container mx-auto px-4 h-[20rem] py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {features.map((feature, index) => {
//                     const isActive = location.pathname.includes(feature.path);
//                     return (
//                         <div
//                             key={index}
//                             className={`p-6 rounded-lg shadow-md leading-12 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300 ${isActive ? "bg-teal-100 border border-teal-500" : "bg-white hover:bg-gray-100"
//                                 }`}
//                             onClick={() => navigate(feature.path)}
//                         >
//                             {React.createElement(feature.icon, { className: `text-5xl ${isActive ? "text-teal-700" : "text-blue-600"} mb-3` })}
//                             <h3 className="text-2xl font-bold">{feature.title}</h3>
//                             <p className="mt-2 text-gray-700">{feature.description}</p>
//                         </div>
//                     );
//                 })}
//             </div>

//             {/* Page Content */}
//             <div className="mt-6">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default CareModule;
import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { FaPills, FaUserMd } from 'react-icons/fa';

const features = [
    { path: "healthcare", icon: FaPills, title: 'Healthcare Management', description: 'Receive medication reminders to stay on track with your prescriptions.' },
    { path: "volunteer", icon: FaUserMd, title: 'Volunteer & Support Services', description: 'Schedule appointments and get doctor information easily.' },
];

const CareModule = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="container mx-auto mt-8 px-4">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-teal-600 mb-8 underline">
                CARE MODULE
            </h1>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => {
                    const isActive = location.pathname.includes(feature.path);

                    return (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition duration-300 
                                ${isActive ? "bg-teal-100 border border-teal-500" : "bg-white hover:bg-gray-100"}`}
                            onClick={() => navigate(feature.path)}
                        >
                            {React.createElement(feature.icon, { className: `text-5xl ${isActive ? "text-teal-700" : "text-blue-600"} mb-3` })}
                            <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm sm:text-base">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Page Content */}
            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    );
};

export default CareModule;

