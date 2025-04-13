// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import DashboardMessages from "./Contact/Dashboard";
// import { LoginContext } from "../context/AuthContext";

// const Dashboard = () => {
//     const navigate = useNavigate();
//     const { loginData, setLoginData } = useContext(LoginContext)
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     // fetch appointments

//     // Fetch user's appointments
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const res = await axios.get("http://localhost:5000/api/appointments", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 setAppointments(res?.data);
//             } catch (error) {
//                 console.error("Error fetching appointments:", error.response?.data || error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAppointments();
//     }, []);
//     const userAppointments = appointments?.filter((appoin) => (appoin?.userId === loginData?._id));

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         navigate("/login");
//     };

//     if (loading) return <p className="text-center text-gray-600">Loading...</p>;

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//                 <h2 className="text-3xl font-bold text-teal-600 text-center">
//                     Welcome, {loginData?.name || "User"}
//                 </h2>
//                 <p className="text-gray-700 text-center mb-6">Role: {loginData?.role || "N/A"}</p>

//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Your Appointments</h3>
//                     {appointments.length > 0 ? (
//                         <ul className="space-y-3">
//                             {userAppointments?.map((appt) => (
//                                 <li
//                                     key={appt._id}
//                                     className="p-4 bg-gray-50 rounded-lg border border-gray-200"
//                                 >
//                                     <p><strong>Doctor:</strong> {appt?.doctorName}</p>
//                                     <p><strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleDateString()}</p>
//                                     <p><strong>Time:</strong> {appt.appointmentTime}</p>
//                                     <p><strong>Status:</strong> {appt.appointmentStatus}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-500">No appointments yet.</p>
//                     )}
//                 </div>

//                 {/* Reminder Section */}
//                 <div className="mt-8">
//                     <h3 className="text-xl font-semibold mb-2">Reminders</h3>
//                     {/* <ul className="space-y-3">
//                         <li className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
//                             <p><strong>Task:</strong> Take your blood pressure medicine</p>
//                             <p><strong>Time:</strong> 9:00 AM</p>
//                         </li>
//                         <li className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
//                             <p><strong>Task:</strong> Follow-up with Dr. Smith</p>
//                             <p><strong>Due Date:</strong> {new Date().toLocaleDateString()}</p>
//                         </li>
//                     </ul> */}
//                 </div>

//                 {/* Logout Button */}
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




import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/AuthContext";

const Dashboard = () => {
    const navigate = useNavigate();
    const { loginData } = useContext(LoginContext);
    const [appointments, setAppointments] = useState([]);
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch user's appointments
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/appointments", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAppointments(res?.data);
            } catch (error) {
                console.error("Error fetching appointments:", error.response?.data || error.message);
            }
        };

        const fetchReminders = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/reminders", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setReminders(res?.data);
            } catch (error) {
                console.error("Error fetching reminders:", error.response?.data || error.message);
            }
        };

        fetchAppointments();
        fetchReminders();
        setLoading(false);
    }, []);

    const userAppointments = appointments?.filter(
        (appointment) => appointment?.userId === loginData?._id
    );

    const userReminders = reminders?.filter((reminder) => reminder?.userId === loginData?._id)
    console.log("rem", reminders);
    console.log("user", userReminders);

    // Function to toggle reminder status
    const toggleReminderStatus = async (reminderId, currentStatus) => {
        try {
            const newStatus = currentStatus === "active" ? "inactive" : "active";
            await axios.patch(`http://localhost:5000/api/reminders/${reminderId}`, {
                status: newStatus,
            });
            setReminders((prevReminders) =>
                prevReminders.map((reminder) =>
                    reminder._id === reminderId
                        ? { ...reminder, status: newStatus }
                        : reminder
                )
            );
        } catch (error) {
            console.error("Error updating reminder status:", error.response?.data || error.message);
        }
    };

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
                    Welcome, {loginData?.name || "User"}
                </h2>
                <p className="text-gray-700 text-center mb-6">Role: {loginData?.role || "N/A"}</p>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Your Appointments</h3>
                    {appointments.length > 0 ? (
                        <ul className="space-y-3">
                            {userAppointments?.map((appt) => (
                                <li key={appt._id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <p><strong>Doctor:</strong> {appt?.doctorName}</p>
                                    <p><strong>Date:</strong> {new Date(appt.appointmentDate).toLocaleDateString()}</p>
                                    <p><strong>Time:</strong> {appt.appointmentTime}</p>
                                    <p><strong>Status:</strong> {appt.appointmentStatus}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No appointments yet.</p>
                    )}
                </div>

                {/* Reminder Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Your Reminders</h3>
                    {Array.isArray(userReminders) && userReminders?.length > 0 ? (
                        <ul className="space-y-3">
                            {Array.isArray(userReminders) && userReminders?.map((reminder) => {
                                
                                <li key={reminder._id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <p><strong>Medicine Name:</strong> {reminder?.medicineName}</p>
                                    <p><strong>Dosage:</strong> {reminder?.dosage}</p>
                                    <p><strong>Frequency:</strong> {reminder?.frequency}</p>
                                    <p><strong>Date:</strong> {new Date(reminder?.date).toLocaleDateString()}</p>
                                    <p><strong>Time:</strong> {reminder?.time}</p>
                                    <p><strong>Status:</strong> {reminder?.status}</p>
                                </li>

                            })}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No reminders set yet.</p>
                    )}
                </div>

                {/* Logout Button */}
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
