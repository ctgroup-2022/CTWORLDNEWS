import Navbar from "../Navbar/Navbar";


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen mt-8 mb-8">
      {/* Main Container */}
      <div className="bg-white w-11/12 md:w-10/12 lg:w-4/5 p-8 shadow-lg rounded-md">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
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
                  className="block text-gray-700 font-medium mb-2"
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
                  className="block text-gray-700 font-medium mb-2"
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
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
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
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Our Address
                </h3>
                <p className="text-gray-600">
                  CT Group of Institutions,  
                  Shahpur Campus,  
                  Jalandhar, Punjab, India
                </p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Us
                </h3>
                <p>
                  <a
                    href="mailto:contact@ceeteeworld.com"
                    className="text-blue-600 underline"
                  >
                    contact@ceeteeworld.com
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600">+91 123 456 7890</p>
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
