// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const DoctorConsultation = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         patientName: "",
//         doctorName: "",
//         appointmentDate: "",
//         appointmentTime: "",
//         contactNumber: "",
//     });

//     const [clinics] = useState([
//         { name: "City Health Clinic", address: "123 Main St, NY", phone: "555-1234" },
//         { name: "Sunrise Hospital", address: "456 Elm St, NY", phone: "555-5678" },
//         { name: "Green Valley Care", address: "789 Pine St, NY", phone: "555-9012" },
//     ]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!formData.patientName || !formData.doctorName || !formData.appointmentDate || !formData.appointmentTime) {
//             alert("Please fill all required fields!");
//             return;
//         }

//         console.log("Appointment Scheduled:", formData);
//         alert(`Appointment scheduled successfully with Dr. ${formData.doctorName}!`);

//         setFormData({
//             patientName: "",
//             doctorName: "",
//             appointmentDate: "",
//             appointmentTime: "",
//             contactNumber: "",
//         });
//     };

//     return (
//         <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//             <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Schedule a Telemedicine Appointment</h2>

//             <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* Patient Name */}
//                 <div>
//                     <label className="block text-gray-700 font-medium">Patient Name:</label>
//                     <input
//                         type="text"
//                         name="patientName"
//                         value={formData.patientName}
//                         onChange={handleChange}
//                         placeholder="Enter your name"
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Doctor Name */}
//                 <div>
//                     <label className="block text-gray-700 font-medium">Select Doctor:</label>
//                     <input
//                         type="text"
//                         name="doctorName"
//                         value={formData.doctorName}
//                         onChange={handleChange}
//                         placeholder="Enter doctor's name"
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Appointment Date */}
//                 <div>
//                     <label className="block text-gray-700 font-medium">Appointment Date:</label>
//                     <input
//                         type="date"
//                         name="appointmentDate"
//                         value={formData.appointmentDate}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Appointment Time */}
//                 <div>
//                     <label className="block text-gray-700 font-medium">Appointment Time:</label>
//                     <input
//                         type="time"
//                         name="appointmentTime"
//                         value={formData.appointmentTime}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
//                         required
//                     />
//                 </div>

//                 {/* Contact Number */}
//                 <div>
//                     <label className="block text-gray-700 font-medium">Contact Number (Optional):</label>
//                     <input
//                         type="tel"
//                         name="contactNumber"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                         placeholder="Enter contact number"
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition duration-300 shadow-md"
//                 >
//                     Schedule Appointment
//                 </button>
//             </form>

//             {/* List of Clinics & Hospitals */}
//             <h3 className="text-xl font-semibold text-teal-700 mt-8">Clinics & Hospitals</h3>
//             <ul className="mt-3 space-y-3">
//                 {clinics.map((clinic, index) => (
//                     <li key={index} className="p-3 border rounded-md shadow-sm bg-gray-50">
//                         <p className="font-semibold">{clinic.name}</p>
//                         <p className="text-gray-600">{clinic.address}</p>
//                         <p className="text-gray-500">📞 {clinic.phone}</p>
//                     </li>
//                 ))}
//             </ul>

//             {/* Go Back Button */}
//             <button
//                 onClick={() => navigate(-1)}
//                 className="mt-4 w-full font-bold bg-gray-200 text-teal-700 p-2 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
//             >
//                 Go Back
//             </button>
//         </div>
//     );
// };

// export default DoctorConsultation;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DoctorConsultation = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        patientName: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
        contactNumber: "",
    });

    const [clinics, setClinics] = useState([]);
    const [doctors, setDoctors] = useState([]);

    // Fetch clinics from backend
    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/clinics");
                setClinics(response.data);
            } catch (error) {
                console.error("Error fetching clinics:", error);
            }
        };

        const fetchDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/doctors");
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        fetchClinics();
        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!formData.patientName || !formData.doctorName || !formData.appointmentDate || !formData.appointmentTime) {
    //         alert("Please fill all required fields!");
    //         return;
    //     }

    //     try {
    //         await axios.post("http://localhost:5000/api/appointments", formData);
    //         alert(`Appointment scheduled successfully with Dr. ${formData.doctorName}!`);
    //         setFormData({
    //             patientName: "",
    //             doctorName: "",
    //             appointmentDate: "",
    //             appointmentTime: "",
    //             contactNumber: "",
    //         });
    //     } catch (error) {
    //         console.error("Error scheduling appointment:", error);
    //         alert("Failed to schedule appointment. Please try again.");
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.patientName || !formData.doctorName || !formData.appointmentDate || !formData.appointmentTime) {
            alert("Please fill all required fields!");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in to book an appointment!");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/appointments", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            alert(`Appointment scheduled successfully with Dr. ${formData.doctorName}!`);
            setFormData({ patientName: "", doctorName: "", appointmentDate: "", appointmentTime: "", contactNumber: "" });
        } catch (error) {
            console.error("Error scheduling appointment:", error);
            alert("Failed to schedule appointment. Please try again.");
        }
    };



    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Schedule a Telemedicine Appointment</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-gray-700 font-medium">Patient Name:</label>
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Select Doctor:</label>
                    <select
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
                        required
                    >
                        <option value="">Select a Doctor</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.name}>
                                {doctor.name} - {doctor.specialty}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Appointment Date:</label>
                    <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Appointment Time:</label>
                    <input
                        type="time"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
                        required
                    />
                </div>

                <div className="flex justify-evenly items-center gap-5 w-full">
                    <button
                        type="submit"
                        className="w-[12rem] mt-4 bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition duration-300 shadow-sm"
                    >
                        Schedule Appointment
                    </button>

                    {/* Go Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mt-4 w-1/4 font-bold bg-gray-200 text-teal-700 p-2 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
                    >
                        Go Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DoctorConsultation;
