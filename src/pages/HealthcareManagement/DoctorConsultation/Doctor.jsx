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

        const token = localStorage.getItem("token"); // ✅ Correct way
        console.log(token);

        try {
            await axios.post("http://localhost:5000/api/appointments", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,  // ✅ Must be Bearer + token
                },
            });

            alert(`Appointment scheduled successfully with ${formData.doctorName}!`);
            setFormData({
                patientName: "",
                doctorName: "",
                appointmentDate: "",
                appointmentTime: "",
                contactNumber: ""
            });
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
