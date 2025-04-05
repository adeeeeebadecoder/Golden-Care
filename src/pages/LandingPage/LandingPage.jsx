// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaMedkit, FaDumbbell, FaUsers } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from 'framer-motion';
// // import image1 from "../../assets/CarouselImg/images1.png"
// import image1 from "../../assets/CarouselImg/images1.png"
// import image2 from "../../assets/CarouselImg/images2.png"
// import image3 from "../../assets/CarouselImg/images3.png"
// import image4 from "../../assets/CarouselImg/images4.png"
// import image5 from "../../assets/CarouselImg/images5.png"


// const images = [image1, image2, image3, image4, image5];


// const features = [
//     {
//         id: 0,
//         icon: FaMedkit,
//         title: "Care Module",
//         description: "Receive medication reminders and health tips.",
//         route: "/care",
//     },
//     {
//         id: 1,
//         icon: FaDumbbell,
//         title: "Activity Management",
//         description: "Explore health blogs, diet tips, and yoga resources.",
//         disabled: true,
//     },
//     {
//         id: 2,
//         icon: FaUsers,
//         title: "User Interface Module",
//         description: "Volunteers can help and connect with the elderly.",
//         disabled: true,
//     },
// ];

// const testimonials = [
//     { text: "Golden Care has been a lifesaver for my parents! The team is so caring and professional.", name: "Amit Sharma" },
//     { text: "I love how easy it is to book care services. Truly a fantastic experience!", name: "Priya Menon" },
//     { text: "Their service quality is top-notch. I highly recommend Golden Care!", name: "Rahul Verma" },
//     { text: "Amazing platform! It has really helped my grandparents stay active and connected.", name: "Sonia Kapoor" },
//     { text: "Highly professional and caring team. A must-have service for elderly care.", name: "Vikram Joshi" },
// ];

// const TestimonialsCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>

//             <div className="bg-white py-8 text-center">
//                 <h2 className="text-3xl font-bold text-black ">What Our Users Say</h2>
//                 <Carousel
//                     showThumbs={false}
//                     autoPlay
//                     infiniteLoop
//                     showArrows={true}
//                     showStatus={false}
//                     selectedItem={currentIndex}
//                     onChange={setCurrentIndex}
//                     className="mt-8 w-full mx-auto"
//                 >
//                     {testimonials.map((testimonial, index) => (
//                         <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
//                             <p className="text-gray-700">"{testimonial.text}"</p>
//                             <p className="text-teal-900 font-semibold mt-2">- {testimonial.name}</p>
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//         </>
//     );
// };

// const LandingPage = () => {
//     const navigate = useNavigate();

//     const handleModuleClick = (feature) => {
//         if (!feature.disabled) {
//             navigate(feature.route);
//         }
//     };

//     return (
//         <>
//             <div className="bg-gradient-to-b from-teal-50 to-gray-100">
//                 {/* Moving Header Section */}
//                 <motion.div
//                     initial={{ x: '1vw' }}
//                     animate={{ x: 0 }}
//                     transition={{ type: 'spring', stiffness: 50 }}
//                     className="text-center mt-2 py-10 text-black"
//                 >
//                     <h1 className="text-4xl font-bold mt-6">Welcome to Golden Care</h1>
//                     <p className="text-lg mt-4">Your Elderly Assistance Platform</p>
//                 </motion.div>
//             </div>
//             <div className="min-h-screen bg-gray-200 text-teal-900">
//                 {/* <Carousel showThumbs={false} autoPlay infiniteLoop className="shadow-lg">
//                     {["images1.jpg", "images2.jpg", "images3.jpg", "images4.jpg", "images5.jpg"].map((img, index) => (
//                         <div key={index}>
//                             <img src={`/images/${img}`} alt="Golden Care" className="w-full h-[31.25rem] object-cover rounded-lg" />
//                             <p className="legend bg-gray-800 text-white p-2 rounded-lg">Dynamic and Personalized Elderly Care</p>
//                         </div>
//                     ))}
//                 </Carousel> */}

//                 <Carousel showThumbs={false} autoPlay infiniteLoop className="shadow-lg">
//                     {images.map((img, index) => (
//                         <div key={index}>
//                             <img src={img} alt={`Golden Care ${index + 1}`} className="w-full h-[31.25rem] object-cover rounded-lg" />
//                             <p className="legend bg-gray-800 text-white p-2 rounded-lg">Dynamic and Personalized Elderly Care</p>
//                         </div>
//                     ))}
//                 </Carousel>



//                 <div className="text-center mt-2 py-10 text-black">
//                     <h1 className="text-5xl font-bold mt-6">Features</h1>
//                     {/* <p className="text-lg mt-4">Your Elderly Assistance Platform</p> */}
//                 </div>

