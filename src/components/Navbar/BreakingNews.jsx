import React, { useState, useEffect } from "react";
import "./BreakingNews.css";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme hook

const newsItems = [
  "Breaking news: Major technological breakthrough announced",
  "Global climate summit reaches historic agreement",
  "Sports update: Championship finals set for next week",
  "Economic report shows positive growth trends",
];

const BreakingNews = () => {
  const { theme } = useTheme(); // Get theme context value
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Control visibility of news
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial detection
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fade animation logic for desktop and mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start hiding animation
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length); // Move to the next news item
        setIsVisible(true); // Show the next news item
      }, isMobile ? 20000 : 1000); // Ensure hiding animation completes before showing the next news
    }, isMobile ? 20000 : 4000); // Total duration for one news item (visible + hidden)
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isMobile]);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`w-full max-w-full ${
          theme === "light"
            ? "bg-white text-black border-gray-300"
            : "bg-gray-800 text-white border-gray-600"
        } border overflow-hidden`}
      >
        <div className="flex items-center">
          {/* "Latest News" Box with Red Background */}
          <div className="font-bold text-lg min-w-[130px]  bg-red-600 text-white p-2">
            Latest News
          </div>

          <div
            className={`overflow-hidden pl-4 relative w-full ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <p
              className={`news-text ${
                !isMobile && (isVisible ? "show-news" : "hide-news")
              } text-lg ${
                theme === "light" ? "text-black" : "text-white"
              } whitespace-nowrap`}
            >
              {newsItems[currentNewsIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;