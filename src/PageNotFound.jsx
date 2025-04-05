import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 px-4">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
            <Link to="/" className="text-teal-600 hover:underline text-lg">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
