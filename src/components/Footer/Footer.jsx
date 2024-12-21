
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">About <span className="text-blue-400">CEETEEWORLD</span></h2>
          <p className="text-sm">
            Your premier source for college news and updates across all CT institutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li><Link to="/about" className="text-sm hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="text-sm hover:text-blue-400">Contact</Link></li>
            <li><Link to="/privacypolicy" className="text-sm hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/termsofservice" className="text-sm hover:text-blue-400">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-bold mb-2">Newsletter</h2>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-blue-700 mt-6 pt-4 text-sm">
        <p>&copy; 2024 CEETEEWORLD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
