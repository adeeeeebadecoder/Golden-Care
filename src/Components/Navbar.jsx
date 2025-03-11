import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { AiOutlineShoppingCart, AiFillHome } from 'react-icons/ai';
import { GiFalling } from 'react-icons/gi';
import GC_logo from "../assets/GC_logo.webp";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for login/signup menu

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="bg-teal-600 text-white shadow-md w-full h-auto fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-3">

                {/* Logo Section */}
                <NavLink to="/" className="flex items-center">
                    <img src={GC_logo} alt="Golden Care Logo" className="w-14 md:w-20 lg:w-24 h-auto rounded-full object-contain" />
                </NavLink>

                {/* Mobile Menu Button */}
                <button className="text-2xl md:hidden focus:outline-none" onClick={toggleNav}>
                    <FaBars />
                </button>

                {/* Navigation Links */}
                <div className={`absolute top-16 flex justify-evenly left-0 w-full bg-teal-600 md:static md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${isNavOpen ? 'block' : 'hidden md:flex'}`}>
                    <NavLink to="/" className="block py-2 px-4 font-bold hover:bg-teal-700 border rounded md:inline-flex md:items-center md:px-6">
                        <AiFillHome className="inline-block mr-2" /> Home
                    </NavLink>
                    {/* <NavLink to="/home/activities" className="block font-bold py-2 px-4 hover:bg-teal-700 border rounded md:inline-flex md:items-center md:px-6">
                        <CgGym className="inline-block mr-2" /> Track Activities
                    </NavLink> */}
                    {/* <NavLink to="/home/services" className="block font-bold py-2 px-4 hover:bg-teal-700 border rounded md:inline-flex md:items-center md:px-6">
                        <AiOutlineShoppingCart className="inline-block mr-2" /> Homecare Services
                    </NavLink> */}
                    {/* <NavLink to="/home/fall" className="block font-bold py-2 px-4 hover:bg-teal-700 border rounded md:inline-flex md:items-center md:px-6">
                        <GiFalling className="inline-block mr-2" /> Fall Detection
                    </NavLink> */}
                </div>

                {/* User Icon for Login/Signup */}
                <div className="relative">
                    <button
                        className="text-3xl focus:outline-none"
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                        <FaUserCircle />
                    </button>
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg overflow-hidden w-40">
                            <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</NavLink>
                            <NavLink to="/signup" className="block px-4 py-2 hover:bg-gray-200">Signup</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
