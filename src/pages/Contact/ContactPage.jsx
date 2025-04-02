// import React from 'react';

// const ContactPage = () => {
//     return (
//         <div className="min-h-screen bg-gray-100 py-10">
//             <div className="container mx-auto px-6 lg:px-20">
//                 <h1 className="text-4xl font-bold text-center text-teal-800">Contact Us</h1>
//                 <p className="text-center text-gray-600 mt-4">We would love to hear from you!</p>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
//                     {/* Contact Form */}
//                     <div className="bg-white shadow-lg rounded-lg p-6">
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
//                         <form className="space-y-4">
//                             <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
//                             <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
//                             <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"></textarea>
//                             <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition-all">Send Message</button>
//                         </form>
//                     </div>

//                     {/* Contact Details */}
//                     <div className="bg-white shadow-lg rounded-lg p-6">
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
//                         <p className="text-gray-700 mb-4">Reach out to us via the details below or fill out the form to send us a message.</p>
//                         <div className="space-y-4">
//                             <p className="flex items-center space-x-2 text-gray-800">
//                                 <span className="font-semibold">📍 Address:</span> 123 Golden Care Street, City, Country
//                             </p>
//                             <p className="flex items-center space-x-2 text-gray-800">
//                                 <span className="font-semibold">📞 Phone:</span> +123 456 7890
//                             </p>
//                             <p className="flex items-center space-x-2 text-gray-800">
//                                 <span className="font-semibold">✉️ Email:</span> support@goldencare.com
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Google Map */}
//                 <div className="mt-12">
//                     <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Find Us Here</h2>
//                     <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden">
//                         <iframe
//                             className="w-full h-full"
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509635!2d144.95373531531662!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f9a7d5%3A0x5045675218ce9e0!2sMelbourne%2C+Victoria%2C+Australia!5e0!3m2!1sen!2sus!4v1511369027055"
//                             allowFullScreen
//                             loading="lazy"
//                         ></iframe>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;


import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleCall = () => {
        window.location.href = 'tel:+1234567890';
    };

    const handleEmail = () => {
        window.location.href = 'mailto:support@goldencare.com';
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 py-10 text-white">
            <div className="container mx-auto px-6 lg:px-20">
                <h1 className="text-5xl font-bold text-center">Contact Us</h1>
                <p className="text-center text-gray-200 mt-4">We would love to hear from you!</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
                    {/* Contact Form */}
                    <div className="bg-white text-gray-800 shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
                        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
                        {submitted ? (
                            <p className="text-green-600 text-lg font-semibold">Message Sent Successfully!</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    required
                                ></textarea>
                                <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all text-lg font-semibold shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white text-gray-800 shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105">
                        <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-6">Reach out to us via the details below or fill out the form to send us a message.</p>
                        <div className="space-y-6">
                            <p className="flex items-center space-x-3 text-gray-800 text-lg">
                                <FaMapMarkerAlt className="text-teal-600 text-2xl" />
                                <span className="font-semibold">123 Golden Care Street, City, Country</span>
                            </p>
                            <p onClick={handleCall} className="flex items-center space-x-3 text-gray-800 text-lg cursor-pointer hover:text-teal-600">
                                <FaPhone className="text-teal-600 text-2xl" />
                                <span className="font-semibold">+123 456 7890</span>
                            </p>
                            <p onClick={handleEmail} className="flex items-center space-x-3 text-gray-800 text-lg cursor-pointer hover:text-teal-600">
                                <FaEnvelope className="text-teal-600 text-2xl" />
                                <span className="font-semibold">support@goldencare.com</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-center mb-6">Find Us Here</h2>
                    <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509635!2d144.95373531531662!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f9a7d5%3A0x5045675218ce9e0!2sMelbourne%2C+Victoria%2C+Australia!5e0!3m2!1sen!2sus!4v1511369027055"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
