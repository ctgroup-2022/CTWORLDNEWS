import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Images/Logo.png';
import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';
import SubNavLinks from './SubNavLinks';

const Navbar = ({ searchQuery, onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const subNavLinks = [
    { name: 'CT University', gradient: 'from-red-400 to-pink-500', route: '/ctuniversity' },
    { name: 'CT Public', gradient: 'from-green-400 to-blue-500', route: '/ctpublic' },
    { name: 'CT World', gradient: 'from-purple-400 to-indigo-500', route: '/ctworld' },
    { name: 'CT Global', gradient: 'from-yellow-400 to-orange-500', route: '/ctglobal' },
    { name: 'CT Shahpur', gradient: 'from-teal-400 to-cyan-500', route: '/ctshahpur' },
    { name: 'CT Maqsudan', gradient: 'from-gray-400 to-gray-600', route: '/ctmaqsudan' },
  ];

  return (
    <>
      <nav
        className={`fixed w-screen top-0 left-0 z-10 ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        } shadow-lg transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <img src={Logo} alt="CEETEEWORLD Logo" className="h-16 w-28" />

          {/* Search Bar */}
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

          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className={`md:hidden px-4 py-2 rounded-full focus:outline-none transition-transform duration-500 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            } hover:scale-110`}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} transition-all duration-300`}>
            <SubNavLinks links={subNavLinks} theme={theme} />
          </div>
        )}
      </nav>

      {/* Desktop Buttons */}
      <div
        className={`hidden md:flex mt-[60px] flex-wrap justify-center gap-16 px-4 pt-10 pb-4 ${
          theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
        } transition-all duration-300`}
      >
        <SubNavLinks links={subNavLinks} theme={theme} />
      </div>
    </>
  );
};

Navbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
