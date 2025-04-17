import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StudyIllustration from '../components/illustrations/StudyIllustration';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [fieldFocus, setFieldFocus] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // Generate colorful text effect for filled fields - matching the signup page approach
  const getGradientText = (text, fieldType) => {
    if (!text) return null;
    
    const colorsByField = {
      email: [
        'text-purple-500 dark:text-purple-300', 'text-fuchsia-500 dark:text-fuchsia-300', 
        'text-pink-500 dark:text-pink-400', 'text-violet-500 dark:text-violet-400',
        'text-indigo-500 dark:text-indigo-400', 'text-blue-500 dark:text-blue-400', 
      ],
      password: [
        'text-cyan-500 dark:text-cyan-400', 'text-sky-500 dark:text-sky-400', 
        'text-blue-500 dark:text-blue-300', 'text-indigo-600 dark:text-indigo-400',
        'text-violet-600 dark:text-violet-400', 'text-purple-600 dark:text-purple-400', 
      ]
    };
    
    const colors = colorsByField[fieldType];
    
    return (
      <div className="absolute left-0 top-0 w-full h-full flex items-center pointer-events-none">
        <div className="pl-3 flex flex-wrap">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              className={`font-bold text-base ${colors[index % colors.length]}`}
              style={{
                textShadow: '0px 0px 3px rgba(0,0,0,0.3) dark:rgba(255,255,255,0.2)',
                display: 'inline-block',
                width: char === ' ' ? '0.5em' : 'auto',
                minWidth: char === ' ' ? '0.5em' : 'auto',
                visibility: 'visible'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFocus = (field) => {
    setFieldFocus({ ...fieldFocus, [field]: true });
  };

  const handleBlur = (field) => {
    setFieldFocus({ ...fieldFocus, [field]: false });
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 md:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 max-w-5xl mx-auto">
          {/* Illustration Section (shown below form on mobile, right side on desktop) */}
          <motion.div 
            className="w-full md:w-1/2 bg-purple-50 dark:bg-purple-900/30 p-6 sm:p-8 lg:p-10 flex items-center justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StudyIllustration 
              type="login" 
              primaryColor="text-purple-600 dark:text-purple-400" 
              secondaryColor="text-pink-500 dark:text-pink-400"
              accentColor="text-indigo-500 dark:text-indigo-400"
            />
          </motion.div>
          
          {/* Form Section (shown above illustration on mobile, left side on desktop) */}
          <motion.div 
            className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 order-1 md:order-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
              Welcome Back
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-6">
              Sign in to continue to your account
            </p>
            
            <form className="mt-6 space-y-5 max-w-md mx-auto">
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${fieldFocus.email ? 'text-purple-500 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`w-full mt-1 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      fieldFocus.email ? "border-purple-500 shadow-sm shadow-purple-300 dark:shadow-purple-900/50" : ""
                    } ${formData.email ? "text-transparent dark:text-transparent" : "text-gray-800 dark:text-gray-100"}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                  {formData.email && getGradientText(formData.email, 'email')}
                  
                  {formData.email && formData.email.includes('@') && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-green-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                
                {formData.email && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-1 text-xs flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="font-bold text-xs bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                      {formData.email.includes('@') ? 'Valid email format' : 'Please include @ in your email'}
                    </span>
                  </motion.div>
                )}
              </div>
              
              <div className="relative">
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium ${fieldFocus.password ? 'text-purple-500 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} transition-colors duration-300`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`w-full mt-1 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      fieldFocus.password ? "border-purple-500 shadow-sm shadow-purple-300 dark:shadow-purple-900/50" : ""
                    } ${formData.password && showPassword ? "text-transparent dark:text-transparent" : "text-gray-800 dark:text-gray-100"}`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                  />
                  {formData.password && showPassword && getGradientText(formData.password, 'password')}
                  
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
                {formData.password && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-1 text-xs flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-xs bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                      {formData.password.length < 6 ? 'Password should be at least 6 characters' : 'Password secured'}
                    </span>
                  </motion.div>
                )}
              </div>
              
              <div className="flex justify-center w-full">
                <motion.button
                  type="submit"
                  className="w-full max-w-xs px-4 py-2.5 sm:py-3 mt-2 text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 dark:from-purple-500 dark:to-purple-700 dark:hover:from-purple-400 dark:hover:to-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-sm sm:text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Login
                </motion.button>
              </div>
            </form>
            
            <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Don't have an account?{' '}
              <Link to="/signup" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 font-medium">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
