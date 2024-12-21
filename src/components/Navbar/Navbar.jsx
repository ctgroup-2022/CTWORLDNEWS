import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import HeadlineSection from "./HeadlineSection";
import PropTypes from "prop-types";
import Logo from "../../assets/Images/Logo.png"; // Import the logo file

const Navbar = ({ onSearch }) => {
  Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); // Call the parent function with the search value
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const subNavLinks = [
    "CT University",
    "CT Public",
    "CT World",
    "CT Global",
    "CT Shahpur",
    "CT Maqsudan",
  ];

  return (
    <>
      <nav className="bg-blue-600 shadow-lg fixed w-full top-0 left-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="CEETEEWORLD Logo"
              className="h-16 w-28" // Set proper logo height and width
            />
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <span>☰</span>}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-white">
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Home
            </Link>
          
            <Link
              to="/login"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Signup
            </Link>
          </div>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex relative items-center">
            <button
              onClick={toggleSearch}
              className="text-white text-2xl focus:outline-none"
            >
              {searchOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faSearch} />
              )}
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className={`ml-2 transition-all duration-300 rounded-full bg-white text-gray-800 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                searchOpen ? "w-48 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Desktop SubNavbar */}
        <div className="hidden md:flex bg-blue-600 shadow-lg w-full">
          <div className="container mx-auto flex justify-center items-center py-2 space-x-2">
            {subNavLinks.map((item, index) => (
              <Link
                key={item}
                to={`/${item.replace(" ", "").toLowerCase()}`}
                className={`transition-all duration-300 text-white font-semibold hover:text-yellow-400 hover:scale-110 hover:bg-blue-700 py-1 px-2 rounded-lg ${
                  index < 2 ? "text-center" : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-blue-600 space-y-4 px-4 py-2">
            <Link to="/" className="block text-white hover:text-yellow-400">
              Home
            </Link>
            
            <Link
              to="/login"
              className="block text-white hover:text-yellow-400"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block text-white hover:text-yellow-400"
            >
              Signup
            </Link>

            {/* Subnavbar */}

            <hr className="border-t border-yellow-300" />
            {subNavLinks.map((item) => (
              <Link
                key={item}
                to={`/${item.replace(" ", "").toLowerCase()}`}
                className="block text-white hover:text-yellow-400"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Headline Section */}
      <div className="mt-[80px] md:mt-[120px] lg:mt-[120px]">
        <HeadlineSection />
      </div>
    </>
  );
};

export default Navbar;
