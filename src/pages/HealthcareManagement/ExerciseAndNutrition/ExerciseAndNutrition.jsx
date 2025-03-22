// import React, { useState } from "react";

// const ExerciseNutrition = () => {
//   const [selectedCategory, setSelectedCategory] = useState("workout");

//   const workouts = [
//     { name: "Morning Yoga", description: "A 15-minute yoga routine to start your day with energy." },
//     { name: "Stretching", description: "Basic stretching exercises to improve flexibility and mobility." },
//     { name: "Cardio Walk", description: "A 30-minute brisk walk to maintain heart health." },
//     { name: "Strength Training", description: "Light weight training to keep muscles strong and prevent aging effects." },
//   ];

//   const dietPlans = [
//     { title: "Balanced Diet", tips: "Include whole grains, lean proteins, healthy fats, and vegetables." },
//     { title: "Hydration", tips: "Drink at least 8 glasses of water daily for optimal health." },
//     { title: "Calcium & Vitamin D", tips: "Consume dairy, fish, and leafy greens for bone health." },
//     { title: "Fruits & Fiber", tips: "Eat fresh fruits and fiber-rich foods to improve digestion." },
//   ];

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//       <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Exercise & Nutrition Guide</h2>

//       {/* Toggle Workout or Nutrition */}
//       <div className="flex justify-center space-x-4 mb-6">
//         <button
//           onClick={() => setSelectedCategory("workout")}
//           className={`px-4 py-2 rounded-md ${selectedCategory === "workout" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
//         >
//           Workout Routine
//         </button>
//         <button
//           onClick={() => setSelectedCategory("nutrition")}
//           className={`px-4 py-2 rounded-md ${selectedCategory === "nutrition" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
//         >
//           Diet & Nutrition
//         </button>
//       </div>

//       {/* Display Workout Routine */}
//       {selectedCategory === "workout" && (
//         <div className="space-y-4">
//           {workouts.map((workout, index) => (
//             <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
//               <h3 className="font-semibold text-teal-700">{workout.name}</h3>
//               <p className="text-gray-600">{workout.description}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Display Nutrition Tips */}
//       {selectedCategory === "nutrition" && (
//         <div className="space-y-4">
//           {dietPlans.map((plan, index) => (
//             <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
//               <h3 className="font-semibold text-teal-700">{plan.title}</h3>
//               <p className="text-gray-600">{plan.tips}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExerciseNutrition;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExerciseNutrition = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("workout");

  const workouts = [
    { name: "Morning Yoga", description: "A 15-minute yoga routine to start your day with energy." },
    { name: "Stretching", description: "Basic stretching exercises to improve flexibility and mobility." },
    { name: "Cardio Walk", description: "A 30-minute brisk walk to maintain heart health." },
    { name: "Strength Training", description: "Light weight training to keep muscles strong and prevent aging effects." },
  ];

  const dietPlans = [
    { title: "Balanced Diet", tips: "Include whole grains, lean proteins, healthy fats, and vegetables." },
    { title: "Hydration", tips: "Drink at least 8 glasses of water daily for optimal health." },
    { title: "Calcium & Vitamin D", tips: "Consume dairy, fish, and leafy greens for bone health." },
    { title: "Fruits & Fiber", tips: "Eat fresh fruits and fiber-rich foods to improve digestion." },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Exercise & Nutrition Guide</h2>

      {/* Toggle Workout or Nutrition */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory("workout")}
          className={`px-4 py-2 rounded-md ${selectedCategory === "workout" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
        >
          Workout Routine
        </button>
        <button
          onClick={() => setSelectedCategory("nutrition")}
          className={`px-4 py-2 rounded-md ${selectedCategory === "nutrition" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-300`}
        >
          Diet & Nutrition
        </button>
      </div>

      {/* Display Workout Routine */}
      {selectedCategory === "workout" && (
        <div className="space-y-4">
          {workouts.map((workout, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
              <h3 className="font-semibold text-teal-700">{workout.name}</h3>
              <p className="text-gray-600">{workout.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display Nutrition Tips */}
      {selectedCategory === "nutrition" && (
        <div className="space-y-4">
          {dietPlans.map((plan, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm bg-gray-50">
              <h3 className="font-semibold text-teal-700">{plan.title}</h3>
              <p className="text-gray-600">{plan.tips}</p>
            </div>
          ))}
        </div>
      )}

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

export default ExerciseNutrition;
