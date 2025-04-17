import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const SubNavLinks = ({ images = [], theme }) => {
  return (
    <div
      className={`relative grid grid-cols-3 gap-0 p-0 ${
        theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'
      }`}
    >
      {images
        .sort((a, b) => (a.size === 'large' ? -1 : 1))
        .map((image, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center p-0 rounded-lg ${
              theme === 'light' ? 'light-theme' : 'dark-theme'
            } ${image.size === 'large' ? 'row-span-2 z-0' : 'row-span-1 z-10'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`${
                image.size === 'large' ? 'h-40 w-auto' : 'h-20 w-auto'
              } rounded-lg`}
            />
            <span className="block mt-2 text-white text-sm md:text-base">
              {image.label}
            </span>
          </div>
        ))}
    </div>
  );
};

SubNavLinks.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      size: PropTypes.oneOf(['large', 'small']).isRequired,
    })
  ),
  theme: PropTypes.string.isRequired,
};

export default SubNavLinks;


