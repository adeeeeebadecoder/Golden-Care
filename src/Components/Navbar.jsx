// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
// import { AiFillHome } from 'react-icons/ai';
// import GC_logo from "../assets/GC_logo.webp";

// const Navbar = () => {
//     const [isNavOpen, setIsNavOpen] = useState(false);
//     const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//     const [user, setUser] = useState(null); // Added user state
//     const navigate = useNavigate();

//     // Check if user is logged in
//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");
//         setUser(null);
//         navigate("/login"); // Redirect to login after logout
//     };

//     const toggleNav = () => {
//         setIsNavOpen(!isNavOpen);
//     };

//     return (
//         <nav className="bg-teal-600 text-white shadow-md w-full fixed top-0 z-50">
//             <div className="container mx-auto flex justify-between items-center p-2">

//                 {/* Logo Section */}
//                 <NavLink to="/" className="flex items-center">
//                     <img src={GC_logo} alt="Golden Care Logo" className="w-14 md:w-20 lg:w-24 h-auto rounded-full object-contain" />
//                 </NavLink>

//                 {/* Desktop Navigation Links */}
//                 <div className={`absolute top-16 flex justify-evenly left-0 w-full bg-teal-600 md:static md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${isNavOpen ? 'hidden' : 'hidden md:flex'}`}>
//                     <NavLink to="/" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
//                         <AiFillHome className="inline-block mr-2" /> Home
//                     </NavLink>
//                     <NavLink to="/care" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
//                         Care Module
//                     </NavLink>
//                     <NavLink to="/about" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
//                         About Us
//                     </NavLink>
//                 </div>

//                 {/* User Icon for Login/Logout */}
//                 <div className="relative hidden md:block">
//                     <button
//                         className="text-3xl h-auto cursor-pointer object-contain"
//                         onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                     >
//                         <FaUser />
//                     </button>
//                     {isUserMenuOpen && (
//                         <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg overflow-hidden w-40">
//                             {user ? (
//                                 <button
//                                     onClick={handleLogout}
//                                     className="block w-full text-left px-4 py-2 hover:bg-gray-200"
//                                 >
//                                     Logout
//                                 </button>
//                             ) : (
//                                 <>
//                                     <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</NavLink>
//                                     <NavLink to="/signup" className="block px-4 py-2 hover:bg-gray-200">Signup</NavLink>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button className="text-2xl md:hidden focus:outline-none absolute top-4 right-4" onClick={toggleNav}>
//                     {isNavOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//             </div>

//             {/* Mobile Navigation Menu */}
//             <div className={`fixed top-0 right-0 w-64 h-full bg-teal-700 shadow-lg transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                 <button className="text-white text-2xl absolute top-4 right-4" onClick={toggleNav}>
//                     <FaTimes />
//                 </button>

//                 <ul className="mt-16 space-y-4 text-center">
//                     <li>
//                         <NavLink to="/" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
//                             <AiFillHome className="inline-block mr-2" /> Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/care" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
//                             Care Module
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
//                             About Us
//                         </NavLink>
//                     </li>
//                     <li className="border-t border-white mt-2 pt-2">
//                         {user ? (
//                             <button
//                                 onClick={() => {
//                                     handleLogout();
//                                     toggleNav();
//                                 }}
//                                 className="block w-full py-2 text-lg font-semibold hover:bg-teal-800"
//                             >
//                                 Logout
//                             </button>
//                         ) : (
//                             <>
//                                 <NavLink to="/login" className="block py-2 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
//                                     Login
//                                 </NavLink>
//                                 <NavLink to="/signup" className="block py-2 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
//                                     Signup
//                                 </NavLink>
//                             </>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import GC_logo from "../assets/GC_logo.webp";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Check if user is logged in (on page load)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));  // Parse stored user data
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login"); // Redirect to login after logout
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="bg-teal-600 text-white shadow-md w-full fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-2">

                {/* Logo Section */}
                <NavLink to="/" className="flex items-center">
                    <img src={GC_logo} alt="Golden Care Logo" className="w-14 md:w-20 lg:w-24 h-auto rounded-full object-contain" />
                </NavLink>

                {/* Desktop Navigation Links */}
                <div className={`absolute top-16 flex justify-evenly left-0 w-full bg-teal-600 md:static md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out ${isNavOpen ? 'hidden' : 'hidden md:flex'}`}>
                    <NavLink to="/" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
                        <AiFillHome className="inline-block mr-2" /> Home
                    </NavLink>
                    <NavLink to="/care" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
                        Care Module
                    </NavLink>
                    <NavLink to="/about" className="py-2 px-4 font-bold hover:bg-teal-700 border rounded">
                        About Us
                    </NavLink>
                </div>

                {/* User Icon - Shows Login/Signup or Logout */}
                <div className="relative hidden md:block">
                    <button
                        className="text-3xl h-auto cursor-pointer object-contain"
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    >
                        <FaUser />
                    </button>
                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-lg overflow-hidden w-40">
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</NavLink>
                                    <NavLink to="/signup" className="block px-4 py-2 hover:bg-gray-200">Signup</NavLink>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="text-2xl md:hidden focus:outline-none absolute top-4 right-4" onClick={toggleNav}>
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-teal-700 shadow-lg transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="text-white text-2xl absolute top-4 right-4" onClick={toggleNav}>
                    <FaTimes />
                </button>

                <ul className="mt-16 space-y-4 text-center">
                    <li>
                        <NavLink to="/" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
                            <AiFillHome className="inline-block mr-2" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/care" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
                            Care Module
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="block py-3 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="border-t border-white mt-2 pt-2">
                        {user ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleNav();
                                }}
                                className="block w-full py-2 text-lg font-semibold hover:bg-teal-800"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <NavLink to="/login" className="block py-2 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
                                    Login
                                </NavLink>
                                <NavLink to="/signup" className="block py-2 text-lg font-semibold hover:bg-teal-800" onClick={toggleNav}>
                                    Signup
                                </NavLink>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
