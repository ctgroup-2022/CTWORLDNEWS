import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hiImage from "../assets/Images/hi.png";
import globe from "../assets/Images/globe.png";

const Landing = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const messageTimer = setTimeout(() => setShowMessage(true), 1500);
    const hideTimer = setTimeout(() => setHideContent(true), 5000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Centered Globe Animation with Pulsing Effect */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.5, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <img
          src={globe}
          alt="Globe Animation"
          className="w-[90%] max-w-[700px] opacity-30"
        />
      </motion.div>

      {/* Animated Hi Image */}
      {!hideContent && (
        <motion.div
          className="absolute bottom-10 right-10 z-10 hidden md:block"
          initial={{ y: 200, x: 100, opacity: 0 }}
          animate={{ y: 100, x: 50, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.img
            className="object-contain w-24 md:w-32 lg:w-40"
            src={hiImage}
            alt="Hi"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Welcome Text with Typing Effect */}
      {showMessage && !hideContent && (
        <motion.div
          className="absolute bottom-[80px] right-[80px] text-white font-semibold text-lg z-10 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-xl hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="inline-block"
          >
            Welcome! Let's Explore Together.
          </motion.span>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-6 leading-tight">
            CEETEE World News
          </h1>
          <p className="text-gray-300 md:text-xl mb-10 max-w-2xl mx-auto">
            Your trusted source for global news and insights. Stay informed with the latest updates from around the world.
          </p>

          {/* Interactive Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-12 sm:w-44 sm:h-14 md:w-48 md:h-16 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center"
            >
              Get Started
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center w-full sm:w-auto"
            >
              <Link
                to="/login"
                className="w-40 h-12 sm:w-44 sm:h-14 md:w-48 md:h-16 text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/50 flex items-center justify-center transition-all"
              >
                <span>Login</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 underline text-lg">
              Don't have an account? Sign up here
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, 30, -30, 0], 
            scale: [1, 1.2, 1],
            rotate: 360 
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            x: [0, -50, 50, 0], 
            y: [0, -30, 30, 0], 
            scale: [1, 1.3, 1],
            rotate: -360 
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-36 h-36 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 60, -60, 0], 
            y: [0, -40, 40, 0], 
            scale: [1, 1.2, 1],
            rotate: 180 
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Landing;
