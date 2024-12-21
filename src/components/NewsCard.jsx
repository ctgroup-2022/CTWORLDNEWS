import { useState } from "react";
import PropTypes from "prop-types";

const NewsCard = ({
  imageSrc,
  description,
  pdfSrc,
  title,
  date,
  onDownloadFileName = "news-pdf.pdf",
}) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  // Toggle PDF Preview Modal
  const toggleReadMore = () => {
    setIsReadMoreOpen((prevState) => !prevState);
  };

  // Handle PDF Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfSrc;
    link.download = onDownloadFileName;
    link.click();
  };

  return (
    <div className="my-6 flex justify-center">
      {/* Card Container */}
      <div
        className="rounded-lg shadow-lg overflow-hidden bg-white max-w-sm w-full hover:shadow-2xl transition-shadow duration-300"
        onClick={() => toggleReadMore()}
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={imageSrc}
            alt="News Thumbnail"
            className="w-full h-52 object-cover"
          />
          {/* Overlay Date */}
          <span className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-3 py-1 rounded">
            {date}
          </span>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-3 leading-6 mb-4">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            {/* View PDF Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click event on the main card container
                toggleReadMore();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition duration-200"
            >
              View PDF
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded transition duration-200"
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {isReadMoreOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 h-[90%] p-4 relative">
            {/* Close Button */}
            <button
              onClick={toggleReadMore}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-red-700 transition duration-200"
              aria-label="Close"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
              src={pdfSrc}
              title="PDF Preview"
              className="w-full h-full rounded-lg border-none"
              style={{ maxHeight: "80vh" }} // Responsive height for mobile
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

NewsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pdfSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDownloadFileName: PropTypes.string,
};

export default NewsCard;
