import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import BlueLogo from '../../assets/Images/Blue_Logo.png'; // Import the blue logo
import Logo from '../../assets/Images/Logo.png'; // Import the dark theme logo
import '../../index.css';

const Navbar = ({ searchQuery, onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };
  const { theme, toggleTheme } = useTheme();
  const [searchVisible, setSearchVisible] = useState(false); // For toggling search bar in mobile view

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);



  return (
    <nav
      className="fixed w-screen top-0 left-0 z-20 shadow-lg transition-all duration-300 bg-[#074F9D]"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <img
          src={Logo}
          alt="CEETEEWORLD Logo"
          className="h-16 w-28"
        />
        
        {/* Search Bar for Larger Screens */}
        <div className="hidden md:flex items-center">
          <div
            className={`flex items-center px-4 py-2 rounded-lg border ${
              theme === 'light'
                ? 'bg-gray-100 text-gray-800 border-gray-300'
                : 'bg-gray-700 text-white border-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faSearch} className="text-2xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`w-full bg-transparent outline-none ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            />
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-full focus:outline-none transition-transform duration-500 ${
            theme === 'light' ? 'bg-blue-500 text-white' : 'bg-yellow-400 text-black'
          } hover:scale-110`}
        >
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="text-2xl" />
        </button>

        {/* Search Icon for Mobile View */}
        <button
          onClick={() => setSearchVisible(!searchVisible)}
          className={`md:hidden px-4 py-2 rounded-full focus:outline-none transition-transform duration-500 ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          } hover:scale-110`}
        >
          <FontAwesomeIcon icon={faSearch} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Search Bar */}
      {searchVisible && (
        <div
          className={`md:hidden px-6 py-3 ${
            theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
          } transition-all duration-300`}
        >
          <div
            className={`flex items-center px-4 py-2 rounded-lg border ${
              theme === 'light'
                ? 'bg-gray-100 text-gray-800 border-gray-300'
                : 'bg-gray-700 text-white border-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={faSearch} className="text-2xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`w-full bg-transparent outline-none ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            />
          </div>
        </div>
      )}

   
    </nav>
  );
};

Navbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
