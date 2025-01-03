import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaNewspaper, FaHeading, FaHome, FaMoon, FaSun, FaUser, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const AdminSidebar = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-all duration-300 flex flex-col text-white`}
    >
      <button
        onClick={toggleSidebar}
        className="p-4 flex items-center justify-center text-white hover:bg-indigo-700 dark:hover:bg-gray-700 focus:outline-none"
      >
        {isOpen ? "<<" : ">>"}
      </button>

      <nav className="mt-4 space-y-4">
        <button
          onClick={() => handleTabClick("dashboard")}
          className={`flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700 ${{
            activeTab: "dashboard"
          }}`}
        >
          <FaHome size={20} />
          {isOpen && <span>Dashboard</span>}
        </button>

        <button
          onClick={() => handleTabClick("news")}
          className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700"
        >
          <FaNewspaper size={20} />
          {isOpen && <span>News</span>}
        </button>

        <button
          onClick={() => handleTabClick("headlines")}
          className="flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700"
        >
          <FaHeading size={20} />
          {isOpen && <span>Headlines</span>}
        </button>
      </nav>

      <div className="mt-auto p-4">
        <button
          onClick={toggleTheme}
          className="flex items-center px-4 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          {isOpen && (
            <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
          )}
        </button>

        <button className="flex items-center px-4 py-3 mt-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-700">
          <FaUser size={20} />
          {isOpen && <span className="ml-2">Profile</span>}
        </button>

        <button className="flex items-center px-4 py-3 mt-4 rounded-lg hover:bg-red-500 dark:hover:bg-red-700">
          <FaSignOutAlt size={20} />
          {isOpen && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;
