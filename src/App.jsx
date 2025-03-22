// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import LandingPage from './pages/LandingPage/LandingPage';
// import Home from './Components/CareModule/Home';
// import HealthcareManagement from './Components/CareModule/HealthcareManagement';
// import VolunteerSupport from './Components/CareModule/VolunteerSupport';
// import About from './pages/About';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Footer from './Footer/Footer';
// import MedicationReminder from './pages/HealthcareManagement/Medication/MedicationReminder';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="pt-20">
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/care" element={<Home />}>
//             <Route path="healthcare/${}" element={<HealthcareManagement />} />
//             <Route path="volunteer/${path}" element={<VolunteerSupport />} />
//           </Route>

//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router >
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './Components/CareModule/Home';
import HealthcareManagement from './Components/CareModule/HealthcareManagement';
import VolunteerSupport from './Components/CareModule/VolunteerSupport';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './Footer/Footer';
import MedicationReminder from './pages/HealthcareManagement/Medication/MedicationReminder';
import DoctorConsultation from './pages/HealthcareManagement/DoctorConsultation/Doctor';
import ExerciseNutrition from './pages/HealthcareManagement/ExerciseAndNutrition/ExerciseAndNutrition';
import SupportGroupsList from './pages/VolunteerSupports/LGroupList/SupportGroupsList';
import NGOsList from './pages/VolunteerSupports/NGOs/NGOsList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Care Module */}
          <Route path="/care" element={<Home />}>
            <Route path="healthcare" element={<HealthcareManagement />} />
            <Route path="healthcare/medication" element={<MedicationReminder />} />
            <Route path="healthcare/consultation" element={<DoctorConsultation />} />
            <Route path="healthcare/exercise-nutrition" element={<ExerciseNutrition />} />
            <Route path="volunteer" element={<VolunteerSupport />} />
            <Route path="volunteer/groups" element={<SupportGroupsList />} />
            <Route path="volunteer/NGOs" element={<NGOsList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
