import React from "react";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const PrivacyPolicy = () => {
    const { theme } = useTheme(); // Get theme context value
  
  return (
    <>

<div className={`flex justify-center items-center min-h-screen pt-28 pb-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
      {/* Main Container */}
      <div className={`w-11/12 md:w-10/12 lg:w-4/5 p-8 shadow-lg overflow-y-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>
        <h1 className={`text-4xl font-bold mb-6 text-center ${theme === 'light' ? 'text-[#195CA0]' : 'text-[#FBCC14]'}`}>
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Last Updated: August 25, 2024
        </p>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="leading-relaxed">
              Welcome to <strong>CEETEEWORLD</strong>. Your privacy is important
              to us. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website. Please
              read this policy carefully. If you disagree with any terms in this
              Privacy Policy, please discontinue use of our services.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your name and email address when subscribing to our newsletter.</li>
              <li>Any information provided via contact forms.</li>
              <li>Technical data, such as your IP address, browser type, and cookies.</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
            <p className="leading-relaxed">
              CEETEEWORLD uses the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To improve your browsing experience on our website.</li>
              <li>To send newsletters and updates when you opt-in.</li>
              <li>To analyze website usage to enhance performance and services.</li>
              <li>To comply with legal obligations or respond to lawful requests.</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions, please contact us at{" "}
              <a
                href="mailto:info@ctgroup.in
"
                className="text-blue-600 underline"
              >
                            info@ctgroup.in

              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
