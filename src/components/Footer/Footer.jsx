import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';  // Adjust path
import '../../index.css';
import Logo from '../../assets/Images/Logo.png'; // Assuming the logo is stored here

const Footer = () => {
  const { theme } = useTheme();  // Get theme context value

  return (
    <footer
      className={`relative py-8 transition duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} overflow-hidden`}
    >
      {/* Gradient Background Animation */}
      <div
        className={`absolute top-0 left-0 w-full h-full animate-gradient-background ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-r from-white via-gray-200 to-gray-300'}`}
      />

      {/* Footer Content */}
      <div className="relative container mx-auto flex flex-wrap justify-between px-6">
        {/* About Section */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2 flex items-center justify-start">
            About <img src={Logo} alt="CEETEEWORLD Logo" className="inline-block h-10 sm:h-14 ml-2" />
          </h2>
          <p className="text-sm sm:text-base">
            Your premier source for college news and updates across all CT institutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li>
              <Link to="/about" className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacypolicy"
                className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/termsofservice"
                className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4">
          <h2 className="text-lg font-bold mb-2">Newsletter</h2>
          <p className="text-sm sm:text-base mb-4">
            Subscribe for updates and announcements from CEETEEWORLD.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded w-full mb-2"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded w-full transition-all transform duration-300 ease-in-out hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm sm:text-base">
          &copy; 2024 CEETEEWORLD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
