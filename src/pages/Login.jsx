import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // Default role
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const location = useLocation();
    const { setLoginData } = useContext(LoginContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password || !role) {
            setError("All fields are required.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password, role },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(response);

            if (response.data?.accessToken) {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setLoginData(response.data.user);

                // const from = location.state?.from?.pathname || "/";
                toast.success(`Login Successful! Welcome ${response.data.user.role}`);
                // navigate(from);

                let redirectPath = "/";
                if (response.data.user.role === "admin") {
                    redirectPath = "/admin";
                } else if (response.data.user.role === "doctor") {
                    redirectPath = "/doctor/dashboard";
                } else if (response.data.user.role === "user") {
                    redirectPath = "/";
                }
                else {
                    redirectPath = "/userProfile"; // or just "/"
                }
                toast.success(`Login Successful! Welcome ${response.data.user.role}`);
                navigate(redirectPath);
            } else {
                setError("Invalid login response. Please try again.");
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
            console.log(err);

            toast.error(errorMessage);
            setError(errorMessage);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            navigate(`/${user.role}/dashboard`);
        }
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-teal-600">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        >
                            <option value="" disabled>Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Don't have an account?{" "}
                    <NavLink to="/signup" className="text-teal-600 font-bold">
                        Sign up
                    </NavLink>
                </p>
                <p className="text-center mt-2">
                    <NavLink to="/forgot-password" className="text-blue-500">
                        Forgot Password?
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
