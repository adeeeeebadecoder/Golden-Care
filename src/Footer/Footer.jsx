import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp, FaCommentDots, FaPaperPlane, FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import GC_logo from "../assets/GC_logo.webp";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [showChat, setShowChat] = useState(false);
    const [chatMessages, setChatMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [subscribedEmails, setSubscribedEmails] = useState([]);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleChatToggle = () => setShowChat(!showChat);

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === "") return;
        setChatMessages([...chatMessages, { text: message, sender: "user" }]);
        setTimeout(() => {
            setChatMessages([...chatMessages, { text: message, sender: "user" }, { text: "I'm here to assist you!", sender: "bot" }]);
        }, 1000);
        setMessage("");
    };

    const handleSubscribe = () => {
        if (!email.includes("@")) return alert("Please enter a valid email address.");
        setSubscribedEmails([...subscribedEmails, email]);
        localStorage.setItem("subscribedEmails", JSON.stringify([...subscribedEmails, email]));
        setEmail("");
        alert("Subscribed Successfully!");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gradient-to-br from-teal-800 to-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 relative">
                <div className="text-center md:text-left">
                    <NavLink to="/" className="flex items-center">
                        <img src={GC_logo} alt="Golden Care Logo" className="w-20 h-auto rounded-full" />
                    </NavLink>
                    <p className="mt-4 text-gray-300 italic">"Caring for your loved ones with compassion and dedication."</p>
                    <p className="text-yellow-400 text-lg font-semibold mt-2">Current Time: {time}</p>
                </div>
                <div className="text-center leading-10">
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p>
                        <a href="mailto:support@goldencare.com" className="hover:text-yellow-400">
                            <FaEnvelope className="inline mr-2" /> support@goldencare.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+911213232322121" className="hover:text-yellow-400">
                            <FaPhone className="inline mr-2" /> +91 1213232322121
                        </a>
                    </p>
                    <p>
                        <a href="https://www.google.com/maps/search/Hyderabad,+India" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaHome className="inline mr-2" /> Hyderabad, India
                        </a>
                    </p>
                </div>

                <div className="text-center leading-8">
                    <h3 className="text-lg font-semibold ">Quick Links</h3>
                    <div className="flex justify-center flex-col  mt-2">
                        <Link to="/" className="hover:text-yellow-400">Home</Link>
                        <Link to="/about" className="hover:text-yellow-400">About</Link>
                        {/* <Link to="/services" className="hover:text-yellow-400">Services</Link> */}
                        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold mb-4 text-center">Follow Us</h3>
                    <div className="flex justify-center gap-4">
                        {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                            <a key={index} href="#" className="text-2xl hover:text-yellow-400 transition-transform transform hover:scale-125 duration-300">
                                <Icon />
                            </a>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold mt-6 text-center">Subscribe for Updates</h3>
                    <div className="mt-2 flex justify-center items-center">
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-40 bg-gray-800 text-white rounded-l-md focus:outline-none" />
                        <button onClick={handleSubscribe} className="bg-yellow-500 px-4 py-2 rounded-r-md text-black font-semibold hover:bg-yellow-600">Subscribe</button>
                    </div>
                </div>
            </div>
            {showChat && (
                <div className="fixed bottom-20 left-6 bg-white text-black w-72 rounded-lg shadow-lg">
                    <div className="bg-teal-700 text-white px-4 py-2 rounded-t-lg flex justify-between">
                        <h3 className="text-lg">Live Chat</h3>
                        <button onClick={handleChatToggle} className="text-lg">✖</button>
                    </div>
                    <div className="h-40 overflow-y-auto p-3">
                        {chatMessages.map((msg, index) => (
                            <p key={index} className={`p-2 rounded-md ${msg.sender === "bot" ? "bg-gray-200 text-black" : "bg-yellow-500 text-white text-right"}`}>{msg.text}</p>
                        ))}
                    </div>
                    <form onSubmit={handleChatSubmit} className="p-2 flex">
                        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 p-2 border rounded-l-md focus:outline-none" placeholder="Type a message..." />
                        <button type="submit" className="bg-teal-600 text-white px-3 py-2 rounded-r-md hover:bg-teal-700"><FaPaperPlane /></button>
                    </form>
                </div>
            )}
            <button onClick={handleChatToggle} className="fixed bottom-10 left-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 flex items-center gap-2">
                <FaCommentDots size={20} /> Chat
            </button>
            {showScroll && (
                <button onClick={scrollToTop} className="fixed bottom-10 right-6 bg-yellow-500 p-3 rounded-full shadow-lg hover:bg-yellow-600">
                    <FaArrowUp size={20} />
                </button>
            )}
            <div className="mt-8 text-center text-sm text-gray-300 relative">© {new Date().getFullYear()} GoldenCare. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
