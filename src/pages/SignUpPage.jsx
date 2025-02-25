import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 mt-12">
      <motion.div
        className="bg-white dark:bg-gray-900 shadow-lg rounded-lg px-8 py-10 max-w-md w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Create Your Account
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-400 transition-transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
