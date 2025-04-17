import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Ballon from "../assets/Images/ballon.png"
const FloatingCharacterPopup = () => {
  const [visible, setVisible] = useState(false); // Control visibility of the popup

  useEffect(() => {
    // Interval to show popup every 30 seconds (30000 ms)
    const interval = setInterval(() => {
      setVisible(true); // Show popup

      // Hide the popup after 20 seconds
      setTimeout(() => {
        setVisible(false); // Hide popup after 20 seconds
      }, 20000); // 20 seconds before hiding

    }, 90000); // Trigger every 30 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {visible && (
        <motion.div
          className="floating-popup fixed top-1/3 left-0 flex items-center z-50 cursor-pointer"
          style={{ pointerEvents: "auto" }} // Ensure pointer events are enabled for the popup
          initial={{ opacity: 1, x: 0, y: 0 }} // Set initial opacity to 1 for full visibility
          animate={{
            opacity: 1, // Full opacity during animation
            x: ["0vw", "30vw", "60vw", "90vw", "95vw"], // Horizontal movement
            y: ["0vh", "10vh", "-10vh", "-5vh", "0vh"], // Vertical floating movement
          }}
          transition={{
            duration: 20,
            repeat: Infinity, // Repeat infinitely
            repeatType: "reverse", // Reverse animation after completing one cycle
            ease: "easeInOut",
          }}
        >
          {/* Wrap the entire floating popup in an anchor tag */}
          <a
            href="https://admissions.ctgroup.in/" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center"
          >
            {/* Character with Balloon */}
            <div className="relative">
              <img
                src={Ballon} // Replace with a real image URL
                alt="Floating Character"
                className="h-32 w-auto sm:h-48 md:h-64" // Adjust the image size for different screen sizes
              />
              <div
                className="absolute top-0 left-full ml-2 sm:ml-4 bg-[#195CA0] text-white p-2 sm:p-4 rounded-lg shadow-lg"
                style={{
                  width: "150px", // Base width
                }} // Adjust the width for different screen sizes
              >
                <p className="text-xs sm:text-sm md:text-base font-bold">Admissions are open at CTGROUP!</p>
                <button
                  className="mt-2 inline-block bg-white text-[#195CA0] py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 text-xs sm:text-sm md:text-base"
                  onClick={(e) => {
                    // Prevent default anchor behavior so we can handle the click directly
                    e.stopPropagation();
                    window.open("https://apply.ctgroup.in/", "_blank"); // Open the link on button click
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingCharacterPopup;
