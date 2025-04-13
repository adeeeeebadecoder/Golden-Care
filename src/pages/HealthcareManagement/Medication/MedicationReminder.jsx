import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  // Using a ref to store reminders in the useEffect for notifications
  const remindersRef = useRef(reminders);
  remindersRef.current = reminders;

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('medicationReminders'));
    if (storedReminders) {
      setReminders(storedReminders);
    }

    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    // Notification interval
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5); // "HH:MM"

      remindersRef.current.forEach(reminder => {
        if (reminder.time === currentTime && reminder.status === 'active') {
          new Notification(`Time for your medicine: ${reminder.medicineName}`, {
            body: `Dosage: ${reminder.dosage} - Frequency: ${reminder.frequency}`,
          });
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDelete = async (id, date) => {
    const confirm = window.confirm('Are you sure you want to delete this reminder?');
    if (!confirm) return;

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


  const renderReminderForDate = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return reminders
      .filter(reminder => reminder.date === formattedDate)
      .map(reminder => (
        <div key={reminder.id} className="reminder-item">
          <p>{reminder.medicineName} - {reminder.time}</p>
        </div>
      ));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { medicineName, time, dosage, frequency, reminderMethod, date } = formData;

    if (!medicineName || !time || !dosage || !frequency || !reminderMethod || !date) {
      alert('Please fill all required fields.');
      return;
    }

    const newReminder = { ...formData, id: Date.now(), status: 'active' };

    setReminders((prevReminders) => {
      const updatedReminders = [...prevReminders, newReminder];
      localStorage.setItem('medicationReminders', JSON.stringify(updatedReminders));
      return updatedReminders;
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
  };

  const toggleStatus = (id) => {
    const updatedReminders = reminders.map((reminder) =>
      reminder.id === id
        ? { ...reminder, status: reminder.status === 'active' ? 'inactive' : 'active' }
        : reminder
    );

    setReminders(updatedReminders);
    localStorage.setItem('medicationReminders', JSON.stringify(updatedReminders));
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
        </div>

        {view === 'form' ? (
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
                <option value="SMS">SMS</option>
                <option value="Email">Email</option>
                <option value="Voice Call">Voice Call</option>
                <option value="App Notification">App Notification</option>
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
        ) : view === 'calendar' ? (
          <div>
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
          </div>
        ) : (
          <div>
            {reminders.length === 0 ? (
              <p className="text-center text-gray-500">No reminders set yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reminders.map((reminder) => (
                  <div key={reminder.id} className={`border p-4 rounded-md shadow-sm ${reminder.status === 'inactive' ? 'bg-gray-100 opacity-70' : ''}`}>
                    <h3 className="text-lg font-semibold text-teal-700">{reminder.medicineName}</h3>
                    <p><strong>Time:</strong> {reminder.time}</p>
                    <p><strong>Dosage:</strong> {reminder.dosage}</p>
                    <p><strong>Frequency:</strong> {reminder.frequency}</p>
                    <p><strong>Via:</strong> {reminder.reminderMethod}</p>
                    {reminder.notes && <p className="text-sm text-gray-600 italic mt-1">Notes: {reminder.notes}</p>}
                    <p className="mt-1">
                      <strong>Status:</strong> {reminder.status === 'active' ? '🟢 Active' : '🔴 Inactive'}
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
        )}
      </div>
    </div>
  );
};

export default MedicationReminder;
