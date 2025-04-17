import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudyIllustration = ({ 
  type, 
  primaryColor = "text-gray-800 dark:text-gray-200", 
  secondaryColor = "text-gray-600 dark:text-gray-400",
  accentColor = "text-gray-700 dark:text-gray-300"
}) => {
  // News-themed colors based on brand colors
  const colors = {
    primary: "#074F9D", // Primary blue
    secondary: "#FDCA18", // Primary yellow
    lightBlue: "#3B82F6", // Light blue for accents
    darkBlue: "#053367", // Darker blue for shadows
    lightYellow: "#FFDE59", // Light yellow for highlights
    gray: "#6B7280", // Gray for neutral elements
    white: "#FFFFFF",
    black: "#111827"
  };

  const [currentScene, setCurrentScene] = useState(0);
  
  // Change scene every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // News-themed illustrations
  const scenes = [
    // Scene 1: News App/Device
    (
      <motion.g
        key="scene1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Character */}
        <g>
          {/* Body */}
          <circle cx="250" cy="230" r="45" fill={colors.primary} />
          
          {/* Face */}
          <circle cx="250" cy="230" r="40" fill={colors.white} />
          
          {/* Eyes */}
          <g>
            <circle cx="235" cy="222" r="8" fill={colors.black} />
            <circle cx="265" cy="222" r="8" fill={colors.black} />
            <circle cx="237" cy="219" r="3" fill={colors.white} />
            <circle cx="267" cy="219" r="3" fill={colors.white} />
          </g>
          
          {/* Mouth */}
          <path
            d={type === "login" ? "M230 245 Q250 265 270 245" : "M230 240 Q250 225 270 240"}
            stroke={colors.black}
            strokeWidth="3"
            fill="none"
          />
        </g>

        {/* Device - News App */}
        <g>
          {/* Smartphone or Tablet */}
          <rect x="195" y="275" width="110" height="70" rx="5" fill={colors.darkBlue} />
          <rect x="200" y="280" width="100" height="60" rx="2" fill={colors.white} />
          
          {/* News App Interface */}
          <rect x="205" y="285" width="90" height="12" rx="2" fill={colors.primary} />
          <circle cx="212" cy="291" r="3" fill={colors.secondary} />
          <rect x="218" y="288" width="40" height="6" rx="1" fill={colors.white} />
          
          {/* News Content */}
          <rect x="205" y="300" width="35" height="18" rx="1" fill={colors.lightBlue} opacity="0.7" />
          <rect x="243" y="300" width="52" height="18" rx="1" fill={colors.gray} opacity="0.1" />
          <rect x="243" y="303" width="45" height="3" rx="1" fill={colors.darkBlue} opacity="0.8" />
          <rect x="243" y="308" width="40" height="3" rx="1" fill={colors.darkBlue} opacity="0.6" />
          <rect x="243" y="313" width="30" height="3" rx="1" fill={colors.darkBlue} opacity="0.6" />
          
          <rect x="205" y="322" width="90" height="1" fill={colors.gray} opacity="0.2" />
          
          <rect x="205" y="326" width="35" height="4" rx="1" fill={colors.darkBlue} opacity="0.8" />
          <rect x="205" y="332" width="70" height="3" rx="1" fill={colors.darkBlue} opacity="0.6" />
          <rect x="205" y="337" width="60" height="3" rx="1" fill={colors.darkBlue} opacity="0.6" />
        </g>
        
        {/* Floating News Icons */}
        <motion.g
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
            y: [0, -5, 0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <circle cx="170" cy="180" r="15" fill={colors.secondary} opacity="0.7" />
          <text x="170" y="185" textAnchor="middle" fontWeight="bold" fontSize="14" fill={colors.primary}>N</text>
        </motion.g>
        
        <motion.g
          animate={{ 
            rotate: [0, -10, 0, 10, 0],
            y: [0, -7, 0, -7, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        >
          <circle cx="330" cy="170" r="12" fill={colors.primary} opacity="0.7" />
          <text x="330" y="174" textAnchor="middle" fontWeight="bold" fontSize="12" fill={colors.secondary}>W</text>
        </motion.g>
      </motion.g>
    ),
    
    // Scene 2: Newspaper/Breaking News
    (
      <motion.g
        key="scene2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Newspaper */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Newspaper Base */}
          <rect x="150" y="200" width="200" height="150" fill={colors.white} />
          <rect x="150" y="200" width="200" height="150" stroke={colors.gray} strokeWidth="1" fill="none" />
          <line x1="250" y1="200" x2="250" y2="350" stroke={colors.gray} strokeWidth="0.5" opacity="0.5" />
          
          {/* Newspaper Content - Left Column */}
          <rect x="160" y="210" width="80" height="8" rx="1" fill={colors.primary} />
          <rect x="160" y="225" width="80" height="40" rx="1" fill={colors.gray} opacity="0.1" />
          <rect x="160" y="270" width="80" height="3" rx="1" fill={colors.black} opacity="0.7" />
          <rect x="160" y="275" width="80" height="3" rx="1" fill={colors.black} opacity="0.7" />
          <rect x="160" y="280" width="70" height="3" rx="1" fill={colors.black} opacity="0.7" />
          <rect x="160" y="285" width="75" height="3" rx="1" fill={colors.black} opacity="0.7" />
          <rect x="160" y="290" width="65" height="3" rx="1" fill={colors.black} opacity="0.7" />
          
          {/* Newspaper Content - Right Column */}
          <rect x="260" y="210" width="80" height="5" rx="1" fill={colors.black} opacity="0.8" />
          <rect x="260" y="220" width="80" height="3" rx="1" fill={colors.black} opacity="0.6" />
          <rect x="260" y="225" width="80" height="3" rx="1" fill={colors.black} opacity="0.6" />
          <rect x="260" y="230" width="70" height="3" rx="1" fill={colors.black} opacity="0.6" />
          <rect x="260" y="240" width="80" height="30" rx="1" fill={colors.gray} opacity="0.1" />
          <rect x="260" y="275" width="80" height="3" rx="1" fill={colors.black} opacity="0.6" />
          <rect x="260" y="280" width="75" height="3" rx="1" fill={colors.black} opacity="0.6" />
          <rect x="260" y="285" width="65" height="3" rx="1" fill={colors.black} opacity="0.6" />
        </motion.g>
        
        {/* Breaking News Banner */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <rect x="190" y="150" width="120" height="25" rx="3" fill={colors.secondary} />
          <rect x="190" y="150" width="120" height="25" rx="3" stroke={colors.darkBlue} strokeWidth="1" fill="none" />
          <text x="250" y="167" textAnchor="middle" fontWeight="bold" fontSize="12" fill={colors.primary}>BREAKING NEWS</text>
        </motion.g>
        
        {/* Animation Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={i}
            cx={150 + i * 70}
            cy={100 + (i % 3) * 20}
            r={4}
            fill={i % 2 === 0 ? colors.primary : colors.secondary}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2 + (i % 3),
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Animated News Flash */}
        <motion.path
          d="M350,130 L370,120 L360,150 L380,140"
          stroke={colors.secondary}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.g>
    ),
    
    // Scene 3: Live Broadcast / Microphone
    (
      <motion.g
        key="scene3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* News Studio Background */}
        <rect x="170" y="180" width="160" height="120" rx="5" fill={colors.primary} opacity="0.2" />
        
        {/* Camera */}
        <motion.g
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <rect x="170" y="230" width="40" height="30" fill={colors.darkBlue} />
          <rect x="160" y="235" width="10" height="20" fill={colors.black} />
          <rect x="210" y="240" width="15" height="10" rx="2" fill={colors.primary} />
          <circle cx="175" cy="245" r="2" fill={colors.secondary} />
          
          {/* Camera Light */}
          <motion.circle
            cx="175"
            cy="245"
            r="6"
            fill={colors.secondary}
            opacity="0.3"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.g>
        
        {/* Microphone */}
        <motion.g
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <rect x="250" y="220" width="20" height="40" rx="2" fill={colors.black} />
          <ellipse cx="260" cy="210" rx="15" ry="10" fill={colors.black} />
          <ellipse cx="260" cy="210" rx="12" ry="7" fill={colors.gray} />
          
          {/* Mic Stand */}
          <rect x="257" y="260" width="6" height="40" fill={colors.black} />
          <rect x="240" y="300" width="40" height="5" rx="2" fill={colors.black} />
        </motion.g>
        
        {/* "LIVE" Sign */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <rect x="300" y="230" width="40" height="20" rx="3" fill={colors.secondary} />
          <text x="320" y="244" textAnchor="middle" fontWeight="bold" fontSize="12" fill={colors.primary}>LIVE</text>
        </motion.g>
        
        {/* Sound Waves */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${290 + i * 10},210 Q${300 + i * 10},190 ${310 + i * 10},210`}
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              pathLength: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.g>
    ),
    
    // Scene 4: Global News / World Map
    (
      <motion.g
        key="scene4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* World Map Outline */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ellipse cx="250" cy="230" rx="90" ry="70" fill={colors.primary} opacity="0.2" />
          
          {/* Simple Continent Shapes */}
          <path
            d="M230,190 Q250,180 270,190 Q290,200 280,220 Q260,230 240,220 Q220,210 230,190"
            fill={colors.primary}
          />
          <path
            d="M190,230 Q210,220 220,240 Q210,260 190,250 Q180,240 190,230"
            fill={colors.primary}
          />
          <path
            d="M270,250 Q290,240 300,250 Q310,260 290,270 Q270,265 270,250"
            fill={colors.primary}
          />
          <path
            d="M320,210 Q330,220 320,230 Q310,225 320,210"
            fill={colors.primary}
          />
        </motion.g>
        
        {/* News Location Pins */}
        {[
          { x: 235, y: 200, delay: 0.5 },
          { x: 270, y: 215, delay: 0.7 },
          { x: 200, y: 240, delay: 0.9 },
          { x: 290, y: 255, delay: 1.1 },
          { x: 320, y: 220, delay: 1.3 }
        ].map((pin, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pin.delay, type: "spring" }}
          >
            <circle cx={pin.x} cy={pin.y} r="6" fill={colors.secondary} />
            <circle cx={pin.x} cy={pin.y} r="3" fill={colors.white} />
            
            <motion.circle
              cx={pin.x}
              cy={pin.y}
              r="10"
              fill={colors.secondary}
              opacity="0.3"
              animate={{ 
                opacity: [0.3, 0, 0.3],
                scale: [1, 2, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                delay: i * 0.4
              }}
            />
          </motion.g>
        ))}
        
        {/* Connection Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${200 + Math.random() * 100},${220 + Math.random() * 20} Q${250},${220} ${250 + Math.random() * 70},${220 + Math.random() * 20}`}
            stroke={colors.secondary}
            strokeWidth="1"
            strokeDasharray="3,3"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ duration: 1.5, delay: 0.2 * i }}
          />
        ))}
        
        {/* Globe Title */}
        <motion.text
          x="250"
          y="160"
          textAnchor="middle"
          fontWeight="bold"
          fontSize="14"
          fill={colors.primary}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          GLOBAL NEWS
        </motion.text>
      </motion.g>
    ),
    
    // Scene 5: News Feed / Social Media
    (
      <motion.g
        key="scene5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* News Feed Background */}
        <rect x="150" y="180" width="200" height="160" rx="5" fill={colors.white} />
        <rect x="150" y="180" width="200" height="20" rx="5" fill={colors.primary} />
        
        {/* Multiple News Cards */}
        {[0, 1, 2].map((i) => (
          <motion.g
            key={i}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
          >
            <rect x="160" y={210 + i * 40} width="180" height="35" rx="3" fill={colors.gray} opacity="0.05" />
            <rect x="160" y={210 + i * 40} width="180" height="35" rx="3" stroke={colors.gray} strokeWidth="1" strokeOpacity="0.2" fill="none" />
            
            <rect x="170" y={215 + i * 40} width="25" height="25" rx="3" fill={i % 2 === 0 ? colors.primary : colors.secondary} opacity="0.7" />
            <rect x="205" y={215 + i * 40} width="70" height="6" rx="1" fill={colors.primary} />
            <rect x="205" y={224 + i * 40} width="120" height="4" rx="1" fill={colors.black} opacity="0.7" />
            <rect x="205" y={231 + i * 40} width="100" height="4" rx="1" fill={colors.black} opacity="0.5" />
            
            {/* Timestamp */}
            <text 
              x="325" 
              y={227 + i * 40} 
              textAnchor="end" 
              fontSize="8" 
              fill={colors.gray}
            >
              {i === 0 ? "Just now" : i === 1 ? "10m ago" : "1h ago"}
            </text>
          </motion.g>
        ))}
        
        {/* Refresh Icon */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ transformOrigin: '250px 190px' }}
        >
          <circle cx="250" cy="190" r="7" fill={colors.secondary} />
          <path d="M246 190 L250 186 L254 190" stroke={colors.primary} strokeWidth="2" fill="none" />
        </motion.g>
        
        {/* Social Media Icons */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <circle 
              key={i}
              cx={220 + i * 30} 
              cy="350" 
              r="8" 
              fill={i === 0 ? colors.primary : i === 1 ? colors.secondary : colors.darkBlue}
            />
          ))}
        </motion.g>
        
        {/* Notification */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1.7, type: "spring" }}
        >
          <circle cx="330" cy="190" r="8" fill={colors.secondary} />
          <text x="330" y="193" textAnchor="middle" fontWeight="bold" fontSize="10" fill={colors.primary}>!</text>
        </motion.g>
      </motion.g>
    )
  ];
  
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* Main SVG container */}
      <svg 
        className="w-full max-w-md" 
        viewBox="0 0 500 400" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background ellipse - always present */}
        <motion.ellipse 
          cx="250" 
          cy="330" 
          rx="200" 
          ry="30" 
          fill={type === "login" ? "#E1EFFE" : "#EFF6FF"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Different scenes with transitions */}
        <AnimatePresence mode="wait">
          {scenes[currentScene]}
        </AnimatePresence>
        
        {/* Indicator dots at the bottom to show which scene is active */}
        <g transform="translate(250, 370)">
          {scenes.map((_, i) => (
            <motion.circle
              key={i}
              cx={(i - 2) * 15}
              cy="0"
              r="5"
              fill={i === currentScene ? colors.secondary : colors.primary}
              opacity={i === currentScene ? 1 : 0.3}
              animate={{
                scale: i === currentScene ? [1, 1.2, 1] : 1
              }}
              transition={{
                duration: 0.5,
                repeat: i === currentScene ? Infinity : 0,
                repeatDelay: 1
              }}
            />
          ))}
        </g>
      </svg>
      
      {/* Title text */}
      <motion.h3 
        className={`text-xl font-bold ${primaryColor}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {type === "login" ? "Welcome Back!" : "Join The News Community!"}
      </motion.h3>
      
      {/* Description text */}
      <motion.p 
        className={`text-center max-w-xs mt-2 ${secondaryColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1.4 }}
      >
        {type === "login" 
          ? "Stay updated with the latest news" 
          : "Create an account to personalize your feed"
        }
      </motion.p>
    </motion.div>
  );
};

export default StudyIllustration;
