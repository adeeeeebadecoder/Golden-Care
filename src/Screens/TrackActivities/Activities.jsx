// import React, { useState, useEffect } from 'react';
// // import './Activities.css';
// import axios from 'axios';


// import med from "../../assets/med.png"
// import calorie from "../../assets/calorie.png"
// import todo from "../../assets/imp.png"
// import physical from "../../assets/physical activities.jfif"

// const Activities = () => {
//     const [activityTypes, setActivityTypes] = useState(['Physical Activities', 'Important Tasks', 'Medicine', 'Calorie Counter']);
//     const [selectedActivity, setSelectedActivity] = useState('');
//     const [activities, setActivities] = useState([]);
//     const [activityName, setActivityName] = useState('');
//     const [activityTime, setActivityTime] = useState('');
//     const [reminder, setReminder] = useState(false);

//     const selectActivityType = (type) => {
//         setSelectedActivity(type);
//         fetchActivities(type); // Fetch activities based on the selected type
//     };
//     const activityInfo = {
//         'Physical Activities': {

//             image: physical,
//         },
//         'Important Tasks': {
//             image: todo,
//         },
//         'Medicine': {
//             image: med,
//         },
//         'Calorie Counter': {
//             image: calorie,
//         },
//     };

//     const addActivity = async () => {
//         if (!activityName || !activityTime || !selectedActivity) {
//             alert('Please enter activity type, name, and time.');
//             return;
//         }

//         const newActivity = {
//             type: selectedActivity,
//             name: activityName,
//             time: activityTime,
//             reminder,
//         };

//         try {
//             // Send a POST request to add the activity to the backend
//             const response = await axios.post('https://seniorguardianbackend.vercel.app/api/activities', newActivity);

//             // Update the local state with the new activity
//             setActivities([...activities, response.data]);
//             setActivityName('');
//             setActivityTime('');
//             setReminder(false);
//         } catch (error) {
//             console.error('Error adding activity:', error);
//             alert('Error adding activity. Please try again.');
//         }
//     };

//     const deleteActivity = async (id) => {
//         try {
//             // Send a DELETE request to delete the activity from the backend
//             await axios.delete(`https://seniorguardianbackend.vercel.app/api/activities/${id}`);

//             // Update the local state to remove the deleted activity
//             const updatedActivities = activities.filter((activity) => activity._id !== id);
//             setActivities(updatedActivities);
//         } catch (error) {
//             console.error('Error deleting activity:', error);
//             alert('Error deleting activity. Please try again.');
//         }
//     };

//     const fetchActivities = async (activityType) => {
//         try {
//             // Send a GET request to fetch activities from the backend based on the type
//             const response = await axios.get('https://seniorguardianbackend.vercel.app/api/activities', {
//                 params: { type: activityType }, // Pass the activity type as a query parameter
//             });

//             // Update the local state with the fetched activities
//             setActivities(response.data);
//         } catch (error) {
//             console.error('Error fetching activities:', error);
//         }
//     };



//     useEffect(() => {
//         fetchActivities();
//     }, []);

//     return (
//         <div className='activity'>

//             <br></br>
//             <br></br>
//             <h2>"Track and Manage Your Activities with Ease"</h2>
//             <div>
//                 <h3>Select Activity Type:</h3>
//                 <div className="activity-types">
//                     {activityTypes.map((type) => (
//                         <div
//                             key={type}
//                             className={`activity-type ${selectedActivity === type ? 'selected' : ''}`}
//                             onClick={() => selectActivityType(type)}
//                         >
//                             <h4></h4>
//                             <img className='pic' src={activityInfo[type].image} alt={type} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {selectedActivity && (
//                 <div className='activitydesc'>
//                     <div className='inputtext'>
//                         <input
//                             type="text"
//                             placeholder="Activity Name"
//                             value={activityName}
//                             onChange={(e) => setActivityName(e.target.value)}
//                         />

