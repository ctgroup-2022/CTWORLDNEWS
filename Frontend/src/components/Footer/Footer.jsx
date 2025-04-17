import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext'; // Adjust path
import '../../index.css';
import Logo from '../../assets/Images/Logo.png'; // Assuming the logo is stored here
import BlueLogo from '../../assets/Images/Blue_Logo.png'; // Assuming the blue logo is stored here

const Footer = () => {
  const { theme } = useTheme(); // Get theme context value

  return (
    <footer
      className={`relative py-8 transition duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } overflow-hidden`}
    >
      {/* Gradient Background Animation */}
      <div
        className={`absolute top-0 left-0 w-full h-full animate-gradient-background ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black'
            : 'bg-gradient-to-r from-white via-gray-200 to-gray-300'
        }`}
      />

      {/* Footer Content */}
      <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {/* About Section */}
        <div className="footer-section mb-6 md:mb-0 relative pr-4 before:absolute before:right-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-600 before:to-pink-500 before:content-['']">
          <h2 className="text-lg font-bold mb-2 flex items-center justify-start">
            About{' '}
            <img
              src={ Logo}
              alt="CEETEEWORLD Logo"
              className="inline-block h-10 sm:h-14 ml-2"
            />
          </h2>
          <p className="text-sm sm:text-base">
            Your premier source for college news and updates across all CT institutions.
          </p>
        </div>

        {/* College Links */}
        <div className="footer-section mb-6 md:mb-0 relative pr-4 before:absolute before:right-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-600 before:to-pink-500 before:content-['']">
          <h2 className="text-lg font-bold mb-2">Colleges</h2>
          <ul>
            {[
              { name: 'CT Public', url: 'https://www.ctpublicschooljal.com/' },
              { name: 'CT World', url: 'https://ctworld.in/' },
              { name: 'CT University', url: 'https://www.ctuniversity.in/' },
              { name: 'CT Global', url: 'https://ctglobaleducation.com/' },
              { name: 'CT Shahpur', url: 'https://shahpur.ctgroup.in/home' },
              { name: 'CT Maqsudan', url: 'https://maqsudan.ctgroup.in/home' }
            ].map((college, index) => (
              <li key={index}>
                <Link to={college.url} target="_blank" className={`text-sm sm:text-base ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  {college.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section mb-6 md:mb-0 relative pr-4 before:absolute before:right-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-purple-600 before:to-pink-500 before:content-['']">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF size={20} />, url: 'https://www.facebook.com/ctgroup.jalandhar/' },
              { icon: <FaTwitter size={20} />, url: 'https://x.com/ctgroupshahpur?lang=en' },
              { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/accounts/login/?next=%2Fctgroupofinstitutions%2F' },
              { icon: <FaLinkedinIn size={20} />, url: 'https://in.linkedin.com/company/ct-group-of-institutions' },
              { icon: <FaYoutube size={20} />, url: 'https://www.youtube.com/channel/UCbnz-xueiXi4ksPb_Gbn3xg?view_as=subscriber' }
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer"
                 className={`transition-all transform duration-300 ease-in-out ${
                   theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'
                 } hover:scale-125`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="flex flex-col space-y-2">
            {[
              { name: 'About', path: '/about' },
              { name: 'Privacy Policy', path: '/privacypolicy' },
              { name: 'Terms of Service', path: '/termsofservice' },
              { name: 'Contact', path: '/contact' }
            ].map((link, index) => (
              <li key={index}>
                <Link to={link.path} className={`text-base sm:text-lg ${theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={`relative text-center mt-4 pt-4 border-t ${
        theme === 'dark' ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-600'
      }`}>
        <p className="text-sm sm:text-base pb-4">
          COPYRIGHT©2024 CT Group. All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
