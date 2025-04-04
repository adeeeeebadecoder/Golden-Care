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
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import DoctorDashboard from "./DoctorDashboard";
import ProtectedRoute from './ProtectedRoute';
// import ProtectedRoute from './Components/ProtectedRoutes';
import Footer from './Footer/Footer';
import MedicationReminder from './pages/HealthcareManagement/Medication/MedicationReminder';
import DoctorConsultation from './pages/HealthcareManagement/DoctorConsultation/Doctor';
import ExerciseNutrition from './pages/HealthcareManagement/ExerciseAndNutrition/ExerciseAndNutrition';
import SupportGroupsList from './pages/VolunteerSupports/LGroupList/SupportGroupsList';
import NGOsList from './pages/VolunteerSupports/NGOs/NGOsList';
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import ContactPage from './pages/Contact/ContactPage';

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
      <Navbar />
      <div className="mt-20">
        {/* <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<NewPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/dashboard" element={<ProtectedRoute requiredRoles={["admin"]}><AdminPanel /></ProtectedRoute>} />
          <Route path="/doctor/dashboard" element={<ProtectedRoute requiredRoles={["doctor"]}><DoctorDashboard /></ProtectedRoute>} />

          <Route path='/dashboard' element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={user?.role === "admin" ? <AdminPanel /> : <Navigate to='/login' />} />


          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />

          <Route path="/care" element={<Home />}>
            <Route path="healthcare" element={<ProtectedRoute><HealthcareManagement /></ProtectedRoute>} />
            <Route path="healthcare/medication" element={<MedicationReminder />} />
            <Route path="healthcare/consultation" element={<DoctorConsultation />} />
            <Route path="healthcare/exercise-nutrition" element={<ExerciseNutrition />} />
            <Route path="volunteer" element={<VolunteerSupport />} />
            <Route path="volunteer/groups" element={<SupportGroupsList />} />
            <Route path="volunteer/NGOs" element={<NGOsList />} />
          </Route>


        </Routes> */}

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<NewPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route path='/dashboard' element={<ProtectedRoute allowedRoles={["user", "admin", "doctor"]}><Dashboard /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}><AdminPanel /></ProtectedRoute>} />
          <Route path="/doctor/dashboard" element={<ProtectedRoute allowedRoles={["doctor"]}><DoctorDashboard /></ProtectedRoute>} />

          {/* Default Route */}
          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />

          {/* Care Module */}
          <Route path="/care" element={<Home />}>
            <Route path="healthcare" element={<ProtectedRoute allowedRoles={["user", "admin"]}><HealthcareManagement /></ProtectedRoute>} />
            <Route path="healthcare/medication" element={<ProtectedRoute allowedRoles={["user", "admin"]}><MedicationReminder /></ProtectedRoute>} />
            <Route path="healthcare/consultation" element={<ProtectedRoute allowedRoles={["user", "doctor"]}><DoctorConsultation /></ProtectedRoute>} />
            <Route path="healthcare/exercise-nutrition" element={<ProtectedRoute allowedRoles={["user"]}><ExerciseNutrition /></ProtectedRoute>} />
            <Route path="volunteer" element={<ProtectedRoute allowedRoles={["user", "admin"]}><VolunteerSupport /></ProtectedRoute>} />
            <Route path="volunteer/groups" element={<ProtectedRoute allowedRoles={["user"]}><SupportGroupsList /></ProtectedRoute>} />
            <Route path="volunteer/NGOs" element={<ProtectedRoute allowedRoles={["user"]}><NGOsList /></ProtectedRoute>} />
          </Route>

        </Routes>

      </div>
      <Footer />
    </Router>
  );
};

export default App;
