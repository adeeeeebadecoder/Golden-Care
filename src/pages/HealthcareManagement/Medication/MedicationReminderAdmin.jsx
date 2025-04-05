import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MedicationReminderAdmin = () => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [formData, setFormData] = useState({
        medicineName: '',
        time: '',
        dosage: '',
        notes: '',
        reminderMethod: ''
    });

    useEffect(() => {
        const role = localStorage.getItem('role');
        setIsAdmin(role === 'admin');
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.reminderMethod) {
            alert('Please select a reminder method.');
            return;
        }

        const payload = {
            ...formData,
            role: 'admin',
            createdBy: localStorage.getItem('email') || 'admin@example.com'
        };

        try {
            await axios.post('http://localhost:5000/api/reminders', payload);
            alert('Reminder set successfully!');
            setFormData({ medicineName: '', time: '', dosage: '', notes: '', reminderMethod: '' });
        } catch (error) {
            console.error(error);
            alert('Failed to set reminder.');
        }
    };

    if (!isAdmin) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-lg">
                ❌ Access Denied – Only Admins Can Set Reminders
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Set a Medication Reminder</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {['medicineName', 'time', 'dosage', 'notes'].map((field) => (
                    <div key={field}>
                        <label htmlFor={field} className="block text-gray-700 font-medium capitalize">
                            {field.replace(/([A-Z])/g, ' $1')}:
                        </label>
                        {field !== 'notes' ? (
                            <input
                                type={field === 'time' ? 'time' : 'text'}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required={field !== 'notes'}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
                            />
                        ) : (
                            <textarea
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
                            />
                        )}
                    </div>
                ))}

                {/* Reminder Method */}
                <div>
                    <label htmlFor="reminderMethod" className="block text-gray-700 font-medium">Reminder Method:</label>
                    <select
                        id="reminderMethod"
                        name="reminderMethod"
                        value={formData.reminderMethod}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
                    >
                        <option value="">Select a method</option>
                        <option value="SMS">SMS</option>
                        <option value="Email">Email</option>
                        <option value="Voice Call">Voice Call</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
                >
                    Set Reminder
                </button>
            </form>

            <button
                onClick={() => navigate(-1)}
                className="mt-4 w-full text-teal-600 hover:underline"
            >
                ← Go Back
            </button>
        </div>
    );
};

export default MedicationReminderAdmin;
