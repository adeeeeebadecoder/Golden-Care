import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Fall from '../Screens/Fall/Fall';
import Medical from '../Screens/Medical/Medical';
import LandingPage from '../pages/LandingPage/LandingPage';
import Homecare from '../Screens/HomeService/Homecare';
import Activities from '../Screens/TrackActivities/Activities';


const Home = () => {

    return (
        <div>
            <div className="home-container">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/fall" element={<Fall />} />
                        <Route path="/medical" element={<Medical />} />
                        <Route path="/services" element={<Homecare />} />
                        <Route path="/activities" element={<Activities />} />

                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;