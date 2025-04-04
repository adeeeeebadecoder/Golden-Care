// import { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = ({ role }) => {
//     const [appointments, setAppointments] = useState([]);

//     // useEffect(() => {
//     //     const fetchAppointments = async () => {
//     //         const token = localStorage.getItem("token");
//     //         const url = role === "admin"
//     //             ? "http://localhost:5000/api/appointments/admin"
//     //             : "http://localhost:5000/api/appointments/doctor";

//     //         const res = await axios.get(url, {
//     //             headers: { Authorization: `Bearer ${token}` }
//     //         });
//     //         setAppointments(res.data);
//     //     };
//     //     fetchAppointments();
//     // }, [role]);

//     // const updateStatus = async (id, status) => {
//     //     const token = localStorage.getItem("token");
//     //     try {
//     //         await axios.put(`http://localhost:5000/api/appointments/${id}/status`, { status }, {
//     //             headers: { Authorization: `Bearer ${token}` }
//     //         });
//     //         alert("Appointment status updated!");
//     //         setAppointments(appointments.map(app =>
//     //             app._id === id ? { ...app, appointmentStatus: status } : app
//     //         ));
//     //     } catch (error) {
//     //         console.error("Error updating status:", error);
//     //         alert("Failed to update status.");
//     //     }
//     // };
//     const BASE_URL = "http://localhost:5000/api/appointments"; // Your backend URL

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const token = localStorage.getItem("token");
//             const url = role === "admin"
//                 ? `${BASE_URL}/admin`
//                 : `${BASE_URL}/doctor`;

//             const res = await axios.get(url, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setAppointments(res.data);
//         };
//         fetchAppointments();
//     }, [role]);

//     const updateStatus = async (id, status) => {
//         const token = localStorage.getItem("token");
//         try {
//             await axios.put(`${BASE_URL}/${id}/status`, { status }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             alert("Status updated successfully!");
//             setAppointments(appointments.map(app =>
//                 app._id === id ? { ...app, appointmentStatus: status } : app
//             ));
//         } catch (error) {
//             console.error("Error updating status:", error);
//             alert("Failed to update status.");
//         }
//     };

//     return (
//         <div>
//             <h2>{role === "admin" ? "Admin" : "Doctor"} Dashboard</h2>
//             <ul>
//                 {appointments.map(app => (
//                     <li key={app._id}>
//                         {app.patientName} - Dr. {app.doctorName} on {app.appointmentDate}
//                         <span className="ml-2">Status: {app.appointmentStatus}</span>

//                         {role !== "patient" && (
//                             <select
//                                 className="ml-3"
//                                 value={app.appointmentStatus}
//                                 onChange={(e) => updateStatus(app._id, e.target.value)}
//                             >
//                                 <option value="Pending">Pending</option>
//                                 <option value="Confirmed">Confirmed</option>
//                                 <option value="Completed">Completed</option>
//                                 <option value="Cancelled">Cancelled</option>
//                             </select>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorDashboard = ({ doctorId }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`http://localhost:5000/api/appointments/doctor/${doctorId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAppointments(response.data);
            } catch (error) {
                console.error("Failed to fetch doctor appointments", error);
            }
        };

        fetchAppointments();
    }, [doctorId]);

    const handleStatusChange = async (id, newStatus) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(`http://localhost:5000/api/appointments/${id}/status`, {
                status: newStatus,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            // Refresh the appointments list
            setAppointments((prev) =>
                prev.map((appt) =>
                    appt._id === id ? { ...appt, status: newStatus } : appt
                )
            );
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-teal-700">Doctor's Appointments</h2>
            <table className="w-full table-auto border">
                <thead>
                    <tr className="bg-teal-100">
                        <th className="p-2 border">Patient Name</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Time</th>
                        <th className="p-2 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 ? (
                        appointments.map((appt) => (
                            <tr key={appt._id}>
                                <td className="p-2 border">{appt.patientName}</td>
                                <td className="p-2 border">{appt.appointmentDate.split("T")[0]}</td>
                                <td className="p-2 border">{appt.appointmentTime}</td>
                                <td className="p-2 border">
                                    <select
                                        value={appt.status}
                                        onChange={(e) => handleStatusChange(appt._id, e.target.value)}
                                        className="border px-2 py-1 rounded"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Confirmed">Confirmed</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center p-4 text-gray-500">
                                No appointments found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DoctorDashboard;
