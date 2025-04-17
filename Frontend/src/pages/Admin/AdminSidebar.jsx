// All imports 
import React, { useState } from "react";

import {
  FaNewspaper, FaHeading, FaHome, FaMoon, FaSun,
  FaUser, FaSignOutAlt, FaChevronLeft, FaChevronRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import CTLOGO from "../../assets/Admin/Logo/AdminLogo.png";




const AdminSidebar = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Check if tab is active
  const isActive = (tab) => activeTab === tab;

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      className={`${isOpen ? "w-64" : "w-16"
        } h-screen bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-all duration-300 flex flex-col text-white relative`}
    >
   
      <div className="px-4 py-5 flex items-center justify-center border-b border-indigo-400/30 dark:border-gray-700/30">
        {isOpen ? (
          <img src={CTLOGO} alt="CTLOGO" className="h-12 w-auto object-contain" />
        ) : (
          <img src={CTLOGO} alt="CTLOGO" className="h-12 w-auto object-contain" />
        )}
      </div>

      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-16 bg-indigo-600 dark:bg-gray-700 rounded-full p-1.5 shadow-md hover:bg-indigo-700 dark:hover:bg-gray-600 focus:outline-none transition-colors duration-200 z-10"
        title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
      </button>

      <nav className="mt-6 px-2 space-y-1.5">
        <button
          onClick={() => handleTabClick("dashboard")}
          title={!isOpen ? "Dashboard" : ""}
          className={`w-full flex items-center ${!isOpen ? "justify-center" : "space-x-4"} px-4 py-3 rounded-lg transition-all duration-200 ${isActive("dashboard")
            ? "bg-white/10 backdrop-blur-sm shadow-inner border-l-4 border-white"
            : "hover:bg-indigo-700/50 dark:hover:bg-gray-700/50"
            }`}
        >
          <FaHome size={20} />
          {isOpen && <span>SignUp Ads</span>}
        </button>
        <button
          onClick={() => handleTabClick("SignupAds")}
          title={!isOpen ? "SignupAds" : ""}
          className={`w-full flex items-center ${!isOpen ? "justify-center" : "space-x-4"} px-4 py-3 rounded-lg transition-all duration-200 ${isActive("SignupAds")
            ? "bg-white/10 backdrop-blur-sm shadow-inner border-l-4 border-white"
            : "hover:bg-indigo-700/50 dark:hover:bg-gray-700/50"
            }`}
        >
          <FaHome size={20} />
          {isOpen && <span>SignUp Ads</span>}
        </button>

        <button
          onClick={() => handleTabClick("news")}
          title={!isOpen ? "News" : ""}
          className={`w-full flex items-center ${!isOpen ? "justify-center" : "space-x-4"} px-4 py-3 rounded-lg transition-all duration-200 ${isActive("news")
            ? "bg-white/10 backdrop-blur-sm shadow-inner border-l-4 border-white"
            : "hover:bg-indigo-700/50 dark:hover:bg-gray-700/50"
            }`}
        >
          <FaNewspaper size={20} />
          {isOpen && <span>News</span>}
        </button>

        <button
          onClick={() => handleTabClick("headlines")}
          title={!isOpen ? "Headlines" : ""}
          className={`w-full flex items-center ${!isOpen ? "justify-center" : "space-x-4"} px-4 py-3 rounded-lg transition-all duration-200 ${isActive("headlines")
            ? "bg-white/10 backdrop-blur-sm shadow-inner border-l-4 border-white"
            : "hover:bg-indigo-700/50 dark:hover:bg-gray-700/50"
            }`}
        >
          <FaHeading size={20} />
          {isOpen && <span>Headlines</span>}
        </button>
      </nav>

      <div className="mt-auto p-2 space-y-1.5 border-t border-indigo-400/30 dark:border-gray-700/30 pt-4">
        <button
          onClick={toggleTheme}
          title={!isOpen ? (theme === "dark" ? "Light Mode" : "Dark Mode") : ""}
          className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-indigo-700/50 dark:hover:bg-gray-700/50 transition-all duration-200"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          {isOpen && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
        </button>

        <button
          title={!isOpen ? "Profile" : ""}
          className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-indigo-700/50 dark:hover:bg-gray-700/50 transition-all duration-200"
        >
          <FaUser size={20} />
          {isOpen && <span>Profile</span>}
        </button>

        <button
          title={!isOpen ? "Logout" : ""}
          className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-red-600/80 transition-all duration-200 mb-2"
        >
          <FaSignOutAlt size={20} />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;