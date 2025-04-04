// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//     const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage
//     const location = useLocation();

//     if (!user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const token = localStorage.getItem("token");

    console.log("ProtectedRoute: User data:", user);
    console.log("ProtectedRoute: Token exists:", !!token);
    console.log("ProtectedRoute: Allowed roles:", allowedRoles);

    if (!user || !token) {
        console.warn("ProtectedRoute: No user or token found. Redirecting to login.");
        return <Navigate to="/login" />;
    }

    const userRole = user?.role;

    if (!userRole) {
        console.warn("ProtectedRoute: Missing user role.");
        return <Navigate to="/unauthorized" />;
    }

    // Ensure both sides are arrays for flexible matching
    const userRoles = Array.isArray(userRole) ? userRole : [userRole];

    const hasAccess = userRoles.some(role => allowedRoles.includes(role));

    if (!hasAccess) {
        console.warn("ProtectedRoute: Access denied for role:", userRoles);
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
