import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const CareModule = () => {
    return (
        <div className="container p-5 bg-gray-100 mt-12 mx-auto">
            <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Care Module</h1>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mb-4">
                <NavLink to="healthcare" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700">
                    Healthcare Management
                </NavLink>
                <NavLink to="volunteer" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-700">
                    Volunteer & Support Services
                </NavLink>
            </div>

            {/* Page Content */}
            <Outlet />
        </div>
    );
};

export default CareModule;
