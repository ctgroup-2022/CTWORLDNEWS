import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const Landing = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* Animated 3D Text */}
      <motion.div
        className="text-center text-white relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-5xl font-bold tracking-widest drop-shadow-lg mb-6"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to <span className="text-yellow-400">CT World News</span>
        </motion.h1>
        <motion.p
          className="text-lg font-medium text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Start your journey with us today!
        </motion.p>
        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/login"
            className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-400 hover:scale-105 transition-transform cursor-pointer relative z-20"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 text-lg font-semibold bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-400 hover:scale-105 transition-transform cursor-pointer relative z-20"
          >
            Sign Up
          </Link>
        </motion.div>
      </motion.div>
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-blue-400 rounded-full filter blur-xl opacity-50"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400 rounded-full filter blur-2xl opacity-40"
          animate={{ x: [0, -50, 50, 0], y: [0, -30, 30, 0], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </div>
     
    </div>
  );
};

export default Landing;
