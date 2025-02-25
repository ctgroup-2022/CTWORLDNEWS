import { Worker, Viewer } from "@react-pdf-viewer/core";
import { pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { FaDownload, FaEye, FaTag } from "react-icons/fa";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "../App.css"; // Ensure your global styles are defined here

// Make sure PDF.js worker is set properly
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error in PDF Viewer:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading PDF viewer.</div>;
    }
    return this.props.children;
  }
}

const NewsCard = ({
  imageSrc,
  description,
  pdfSrc,
  title,
  date,
  categories = [],
  onDownloadFileName = "news-pdf.pdf",
}) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleReadMore = () => setIsReadMoreOpen((prevState) => !prevState);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfSrc;
    link.download = onDownloadFileName;
    link.click();
  };

  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  // Effect to switch themes
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return (
    <div className="my-6 flex justify-center px-4 sm:px-6 md:px-0"> {/* ✅ Added padding on mobile screens */}
      {/* Card Container */}
      <div
        className="rounded-lg shadow-2xl overflow-hidden bg-white border border-white max-w-sm w-full hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
        onClick={toggleReadMore}
        style={{ backgroundColor: "var(--card-bg-color)", color: "var(--card-text-color)" }}
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

          {/* Categories on Image */}
          {categories.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#1F2937] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow"
                  style={{ fontSize: "0.75rem" }}
                >
                  <FaTag /> {category}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-3 line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm line-clamp-3 leading-6 mb-4">
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
              className="bg-[#155DA8] hover:bg-[#0E4A85] text-white font-medium px-4 py-2 rounded transition duration-200 flex items-center gap-2 max-sm:text-[12px]"
            >
              <FaEye /> View PDF
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="bg-[#155DA8] hover:bg-[#0E4A85] text-white font-medium px-4 py-2 rounded transition duration-200 flex items-center gap-2 max-sm:text-[12px]"
            >
              <FaDownload /> Download
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {isReadMoreOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white  dark:text-white rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 h-[90%] p-4 relative overflow-hidden border border-white dark:border-gray-700">
            {/* Close Button */}
            <button
              onClick={toggleReadMore}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-red-700 transition duration-200 z-10"
              aria-label="Close"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <ErrorBoundary>
              <div className="w-full h-full overflow-auto">
                <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
                  <div className="mb-8">
                    <Toolbar />
                  </div>
                  <Viewer
                    fileUrl={pdfSrc}
                    plugins={[toolbarPluginInstance]}
                    renderError={(error) => {
                      console.error("Error loading PDF:", error);
                      return <div>Error loading PDF</div>;
                    }}
                  />
                </Worker>
              </div>
            </ErrorBoundary>
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
  categories: PropTypes.arrayOf(PropTypes.string),
  onDownloadFileName: PropTypes.string,
};

export default NewsCard;
