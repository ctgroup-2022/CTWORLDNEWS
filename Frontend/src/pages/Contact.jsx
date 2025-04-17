import { useTheme } from "../context/ThemeContext"; // Import useTheme hook



const Contact = () => {
    const { theme } = useTheme(); // Get theme context value
  
  return (
    <>
 
 <div className={`flex justify-center items-center min-h-screen pt-28 pb-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
      {/* Main Container */}
      <div className={`w-11/12 md:w-10/12 lg:w-4/5 p-8 shadow-lg overflow-y-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>
          {/* Header */}
          <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-[#195CA0]' : 'text-[#FBCC14]'}`}>
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Have questions, feedback, or suggestions? We’d love to hear from you!
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-gray-700 font-medium mb-2  ${theme === 'light' ? ' text-gray-900' : ' text-white'}`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-gray-700 font-medium mb-2  ${theme === 'light' ? ' text-gray-900' : ' text-white'}`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-gray-700 font-medium mb-2  ${theme === 'light' ? ' text-gray-900' : ' text-white'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 bg-[#195CA0] text-white font-medium rounded-md hover:bg-[#1f4972] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? ' text-gray-800' : ' text-white'}`}>
                    Our Address
                  </h3>
                  <p className={`${theme === 'light' ? ' text-gray-800' : ' text-white'}`}>
                    CT Group of institutions is among the best colleges for graduation and post graduation degrees in Jalandhar, Punjab
                    Urban Estate Phase 2, Pratappura Road, Near Lambra, Shahpur, Jalandhar, Punjab 144020
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? ' text-gray-800' : ' text-white'}`}>
                    Email Us
                  </h3>
                  <p>
                    <a
                      href="mailto:info@ctgroup.in"
                      className="text-blue-600 underline"
                    >
                      info@ctgroup.in

                    </a>
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? ' text-gray-800' : ' text-white'}`}>
                    Call Us
                  </h3>
                  <p className="text-blue-600">
                    1800-137-2227,

                    +91-181-5055127, +91-181-5055128,
                    +91-181-2995967</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
