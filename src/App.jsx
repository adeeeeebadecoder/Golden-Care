import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import CareModule from './pages/CareModule';
import HealthcareManagement from './pages/HealthcareManagement';
import VolunteerSupport from './pages/VolunteerSupport';
import About from './pages/About';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/care" element={<CareModule />}>
            <Route path="healthcare" element={<HealthcareManagement />} />
            <Route path="volunteer" element={<VolunteerSupport />} />
          </Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
