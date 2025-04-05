// import React, { useState, useEffect } from 'react';

// const MedicationReminder = () => {
//   const staticReminders = [
//     {
//       id: 1001,
//       medicineName: 'Paracetamol',
//       time: '08:00',
//       dosage: '1 tablet',
//       frequency: 'Once a day',
//       notes: 'Take after food',
//       reminderMethod: 'SMS',
//       status: 'active'
//     },
//     {
//       id: 1002,
//       medicineName: 'Vitamin D3',
//       time: '09:30',
//       dosage: '2 drops',
//       frequency: 'Twice a day',
//       notes: '',
//       reminderMethod: 'App Notification',
//       status: 'active'
//     },
//     {
//       id: 1001,
//       medicineName: 'Paracetamol',
//       time: '08:00',
//       dosage: '1 tablet',
//       frequency: 'Once a day',
//       notes: 'Take after food',
//       reminderMethod: 'SMS',
//       status: 'active'
//     },
//     {
//       id: 1002,
//       medicineName: 'Vitamin D3',
//       time: '09:30',
//       dosage: '2 drops',
//       frequency: 'Twice a day',
//       notes: '',
//       reminderMethod: 'App Notification',
//       status: 'active'
//     },
//     {
//       id: 1001,
//       medicineName: 'Paracetamol',
//       time: '08:00',
//       dosage: '1 tablet',
//       frequency: 'Once a day',
//       notes: 'Take after food',
//       reminderMethod: 'SMS',
//       status: 'active'
//     },
//     {
//       id: 1002,
//       medicineName: 'Vitamin D3',
//       time: '09:30',
//       dosage: '2 drops',
//       frequency: 'Twice a day',
//       notes: '',
//       reminderMethod: 'App Notification',
//       status: 'active'
//     },
//     {
//       id: 1001,
//       medicineName: 'Paracetamol',
//       time: '08:00',
//       dosage: '1 tablet',
//       frequency: 'Once a day',
//       notes: 'Take after food',
//       reminderMethod: 'SMS',
//       status: 'active'
//     },
//     {
//       id: 1002,
//       medicineName: 'Vitamin D3',
//       time: '09:30',
//       dosage: '2 drops',
//       frequency: 'Twice a day',
//       notes: '',
//       reminderMethod: 'App Notification',
//       status: 'active'
//     },
//     {
//       id: 1001,
//       medicineName: 'Paracetamol',
//       time: '08:00',
//       dosage: '1 tablet',
//       frequency: 'Once a day',
//       notes: 'Take after food',
//       reminderMethod: 'SMS',
//       status: 'active'
//     },
//     {
//       id: 1002,
//       medicineName: 'Vitamin D3',
//       time: '09:30',
//       dosage: '2 drops',
//       frequency: 'Twice a day',
//       notes: '',
//       reminderMethod: 'App Notification',
//       status: 'active'
//     }
//   ];

//   const [formData, setFormData] = useState({
//     medicineName: '',
//     time: '',
//     dosage: '',
//     frequency: '',
//     notes: '',
//     reminderMethod: ''
//   });

//   const [reminders, setReminders] = useState([]);
//   const [view, setView] = useState('form');

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('medicationReminders')) || [];
//     setReminders([...staticReminders, ...stored]);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { medicineName, time, dosage, frequency, reminderMethod } = formData;

//     if (!medicineName || !time || !dosage || !frequency || !reminderMethod) {
//       alert('Please fill all required fields.');
//       return;
//     }

//     const newReminder = { ...formData, id: Date.now(), status: 'active' };
//     const updatedUserReminders = [...reminders.filter(r => r.id >= 1000), newReminder]; // user reminders only
//     const updatedReminders = [...staticReminders, ...updatedUserReminders];

//     setReminders(updatedReminders);
//     localStorage.setItem('medicationReminders', JSON.stringify(updatedUserReminders));

//     alert(`✅ Reminder set successfully via ${reminderMethod}!`);
//     setFormData({
//       medicineName: '',
//       time: '',
//       dosage: '',
//       frequency: '',
//       notes: '',
//       reminderMethod: ''
//     });
//   };

//   const toggleStatus = (id) => {
//     const updatedReminders = reminders.map((reminder) =>
//       reminder.id === id
//         ? { ...reminder, status: reminder.status === 'active' ? 'inactive' : 'active' }
//         : reminder
//     );

//     const userReminders = updatedReminders.filter(r => r.id >= 1000);
//     localStorage.setItem('medicationReminders', JSON.stringify(userReminders));
//     setReminders(updatedReminders);
//   };

//   return (
//     <div className="min-h-screen bg-teal-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Medication Reminder App</h1>

