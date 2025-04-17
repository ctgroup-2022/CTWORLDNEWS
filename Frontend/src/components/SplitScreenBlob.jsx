import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Scholarship from "../assets/Images/Scholarship.jpg";
import { useTheme } from "../context/ThemeContext";
import Republic from "../assets/Images/Republic.png";
import { useInView } from "react-intersection-observer";

const SplitPage = ({ image, title, text, reverse }) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className={`flex flex-col md:flex-row h-auto min-h-screen items-center justify-center ${reverse ? 'md:flex-row-reverse' : ''} ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-800 text-white'} transition-all duration-700 ease-in-out p-4 sm:p-8 overflow-hidden`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-5">
        <motion.img
          src={image}
          alt="Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-5 sm:px-8 md:px-12">
        <motion.h1
          initial={{ opacity: 0, x: reverse ? -50 : 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-red-500 mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-sm sm:text-md md:text-lg leading-relaxed transition-colors duration-500 ease-in-out text-gray-700 dark:text-gray-300"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

const SplitScreenBlob = () => {
  return (
    <div className="scroll-smooth">
      {/* First Page (Left Image, Right Animated Text) */}
      <SplitPage
        image={Scholarship}
        title="Grand Scholarship"
        text="This initiative aims to support students in achieving their academic aspirations while embracing values of hard work, dedication, and integrity. The Lt. Dr. Manmohan Singh Scholarship is a prestigious opportunity divided into two major components:
₹40 Crore by CT University
₹20 Crore by CT Group of Institutions (Shahpur and Maqsudan campuses)"
        reverse={true}
      />

      {/* Second Page (Right Image, Left Animated Text) */}
      <SplitPage
        image={Republic}
        title="Republic Day Celebration"
        text="Republic Day marks the adoption of the Indian Constitution, symbolizing democracy, unity, and patriotism. It is a day of grand celebrations, flag hoisting, and remembering the sacrifices of our freedom fighters. Let’s come together to honor our nation's values and work towards a brighter future."
        reverse={false}
      />
    </div>
  );
};

export default SplitScreenBlob;
