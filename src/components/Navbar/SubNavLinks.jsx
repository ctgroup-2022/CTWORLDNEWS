// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubNavLinks = ({ links, theme }) => {
  return (
    <div className="flex flex-wrap justify-center gap-16 px-4 pt-10 pb-4">
      {links.map((item) => (
        <Link to={item.route} key={item.name}>
          <button
            className={`relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r ${
              theme === 'light' ? item.gradient : 'from-gray-600 to-gray-900'
            } transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden group`}
          >
            <span className="relative z-10">{item.name}</span>
            <div className="particles"></div>
          </button>
        </Link>
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
