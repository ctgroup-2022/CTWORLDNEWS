import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const SubNavLinks = ({ links, theme }) => {

  return (
    <div
      className={`relative grid grid-cols-3 gap-2 p-3 md:flex md:flex-wrap md:justify-center md:gap-16 ${
        theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'
      }`}
    >
      {links.map((link, index) => (
        <a
          key={index}
          href={link.route}
          className={`relative m-2 p-3 md:p-4 lg:p-5 rounded-lg text-center font-bold text-white bg-gradient-to-r ${link.gradient} group overflow-hidden ${
            theme === 'light' ? 'light-theme' : 'dark-theme'
          } text-xs sm:text-sm md:text-base lg:text-lg`}
        >
         
          {link.name}
          <div className="particles"></div>
        </a>
      ))}
    </div>
  );
};

SubNavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gradient: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ).isRequired,
  theme: PropTypes.string.isRequired,
};

export default SubNavLinks;