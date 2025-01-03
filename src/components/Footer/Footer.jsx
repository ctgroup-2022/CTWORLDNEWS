import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext'; // Adjust path
import '../../index.css';
import Logo from '../../assets/Images/Logo.png'; // Assuming the logo is stored here
import BlueLogo from '../../assets/Images/Blue_Logo.png'; // Assuming the blue logo is stored here
import { useState } from 'react';

const Footer = () => {
  const { theme } = useTheme(); // Get theme context value
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <footer
      className={`relative py-8 transition duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
        } overflow-hidden`}
    >
      {/* Gradient Background Animation */}
      <div
        className={`absolute top-0 left-0 w-full h-full animate-gradient-background ${theme === 'dark'
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'
            : 'bg-gradient-to-r from-white via-gray-200 to-gray-300'
          }`}
      />

      {/* Footer Content */}
      <div className="relative container mx-auto flex flex-wrap justify-between px-6">
        {/* About Section */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2 flex items-center justify-start">
            About{' '}
            <img
              src={theme === 'light' ? BlueLogo : Logo}
              alt="CEETEEWORLD Logo"
              className="inline-block h-10 sm:h-14 ml-2"
            />
          </h2>
          <p className="text-sm sm:text-base">
            Your premier source for college news and updates across all CT institutions.
          </p>
        </div>

        {/* College Links */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6  md:mb-0">
          <h2 className="text-lg font-bold mb-2">Colleges</h2>
          <ul>
            <li>
              <Link to="https://www.ctpublicschooljal.com/" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT Public
              </Link>
            </li>
            <li>
              <Link to="https://ctworld.in/" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT World
              </Link>
            </li>
            <li>
              <Link to="https://www.ctuniversity.in/" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT University
              </Link>
            </li>
            <li>
              <Link to="https://ctglobaleducation.com/" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT Global
              </Link>
            </li>
            <li>
              <Link to="https://shahpur.ctgroup.in/home" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT Shahpur
              </Link>
            </li>
            <li>
              <Link to="https://maqsudan.ctgroup.in/home" target='_blank' className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                CT Maqsudan
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ctgroup.jalandhar/" target='_blank' className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}>
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com/ctgroupshahpur?lang=en" target='_blank' className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}>
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=%2Fctgroupofinstitutions%2F" target='_blank' className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}>
              <FaInstagram size={20} />
            </a>
            <a href="https://in.linkedin.com/company/ct-group-of-institutions" target='_blank' className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}>
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UCbnz-xueiXi4ksPb_Gbn3xg?view_as=subscriber" target='_blank' className={`transition-all transform duration-300 ease-in-out ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'} hover:scale-125`}>
              <FaYoutube size={20} />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-600 text-white px-6 py-2 rounded w-full transition-all transform duration-300 ease-in-out hover:scale-105"
          >
            Subscribe
          </button>
          {message && <p className="text-sm mt-2">{message}</p>}
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative container mx-auto flex justify-center gap-8 mt-8 border-t border-gray-300 pt-4">
        <ul className="flex space-x-6">
          <li>
            <Link to="/about" className={`text-base sm:text-lg ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/privacypolicy" className={`text-base sm:text-lg ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/termsofservice" className={`text-base sm:text-lg ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`text-base sm:text-lg ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className={`relative text-center mt-4 pt-4 border-t ${theme === 'dark'
          ? 'border-gray-700 text-gray-300'
          : 'border-gray-300 text-gray-600'
        }`}>
        <p className="text-sm sm:text-base pb-4">
          COPYRIGHT©2024 CT Group. All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;