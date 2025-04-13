// import React, { useState, useEffect, useRef } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const MedicationReminder = () => {
//   const [reminders, setReminders] = useState([]);
//   const [formData, setFormData] = useState({
//     medicineName: '',
//     time: '',
//     dosage: '',
//     frequency: '',
//     reminderMethod: '',
//     date: '',
//   });

//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [view, setView] = useState('form');

//   // Using a ref to store reminders in the useEffect for notifications
//   const remindersRef = useRef(reminders);
//   remindersRef.current = reminders;

//   useEffect(() => {
//     const storedReminders = JSON.parse(localStorage.getItem('medicationReminders'));
//     if (storedReminders) {
//       setReminders(storedReminders);
//     }

//     if (Notification.permission !== 'granted') {
//       Notification.requestPermission();
//     }

//     // Notification interval
//     const interval = setInterval(() => {
//       const now = new Date();
//       const currentTime = now.toTimeString().slice(0, 5); // "HH:MM"

//       remindersRef.current.forEach(reminder => {
//         if (reminder.time === currentTime && reminder.status === 'active') {
//           new Notification(`Time for your medicine: ${reminder.medicineName}`, {
//             body: `Dosage: ${reminder.dosage} - Frequency: ${reminder.frequency}`,
//           });
//         }
//       });
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   const handleDelete = async (id) => {
//     const confirm = window.confirm('Are you sure you want to delete this reminder?');
//     if (!confirm) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/reminders/${id}`, {
//         method: 'DELETE',
//       });

//       if (res.ok) {
//         setReminders(reminders.filter(reminder => reminder._id !== id));
//       } else {
//         const data = await res.json();
//         alert(`Error: ${data.message}`);
//       }
//     } catch (err) {
//       console.error('Failed to delete reminder', err);
//       alert('❌ Failed to delete reminder');
//     }
//   };


//   const renderReminderForDate = (date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     return reminders
//       .filter(reminder => reminder.date === formattedDate)
//       .map(reminder => (
//         <div key={reminder.id} className="reminder-item">
//           <p>{reminder.medicineName} - {reminder.time}</p>
//         </div>
//       ));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const { medicineName, time, dosage, frequency, reminderMethod, date } = formData;

//   //   if (!medicineName || !time || !dosage || !frequency || !reminderMethod || !date) {
//   //     alert('Please fill all required fields.');
//   //     return;
//   //   }

//   //   // const newReminder = { ...formData, id: Date.now(), status: 'active' };

//   //   // setReminders((prevReminders) => {
//   //   //   const updatedReminders = [...prevReminders, newReminder];
//   //   //   localStorage.setItem('medicationReminders', JSON.stringify(updatedReminders));
//   //   //   return updatedReminders;
//   //   // });

//   //   // alert(`✅ Reminder set successfully via ${reminderMethod}!`);
//   //   // setFormData({
//   //   //   medicineName: '',
//   //   //   time: '',
//   //   //   dosage: '',
//   //   //   frequency: '',
//   //   //   reminderMethod: '',
//   //   //   date: '',
//   //   // });

//   //   const newReminder = { ...formData, status: 'active' };

//   //   try {
//   //     const res = await fetch('http://localhost:5000/api/reminders', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         // Add Authorization header if your API needs a token
//   //         'Authorization': `Bearer ${yourToken}`
//   //       },
//   //       body: JSON.stringify(newReminder),
//   //     });

//   //     if (res.ok) {
//   //       const savedReminder = await res.json();

//   //       setReminders(prev => {
//   //         const updated = [...prev, savedReminder];
//   //         localStorage.setItem('medicationReminders', JSON.stringify(updated));
//   //         return updated;
//   //       });

//   //       alert(`✅ Reminder set successfully via ${reminderMethod}!`);
//   //       setFormData({
//   //         medicineName: '',
//   //         time: '',
//   //         dosage: '',
//   //         frequency: '',
//   //         reminderMethod: '',
//   //         date: '',
//   //       });
//   //     } else {
//   //       const data = await res.json();
//   //       alert(`Error: ${data.message}`);
//   //     }
//   //   } catch (error) {
//   //     console.error('Failed to save reminder', error);
//   //     alert('❌ Failed to save reminder to the database');
//   //   }

//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { medicineName, time, dosage, frequency, reminderMethod, date } = formData;

//     if (!medicineName || !time || !dosage || !frequency || !reminderMethod || !date) {
//       alert('Please fill all required fields.');
//       return;
//     }

//     const newReminder = { ...formData, status: 'active' };

//     try {
//       const token = localStorage.getItem('token'); // Update accordingly
//       const res = await fetch('http://localhost:5000/api/reminders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(newReminder),
//       });

//       if (res.ok) {
//         const savedReminder = await res.json();

//         setReminders(prev => {
//           const updated = [...prev, savedReminder];
//           localStorage.setItem('medicationReminders', JSON.stringify(updated));
//           return updated;
//         });

//         alert(`✅ Reminder set successfully via ${reminderMethod}!`);
//         setFormData({
//           medicineName: '',
//           time: '',
//           dosage: '',
//           frequency: '',
//           reminderMethod: '',
//           date: '',
//         });
//       } else {
//         const data = await res.json();
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Failed to save reminder', error);
//       alert('❌ Failed to save reminder to the database');
//     }
//   };


//   // const toggleStatus = (id) => {
//   //   const updatedReminders = reminders.map((reminder) =>
//   //     reminder.id === id
//   //       ? { ...reminder, status: reminder.status === 'active' ? 'inactive' : 'active' }
//   //       : reminder
//   //   );

//   //   setReminders(updatedReminders);
//   //   localStorage.setItem('medicationReminders', JSON.stringify(updatedReminders));
//   // };

//   const toggleReminderStatus = async (reminderId) => {
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.patch(`http://localhost:5000/api/reminders/${reminderId}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log(response.data); // Updated reminder
//     } catch (error) {
//       console.error("Error updating reminder status", error);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-teal-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Medication Reminder App</h1>

//         <div className="flex justify-center  gap-4 mb-6">
//           <button
//             className={`px-4 py-2 rounded-md ${view === 'form' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//             onClick={() => setView('form')}
//           >
//             Set Reminder
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${view === 'calendar' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//             onClick={() => setView('calendar')}
//           >
//             View Calendar
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
//                 <option value="Once a week">Once a week</option>
//                 <option value="As needed">As needed</option>
//               </select>
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
//                 <option value="Email">EMAIL</option>
//                 {/* <option value="SMS">SMS</option>
//                 <option value="Voice Call">Voice Call</option>
//                 <option value="App Notification">App Notification</option> */}
//               </select>
//             </div>

//             <div>
//               <label className="block font-medium text-gray-700">Reminder Date *</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
//             >
//               Set Reminder
//             </button>
//           </form>
//         ) : view === 'calendar' ? (
//           <div>
//             <div className="calendar-container mb-6">
//               <Calendar
//                 onChange={handleDateChange}
//                 value={selectedDate}
//                 tileContent={({ date, view }) => (
//                   <div className="reminders-on-day">
//                     {renderReminderForDate(date)}
//                   </div>
//                 )}
//               />
//             </div>
//           </div>
//         )
//           : (
//             <div>
//               {reminders.length === 0 ? (
//                 <p className="text-center text-gray-500">No reminders set yet.</p>
//               )
//              </div>
//             )
//         //      
//         }
//       </div>
//     </div>
//   );
// };

// export default MedicationReminder;



import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const MedicationReminder = () => {
  const [reminders, setReminders] = useState([]);
  const [formData, setFormData] = useState({
    medicineName: '',
    time: '',
    dosage: '',
    frequency: '',
    reminderMethod: '',
    date: '',
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('form');
  const remindersRef = useRef(reminders);
  remindersRef.current = reminders;

  useEffect(() => {
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

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);

      remindersRef.current.forEach(reminder => {
        if (reminder.time === currentTime && reminder.status === 'active') {
          new Notification(`Time for your medicine: ${reminder.medicineName}`, {
            body: `Dosage: ${reminder.dosage} - Frequency: ${reminder.frequency}`,
          });
        }
      });
    }, 60000);
    fetchReminders()
    return () => clearInterval(interval);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { medicineName, time, dosage, frequency, reminderMethod, date } = formData;

    if (!medicineName || !time || !dosage || !frequency || !reminderMethod || !date) {
      alert('Please fill all required fields.');
      return;
    }

    const newReminder = { ...formData, status: 'active' };

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/reminders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newReminder),
      });

      if (res.ok) {
        const savedReminder = await res.json();

        setReminders(prev => {
          const updated = [...prev, savedReminder];
          localStorage.setItem('medicationReminders', JSON.stringify(updated));
          return updated;
        });

        alert(`✅ Reminder set successfully via ${reminderMethod}!`);
        setFormData({
          medicineName: '',
          time: '',
          dosage: '',
          frequency: '',
          reminderMethod: '',
          date: '',
        });
      } else {
        const data = await res.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to save reminder', error);
      alert('❌ Failed to save reminder to the database');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this reminder?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/reminders/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setReminders(reminders.filter(reminder => reminder._id !== id));
      } else {
        const data = await res.json();
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error('Failed to delete reminder', err);
      alert('❌ Failed to delete reminder');
    }
  };

  const toggleReminderStatus = async (reminderId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(`http://localhost:5000/api/reminders/${reminderId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const updatedReminder = response.data;
      const updatedList = reminders.map((r) =>
        r._id === updatedReminder._id ? updatedReminder : r
      );

      setReminders(updatedList);
      localStorage.setItem('medicationReminders', JSON.stringify(updatedList));
    } catch (error) {
      console.error("Error updating reminder status", error);
    }
  };

  const renderReminderForDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return reminders
      .filter(reminder => reminder.date === formattedDate)
      .map(reminder => (
        <div key={reminder._id} className="reminder-item text-xs text-teal-700 font-semibold">
          {reminder.medicineName} - {reminder.time}
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-teal-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Medication Reminder App</h1>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${view === 'form' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setView('form')}
          >
            Set Reminder
          </button>
          <button
            className={`px-4 py-2 rounded-md ${view === 'calendar' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setView('calendar')}
          >
            View Calendar
          </button>
          <button
            className={`px-4 py-2 rounded-md ${view === 'list' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setView('list')}
          >
            View Reminders
          </button>
        </div>

        {view === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700">Medicine Name *</label>
              <input
                type="text"
                name="medicineName"
                value={formData.medicineName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Dosage *</label>
              <input
                type="text"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                placeholder="e.g., 1 tablet"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Frequency *</label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select frequency</option>
                <option value="Once a day">Once a day</option>
                <option value="Twice a day">Twice a day</option>
                <option value="Three times a day">Three times a day</option>
                <option value="Once a week">Once a week</option>
                <option value="As needed">As needed</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Reminder Method *</label>
              <select
                name="reminderMethod"
                value={formData.reminderMethod}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select method</option>
                <option value="Email">EMAIL</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700">Reminder Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white p-2 rounded-md hover:bg-teal-700"
            >
              Set Reminder
            </button>
          </form>
        )}

        {view === 'calendar' && (
          <div className="calendar-container mb-6">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={({ date, view }) => (
                <div className="reminders-on-day">
                  {renderReminderForDate(date)}
                </div>
              )}
            />
          </div>
        )}

        {view === 'list' && (
          <div>
            {reminders.length === 0 ? (
              <p className="text-center text-gray-500">No reminders set yet.</p>
            ) : (
              <div className="space-y-4">
                {reminders.map((reminder) => (
                  <div key={reminder._id} className="border p-4 rounded shadow">
                    <h3 className="text-lg font-bold text-teal-700">{reminder.medicineName}</h3>
                    <p><strong>Time:</strong> {reminder.time}</p>
                    <p><strong>Dosage:</strong> {reminder.dosage}</p>
                    <p><strong>Frequency:</strong> {reminder.frequency}</p>
                    <p><strong>Date:</strong> {reminder.date}</p>
                    <p><strong>Status:</strong> {reminder.status}</p>
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => toggleReminderStatus(reminder._id)}
                        className="text-sm text-white bg-blue-500 px-2 py-1 rounded"
                      >
                        Toggle Status
                      </button>
                      <button
                        onClick={() => handleDelete(reminder._id)}
                        className="text-sm text-white bg-red-500 px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicationReminder;
