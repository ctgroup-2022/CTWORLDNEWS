import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => setShowMessage(true), 2000);
    const hideTimer = setTimeout(() => setHideContent(true), 6000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden">
      {/* Animated Hi Image */}
      {!hideContent && (
        <motion.div
          className="absolute bottom-0 right-0 z-10"
          initial={{ y: 500, x: 100 }}
          animate={{ y: 200, x: 50 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            className="object-contain w-32 md:w-40"
            src="src/assets/Images/hi.png"
            alt="Hi"
            animate={{ y: [-10, 10, 0] }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Welcome Text */}
      {showMessage && !hideContent && (
        <motion.div
          className="absolute bottom-[100px] right-[100px] text-white font-semibold text-lg z-10 bg-gray-800 p-3 rounded-md shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome! Let's Explore Together.
        </motion.div>
      )}

      {/* Buttons - Always Visible */}
      <div className="flex flex-col items-center z-20 mt-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Welcome to <span className="text-yellow-400">CT World News</span>
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-lg">
          Start your journey with us today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/login"
            className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-400 hover:scale-105 transition-transform"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 text-lg font-semibold bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-400 hover:scale-105 transition-transform"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-24 md:w-32 h-24 md:h-32 bg-blue-400 rounded-full filter blur-xl opacity-50"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-28 md:w-40 h-28 md:h-40 bg-purple-400 rounded-full filter blur-2xl opacity-40"
          animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </div>
    </div>
  );
};

export default Landing;