//                 <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {features.map((feature) => {
//                         const FeatureIcon = feature.icon;
//                         return (
//                             <div
//                                 key={feature.id}
//                                 className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer transition-all hover:scale-105 transform duration-300 ease-in-out ${feature.disabled ? "bg-gray-400 opacity-50 cursor-not-allowed" : "bg-white"
//                                     }`}
//                                 onClick={() => handleModuleClick(feature)}
//                             >
//                                 <FeatureIcon className={`text-4xl font-bold ${feature.disabled ? "text-gray-600" : "text-blue-600"}`} />
//                                 <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
//                                 <p className="mt-2 text-gray-700">{feature.description}</p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <TestimonialsCarousel />

//                 <div className="text-center py-12 mt-8">
//                     <h2 className="text-3xl font-bold">Join Golden Care Today!</h2>
//                     <p className="mt-4 text-lg">Start your journey towards a healthier, happier life.</p>
//                     <button
//                         className="mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg shadow-md hover:bg-gray-300"
//                         onClick={() => navigate("/login")}
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default LandingPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMedkit, FaDumbbell, FaUsers } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from 'framer-motion';

import image1 from "../../assets/CarouselImg/images1.png";
import image2 from "../../assets/CarouselImg/images2.png";
import image3 from "../../assets/CarouselImg/images3.png";
import image4 from "../../assets/CarouselImg/images4.png";
import image5 from "../../assets/CarouselImg/images5.png";


const images = [image1, image2, image3, image4, image5];

const features = [
    {
        id: 0,
        icon: FaMedkit,
        title: "Care Module",
        description: "Receive medication reminders and health tips.",
        route: "/care",
    },
    {
        id: 1,
        icon: FaDumbbell,
        title: "Activity Management",
        description: "Explore health blogs, diet tips, and yoga resources.",
        disabled: true,
    },
    {
        id: 2,
        icon: FaUsers,
        title: "User Interface Module",
        description: "Volunteers can help and connect with the elderly.",
        disabled: true,
    },
];

const testimonials = [
    { text: "Golden Care has been a lifesaver for my parents! The team is so caring and professional.", name: "Amit Sharma" },
    { text: "I love how easy it is to book care services. Truly a fantastic experience!", name: "Priya Menon" },
    { text: "Their service quality is top-notch. I highly recommend Golden Care!", name: "Rahul Verma" },
    { text: "Amazing platform! It has really helped my grandparents stay active and connected.", name: "Sonia Kapoor" },
    { text: "Highly professional and caring team. A must-have service for elderly care.", name: "Vikram Joshi" },
];

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white py-8 text-center">
            <h2 className="text-3xl font-bold text-black">What Our Users Say</h2>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showArrows
                showStatus={false}
                selectedItem={currentIndex}
                onChange={setCurrentIndex}
                className="mt-8 w-full mx-auto"
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <p className="text-gray-700">"{testimonial.text}"</p>
                        <p className="text-teal-900 font-semibold mt-2">- {testimonial.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

const LandingPage = () => {
    const navigate = useNavigate();

    const handleModuleClick = (feature) => {
        if (!feature.disabled) {
            navigate(feature.route);
        }
    };

    return (
        <>
            {/* Header */}
            <div className="bg-gradient-to-b from-teal-50 to-gray-100">
                <motion.div
                    initial={{ x: '1vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className="text-center mt-2 py-10 text-black"
                >
                    <h1 className="text-4xl font-bold mt-6">Welcome to Golden Care</h1>
                    <p className="text-lg mt-4">Your Elderly Assistance Platform</p>
                </motion.div>
            </div>

            {/* Carousel */}
            <div className="flex justify-center items-center ">
                <div className="w-full max-w-max  rounded-xl overflow-hidden shadow-2xl">
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showArrows={true}
                        className="carousel-root"
                    >
                        {images.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    alt={`Golden Care ${index + 1}`}
                                    className="w-full h-[400px] sm:h-[500px]  object-fill  rounded-xl"
                                />
                                <p className="legend bg-gray-800 text-white text-sm sm:text-base p-2 rounded-b-xl">
                                    Dynamic and Personalized Elderly Care
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Features */}
            <div className="text-center mt-2 py-10 text-black">
                <h1 className="text-5xl font-bold mt-6">Features</h1>
            </div>

            <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => {
                    const FeatureIcon = feature.icon;
                    return (
                        <div
                            key={feature.id}
                            className={`p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all hover:scale-105 duration-300 ${feature.disabled ? "bg-gray-400 opacity-50 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                            onClick={() => handleModuleClick(feature)}
                        >
                            <FeatureIcon className={`text-4xl ${feature.disabled ? "text-gray-600" : "text-blue-600"}`} />
                            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
                            <p className="mt-2 text-gray-700">{feature.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Testimonials */}
            <TestimonialsCarousel />

            {/* CTA */}
            <div className="text-center py-12 mt-8">
                <h2 className="text-3xl font-bold">Join Golden Care Today!</h2>
                <p className="mt-4 text-lg">Start your journey towards a healthier, happier life.</p>
                <button
                    className="mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg shadow-md hover:bg-gray-300"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </button>
            </div>
        </>
    );
};

export default LandingPage;
