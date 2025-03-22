// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MedicationReminder = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [formData, setFormData] = useState({
//     medicineName: '',
//     time: '',
//     dosage: '',
//     notes: '',
//     reminderMethod: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.reminderMethod) {
//       alert("Please select a reminder method.");
//       return;
//     }

//     console.log('Reminder Set:', formData);
//     alert(`Medication Reminder Set Successfully via ${formData.reminderMethod}!`);

//     setFormData({ medicineName: '', time: '', dosage: '', notes: '', reminderMethod: '' });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//       <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Set a Medication Reminder</h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Medicine Name */}
//         <div>
//           <label htmlFor="medicineName" className="block text-gray-700 font-medium">Medicine Name:</label>
//           <input
//             type="text"
//             id="medicineName"
//             name="medicineName"
//             value={formData.medicineName}
//             onChange={handleChange}
//             placeholder="Enter medicine name"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
//             required
//           />
//         </div>

//         {/* Time */}
//         <div>
//           <label htmlFor="time" className="block text-gray-700 font-medium">Time:</label>
//           <input
//             type="time"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
//             required
//           />
//         </div>

//         {/* Dosage */}
//         <div>
//           <label htmlFor="dosage" className="block text-gray-700 font-medium">Dosage:</label>
//           <input
//             type="text"
//             id="dosage"
//             name="dosage"
//             value={formData.dosage}
//             onChange={handleChange}
//             placeholder="e.g., 2 tablets"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
//           />
//         </div>

//         {/* Additional Notes */}
//         <div>
//           <label htmlFor="notes" className="block text-gray-700 font-medium">Additional Notes:</label>
//           <textarea
//             id="notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             placeholder="Any additional notes (optional)"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
//           ></textarea>
//         </div>

//         {/* Reminder Method Selection */}
//         <div>
//           <label htmlFor="reminderMethod" className="block text-gray-700 font-medium">Reminder Method:</label>
//           <select
//             id="reminderMethod"
//             name="reminderMethod"
//             value={formData.reminderMethod}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-200"
//             required
//           >
//             <option value="">Select a method</option>
//             <option value="SMS">SMS</option>
//             <option value="Email">Email</option>
//             <option value="Voice Call">Voice Call</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition duration-300 shadow-md"
//         >
//           Set Reminder
//         </button>
//       </form>

//       {/* Go Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mt-4 w-full text-teal-600 hover:underline"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default MedicationReminder;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicationReminder = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    medicineName: '',
    time: '',
    dosage: '',
    notes: '',
    reminderMethod: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.medicineName.trim()) {
      alert('Please enter the medicine name.');
      return;
    }
    if (!formData.time) {
      alert('Please select a time.');
      return;
    }
    if (!formData.reminderMethod) {
      alert('Please select a reminder method.');
      return;
    }

    console.log('Reminder Set:', formData);
    alert(`Medication Reminder Set Successfully via ${formData.reminderMethod}!`);

    // Reset form
    setFormData({
      medicineName: '',
      time: '',
      dosage: '',
      notes: '',
      reminderMethod: ''
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Set a Medication Reminder</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Medicine Name */}
        <div>
          <label htmlFor="medicineName" className="block text-gray-700 font-medium">Medicine Name:</label>
          <input
            type="text"
            id="medicineName"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleChange}
            placeholder="Enter medicine name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-gray-700 font-medium">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
            required
          />
        </div>

        {/* Dosage */}
        <div>
          <label htmlFor="dosage" className="block text-gray-700 font-medium">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            placeholder="e.g., 2 tablets"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-gray-700 font-medium">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional notes (optional)"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
          ></textarea>
        </div>

        {/* Reminder Method Selection */}
        <div>
          <label htmlFor="reminderMethod" className="block text-gray-700 font-medium">Reminder Method:</label>
          <select
            id="reminderMethod"
            name="reminderMethod"
            value={formData.reminderMethod}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-300 outline-none"
            required
          >
            <option value="">Select a method</option>
            <option value="SMS">SMS</option>
            <option value="Email">Email</option>
            <option value="Voice Call">Voice Call</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700 transition duration-300 shadow-md"
        >
          Set Reminder
        </button>
      </form>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-4 w-full font-bold bg-gray-200 text-teal-700 p-2 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
      >
        Go Back
      </button>
    </div>
  );
};

export default MedicationReminder;
