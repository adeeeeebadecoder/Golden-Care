import React from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './Components/CareModule/Home';
import HealthcareManagement from './Components/CareModule/HealthcareManagement';
import VolunteerSupport from './Components/CareModule/VolunteerSupport';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
// import ProtectedRoute from './Components/ProtectedRoutes';
import Signup from './pages/Signup';
import Footer from './Footer/Footer';
import MedicationReminder from './pages/HealthcareManagement/Medication/MedicationReminder';
import DoctorConsultation from './pages/HealthcareManagement/DoctorConsultation/Doctor';
import ExerciseNutrition from './pages/HealthcareManagement/ExerciseAndNutrition/ExerciseAndNutrition';
import SupportGroupsList from './pages/VolunteerSupports/LGroupList/SupportGroupsList';
import NGOsList from './pages/VolunteerSupports/NGOs/NGOsList';
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import Features from './Components/Features';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <Router>
      <Toaster reverseOrder={false} />
      <Features />
      <Navbar />
      <div className="pt-20">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<NewPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          {/* Protect Routes */}
          {/* <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPanel /></ProtectedRoute>} /> */}
          <Route path='/dashboard' element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={user?.role === "admin" ? <AdminPanel /> : <Navigate to='/dashboard' />} />

          {/* Default Route */}

          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />

          {/* Care Module */}
          <Route path="/care" element={<Home />}>
            <Route path="healthcare" element={<ProtectedRoute><HealthcareManagement /></ProtectedRoute>} />
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
