import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaNewspaper, FaHeading, FaHome, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const AdminSidebar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-gray-100 dark:bg-gray-900 shadow-lg transition-all duration-300 flex flex-col`}
    >
      <button
        onClick={toggleSidebar}
        className="p-4 text-gray-700 dark:text-gray-300 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-800"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      <nav className="mt-4 space-y-4">
        <NavLink
          to="/admin"
          className="flex items-center space-x-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800"
          activeClassName="bg-gray-300 dark:bg-gray-800"
        >
          <FaHome />
          {isOpen && <span>Dashboard</span>}
        </NavLink>
        <NavLink
          to="/admin/news"
          className="flex items-center space-x-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800"
          activeClassName="bg-gray-300 dark:bg-gray-800"
        >
          <FaNewspaper />
          {isOpen && <span>News</span>}
        </NavLink>
        <NavLink
          to="/admin/headlines"
          className="flex items-center space-x-4 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800"
          activeClassName="bg-gray-300 dark:bg-gray-800"
        >
          <FaHeading />
          {isOpen && <span>Headlines</span>}
        </NavLink>
      </nav>

      <div className="mt-auto p-4">
        <button
          onClick={toggleTheme}
          className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          {isOpen && (
            <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} Mode</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
