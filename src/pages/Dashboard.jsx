// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     console.error("No token found!");
//                     navigate("/login");
//                     return;
//                 }

//                 const response = await axios.get("http://localhost:5000/api/user/profile", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 setUser(response.data);
//             } catch (error) {
//                 console.error("Error fetching user:", error.response?.data || error.message);
//                 navigate("/login");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUser();
//     }, [navigate]);

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         navigate("/login");
//     };

//     if (loading) {
//         return <p className="text-center text-gray-600">Loading...</p>;
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//                 <h2 className="text-3xl font-bold text-teal-600 text-center">
//                     Welcome, {user?.name || "User"}
//                 </h2>
//                 <p className="text-gray-700 text-center">Role: {user?.role || "N/A"}</p>

//                 <button
//                     onClick={handleLogout}
//                     className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user profile
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await axios.get("http://localhost:5000/api/user/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error.response?.data || error.message);
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    // Fetch user's appointments
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/appointments/my", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setAppointments(res.data);
            } catch (error) {
                console.error("Error fetching appointments:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-teal-600 text-center">
                    Welcome, {user?.name || "User"}
                </h2>
                <p className="text-gray-700 text-center mb-6">Role: {user?.role || "N/A"}</p>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Your Appointments</h3>
                    {appointments.length > 0 ? (
                        <ul className="space-y-3">
                            {appointments.map((appt) => (
                                <li
                                    key={appt._id}
                                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                                >
                                    <p><strong>Doctor:</strong> {appt.doctor?.name}</p>
                                    <p><strong>Date:</strong> {new Date(appt.date).toLocaleDateString()}</p>
                                    <p><strong>Time:</strong> {appt.time}</p>
                                    <p><strong>Status:</strong> {appt.status}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No appointments yet.</p>
                    )}
                </div>

                <button
                    onClick={handleLogout}
                    className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