//                         <input
//                             className='clock'
//                             type="time"
//                             value={activityTime}
//                             onChange={(e) => setActivityTime(e.target.value)}
//                         />
//                         <label className='clock-label'>⏰ Select Time</label>
//                     </div>

//                     <button onClick={addActivity}>Add Activity</button>
//                 </div>
//             )}
//             <div className='list'>
//                 {activities.map((activity) => (
//                     <li key={activity._id}>
//                         {activity.name} at {activity.time}

//                         <button onClick={() => deleteActivity(activity._id)}>Delete</button>
//                     </li>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Activities;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import med from "../../assets/med.png";
import calorie from "../../assets/calorie.png";
import todo from "../../assets/imp.png";
import physical from "../../assets/physical activities.jfif";

const Activities = () => {
    const [activityTypes] = useState(['Physical Activities', 'Important Tasks', 'Medicine', 'Calorie Counter']);
    const [selectedActivity, setSelectedActivity] = useState('');
    const [activities, setActivities] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [activityTime, setActivityTime] = useState('');
    const [reminder, setReminder] = useState(false);

    const selectActivityType = (type) => {
        setSelectedActivity(type);
        fetchActivities(type);
    };

    const activityInfo = {
        'Physical Activities': { image: physical },
        'Important Tasks': { image: todo },
        'Medicine': { image: med },
        'Calorie Counter': { image: calorie },
    };

    const addActivity = async () => {
        if (!activityName || !activityTime || !selectedActivity) {
            alert('Please enter activity type, name, and time.');
            return;
        }

        const newActivity = { type: selectedActivity, name: activityName, time: activityTime, reminder };

        try {
            const response = await axios.post('https://seniorguardianbackend.vercel.app/api/activities', newActivity);
            setActivities([...activities, response.data]);
            setActivityName('');
            setActivityTime('');
            setReminder(false);
        } catch (error) {
            console.error('Error adding activity:', error);
            alert('Error adding activity. Please try again.');
        }
    };

    const deleteActivity = async (id) => {
        try {
            await axios.delete(`https://seniorguardianbackend.vercel.app/api/activities/${id}`);
            setActivities(activities.filter((activity) => activity._id !== id));
        } catch (error) {
            console.error('Error deleting activity:', error);
            alert('Error deleting activity. Please try again.');
        }
    };

    const fetchActivities = async (activityType) => {
        try {
            const response = await axios.get('https://seniorguardianbackend.vercel.app/api/activities', { params: { type: activityType } });
            setActivities(response.data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div className="container mx-auto p-6 mt-25 text-center">
            <h2 className="text-2xl font-bold mt-8 mb-6">Track and Manage Your Activities with Ease</h2>
            <h3 className="text-lg font-semibold flex items-center justify-center mt-8 mb-10">Select Activity Type:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {activityTypes.map((type) => (
                    <div key={type} className={`p-4 border rounded-lg shadow-lg cursor-pointer transition duration-300 ${selectedActivity === type ? 'bg-blue-500 text-white' : 'bg-white'}`} onClick={() => selectActivityType(type)}>
                        <img className="w-20 h-20 mx-auto mb-2" src={activityInfo[type].image} alt={type} />
                        <p className="font-medium">{type}</p>
                    </div>
                ))}
            </div>
            {selectedActivity && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Add {selectedActivity}</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                        <input type="text" placeholder="Activity Name" value={activityName} onChange={(e) => setActivityName(e.target.value)} className="border p-2 rounded-lg w-full md:w-1/3" />
                        <input type="time" value={activityTime} onChange={(e) => setActivityTime(e.target.value)} className="border p-2 rounded-lg w-full md:w-1/3" />
                        <button onClick={addActivity} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add Activity</button>
                    </div>
                </div>
            )}
            <div className="mt-6">
                {activities.length > 0 ? (
                    <ul className="list-none space-y-4">
                        {activities.map((activity) => (
                            <li key={activity._id} className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg">
                                <span>{activity.name} at {activity.time}</span>
                                <button onClick={() => deleteActivity(activity._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700">Delete</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No activities added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Activities;
