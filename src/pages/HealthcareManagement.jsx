import React from 'react';

const HealthcareManagement = () => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-teal-600">Healthcare Management Module</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><strong>Medication Reminders:</strong> Set daily reminders for medications with notifications.</li>
                <li><strong>Doctor Consultation:</strong> Schedule telemedicine appointments and manage clinics/hospitals.</li>
                <li><strong>Exercise & Nutrition:</strong> Provide daily workout routines and diet plans.</li>
            </ul>
        </div>
    );
};

export default HealthcareManagement;
