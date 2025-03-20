import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';


const Home = () => {

    return (
        <div>
            <div className="home-container">
                <Navbar />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;