//         <div className="flex justify-center gap-4 mb-6">
//           <button
//             className={`px-4 py-2 rounded-md ${view === 'form' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//             onClick={() => setView('form')}
//           >
//             Set Reminder
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${view === 'list' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//             onClick={() => setView('list')}
//           >
//             View Reminders
//           </button>
//         </div>

//         {view === 'form' ? (
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block font-medium text-gray-700">Medicine Name *</label>
//               <input
//                 type="text"
//                 name="medicineName"
//                 value={formData.medicineName}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Time *</label>
//               <input
//                 type="time"
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Dosage *</label>
//               <input
//                 type="text"
//                 name="dosage"
//                 value={formData.dosage}
//                 onChange={handleChange}
//                 placeholder="e.g., 1 tablet"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Frequency *</label>
//               <select
//                 name="frequency"
//                 value={formData.frequency}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select frequency</option>
//                 <option value="Once a day">Once a day</option>
//                 <option value="Twice a day">Twice a day</option>
//                 <option value="Three times a day">Three times a day</option>
//                 <option value="Weekly">Weekly</option>
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Additional Notes</label>
//               <textarea
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               ></textarea>
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Reminder Method *</label>
//               <select
//                 name="reminderMethod"
//                 value={formData.reminderMethod}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select method</option>
//                 <option value="SMS">SMS</option>
//                 <option value="Email">Email</option>
//                 <option value="Voice Call">Voice Call</option>
//                 <option value="App Notification">App Notification</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
//             >
//               Set Reminder
//             </button>
//           </form>
//         ) : (
//           <div>
//             {reminders.length === 0 ? (
//               <p className="text-center text-gray-500">No reminders set yet.</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {reminders.map((reminder) => (
//                   <div key={reminder.id} className={`border p-4 rounded-md shadow-sm ${reminder.status === 'inactive' ? 'bg-gray-100 opacity-70' : ''}`}>
//                     <h3 className="text-lg font-semibold text-teal-700">{reminder.medicineName}</h3>
//                     <p><strong>Time:</strong> {reminder.time}</p>
//                     <p><strong>Dosage:</strong> {reminder.dosage}</p>
//                     <p><strong>Frequency:</strong> {reminder.frequency}</p>
//                     <p><strong>Via:</strong> {reminder.reminderMethod}</p>
//                     {reminder.notes && <p className="text-sm text-gray-600 italic mt-1">Notes: {reminder.notes}</p>}
//                     <p className="mt-1">
//                       <strong>Status:</strong> {reminder.status === 'active' ? '🟢 Active' : '🔴 Inactive'}
//                     </p>
//                     <button
//                       onClick={() => toggleStatus(reminder.id)}
//                       className="mt-2 text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                     >
//                       {reminder.status === 'active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MedicationReminder;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MedicationReminderApp = () => {
  const navigate = useNavigate();

  const staticReminders = [
    {
      id: 1001,
      medicineName: 'Paracetamol',
      time: '08:00',
      dosage: '1 tablet',
      frequency: 'Once a day',
      notes: 'Take after food',
      reminderMethod: 'SMS',
      status: 'active'
    },
    {
      id: 1002,
      medicineName: 'Vitamin D3',
      time: '09:30',
      dosage: '2 drops',
      frequency: 'Twice a day',
      notes: '',
      reminderMethod: 'App Notification',
      status: 'active'
    }
  ];

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('medicationReminders')) || [];
    setReminders([...staticReminders, ...stored]);
  }, []);

  const toggleStatus = (id) => {
    const updatedReminders = reminders.map((reminder) =>
      reminder.id === id
        ? { ...reminder, status: reminder.status === 'active' ? 'inactive' : 'active' }
        : reminder
    );

    const userReminders = updatedReminders.filter(r => r.id >= 1000);
    localStorage.setItem('medicationReminders', JSON.stringify(userReminders));
    setReminders(updatedReminders);
  };

  return (
    <div className="min-h-screen bg-teal-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Medication Reminder App</h1>

        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-semibold text-teal-700">📋 Viewing Reminders Only</h2>
        </div>

        <div>
          {reminders.length === 0 ? (
            <p className="text-center text-gray-500">No reminders available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className={`border p-4 rounded-md shadow-sm ${reminder.status === 'inactive' ? 'bg-gray-100 opacity-70' : ''
                    }`}
                >
                  <h3 className="text-lg font-semibold text-teal-700">{reminder.medicineName}</h3>
                  <p><strong>Time:</strong> {reminder.time}</p>
                  <p><strong>Dosage:</strong> {reminder.dosage}</p>
                  <p><strong>Frequency:</strong> {reminder.frequency}</p>
                  <p><strong>Via:</strong> {reminder.reminderMethod}</p>
                  {reminder.notes && (
                    <p className="text-sm text-gray-600 italic mt-1">Notes: {reminder.notes}</p>
                  )}
                  <p className="mt-1">
                    <strong>Status:</strong>{' '}
                    {reminder.status === 'active' ? '🟢 Active' : '🔴 Inactive'}
                  </p>
                  <button
                    onClick={() => toggleStatus(reminder.id)}
                    className="mt-2 text-sm bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    {reminder.status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Go Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-teal-600 hover:underline font-medium"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationReminderApp;
