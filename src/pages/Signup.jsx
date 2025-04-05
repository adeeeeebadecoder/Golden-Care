// import React, { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { LoginContext } from "../context/AuthContext";
// import toast from "react-hot-toast";

// const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const { loginData, setLoginData } = useContext(LoginContext)
//     const handleSignup = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });

//             // Save token & user data in local storage
//             localStorage.setItem("token", response.data.accessToken);
//             localStorage.setItem("user", JSON.stringify(response.data.user));
//             setLoginData(response.data.user);
//             toast.success("SignUp successfully")
//             navigate("/");
//         } catch (err) {
//             toast.error(err.message)
//             setError(err.response?.data?.message || "Signup failed");
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-center text-teal-600">Sign Up</h2>
//                 {error && <p className="text-red-500 text-center">{error}</p>}
//                 <form onSubmit={handleSignup} className="mt-4">
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Full Name</label>
//                         <input
//                             type="text"
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                             placeholder="Enter your name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//                 <p className="text-center mt-4 text-gray-600">
//                     Already have an account? <NavLink to="/login" className="text-teal-600 font-bold">Login</NavLink>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Signup;



import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setLoginData } = useContext(LoginContext);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", {
                name,
                email,
                password,
                role,
            });
            console.log('Signup Success:', response.data);

            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setLoginData(response.data.user);
            toast.success("SignUp successful");

            // Redirect based on role
            if (response.data.user.role === "admin") {
                navigate("/admin");
            } else if (response.data.user.role === "doctor") {
                navigate("/doctor/dashboard");
            } else if (response.data.user.role === "user") {
                navigate("/");
            } else {
                navigate("/userProfile");
            }
        } catch (err) {
            toast.error(err.message);
            console.log(err);
            
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-teal-600">Sign Up</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSignup} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-teal-600 font-bold">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Signup;
